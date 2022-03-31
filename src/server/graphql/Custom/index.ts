import {
  arg,
  asNexusMethod,
  extendType,
  intArg,
  nonNull,
  objectType,
  stringArg,
} from "nexus";

import axios from "axios";
import { load } from "cheerio";

async function getEmasPrice() {
  const url = "https://www.hargaemas.com/";

  const html = await (await axios.get(url)).data;

  const cheerio = load(html);

  return parseFloat(
    (cheerio(".price-current").html() as string)?.replace(".", "")
  );
}

async function getBerasPrice() {
  const url = "https://hargapangan.id/tabel-harga/pedagang-besar/daerah";

  const html = await (await axios.get(url)).data;

  const cheerio = load(html);

  const price = cheerio("tbody")
    .children("tr")
    .first()
    .children("td")
    .last()
    .children()
    .children()
    .html();

  return parseFloat(price?.replace(".", "") ?? "");
}

export const MetalPrice = objectType({
  name: "MetalPrice",
  definition(t) {
    t.string("name");
    t.float("price");
  },
});

const hourMS = 1000 * 60 * 60;

let lastChangeMap = {
  emas: Date.now(),
  beras: Date.now(),
};

let lastPriceMap = { emas: 0, beras: 0 };

export const queryMetalPrice = extendType({
  type: "Query",
  definition(t) {
    t.field("getEmasPrice", {
      type: MetalPrice,
      resolve: async () => {
        let price = lastPriceMap.emas;

        if (
          Date.now() - lastChangeMap.emas > hourMS ||
          lastPriceMap.emas == 0
        ) {
          price = await getEmasPrice();
          lastPriceMap.emas = price;
          lastChangeMap.emas = Date.now();
        }

        return {
          name: "Emas",
          price,
        };
      },
    });
    t.field("getBerasPrice", {
      type: MetalPrice,
      resolve: async () => {
        let price = lastPriceMap.beras;

        if (
          Date.now() - lastChangeMap.beras > hourMS ||
          lastPriceMap.beras == 0
        ) {
          price = await getBerasPrice();
          lastPriceMap.beras = price;
          lastChangeMap.beras = Date.now();
        }

        return {
          name: "Beras",
          price,
        };
      },
    });
  },
});

import { GraphQLUpload } from "graphql-upload";
import { Stream } from "stream";
import fs from "fs";
import { basePath } from "../../../../basepath";
import { createToken } from "../../../modules/JWT";
import { verify } from "../../../modules/Hash";
export const Upload = asNexusMethod(GraphQLUpload, "upload");

async function stream2buffer(stream: Stream): Promise<Buffer> {
  return new Promise<Buffer>((resolve, reject) => {
    const _buf = Array<any>();

    stream.on("data", (chunk) => _buf.push(chunk));
    stream.on("end", () => resolve(Buffer.concat(_buf)));
    stream.on("error", (err) => reject(`error converting stream - ${err}`));
  });
}

export const AuthResponse = objectType({
  name: "AuthResponse",
  definition(t) {
    t.boolean("status");
    t.nullable.string("token");
    t.nullable.string("message");
    t.nullable.field("user", { type: "User" });
  },
});

export const uploadMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("uploadFile", {
      type: "String",
      args: {
        file: arg({ type: "Upload" }),
        //  path: nonNull(stringArg()),
      },
      resolve: async (_, { file }, {}) => {
        const {
          filename,
          mimetype,
          encoding,
          createReadStream,
        }: {
          filename: string;
          mimetype: string;
          encoding: string;
          createReadStream: () => NodeJS.ReadableStream;
        } = await file;

        const path =
          basePath +
          "/assets/" +
          `${Math.floor(Math.random() * 10000)}-${filename}`;

        try {
          createReadStream().pipe(fs.createWriteStream(path));

          return path?.replace(basePath, "");
        } catch (error) {
          return "";
        }
      },
    });

    t.field("login", {
      type: AuthResponse,
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_, { email, password }, ctx) => {
        const user = await ctx.prisma.user.findFirst({
          where: {
            email,
          },
        });

        if (!user) {
          return {
            status: false,
            message: "Akun tidak ditemukan ...",
          };
        }

        if (!verify(password, user.password)) {
          return {
            status: false,
            message: "Password salah ...",
          };
        }

        return {
          status: true,
          token: createToken(user),
          user,
        };
      },
    });

    t.field("reportView", {
      type: "Boolean",
      args: {
        id: nonNull(intArg()),
      },
      resolve: async (_, args, ctx) => {
        await ctx.prisma.news.update({
          where: {
            id: args.id,
          },
          data: {
            views: {
              increment: 1,
            },
          },
        });

        return true;
      },
    });

    t.field("reportShare", {
      type: "Boolean",
      args: {
        id: nonNull(intArg()),
        key: nonNull(stringArg()),
      },
      resolve: async (_, args, ctx) => {
        const d = await ctx.prisma.news.findUnique({
          where: {
            id: args.id,
          },
        });

        if (!d) {
          return false;
        }

        const cp = d.shareCountMap || {};

        if (d.shareCountMap) {
          //@ts-ignore
          cp[args.key] = cp[args.key] + 1;
        } else {
          //@ts-ignore
          cp[args.key] = 0;
        }

        await ctx.prisma.news.update({
          where: {
            id: args.id,
          },
          data: {
            shareCountMap: cp,
          },
        });

        return true;
      },
    });

    t.field("register", {
      type: AuthResponse,
      args: {
        email: nonNull(stringArg()),
        name: nonNull(stringArg()),
        password: nonNull(stringArg()),
        roles: nonNull("Roles"),
      },
      resolve: async (_, { email, name, password, roles }, ctx) => {
        const user = await ctx.prisma.user.findFirst({
          where: {
            email,
          },
        });

        if (user) {
          return {
            status: false,
            message: "Akun sudah terdaftar",
          };
        }

        const newUser = await ctx.prisma.user.create({
          data: {
            email,
            name,
            password: await createToken(password),
            roles,
          },
        });

        return {
          status: true,
          token: createToken(newUser),
          user: newUser,
        };
      },
    });
  },
});
