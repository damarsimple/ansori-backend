import { makeSchema } from "nexus";

import { join } from "path";
import { ApolloServer } from "apollo-server-express";
import * as types from "./src/server/graphql";
import { paljs } from "@paljs/nexus";
import { context } from "./src/modules/context";
import { graphqlUploadExpress } from "graphql-upload";
import express from "express";
import http from "http";
import { basePath } from "./basepath";
import { parseToken } from "./src/modules/JWT";
import { User } from "@prisma/client";
import { SECRET_KEY } from "./src/modules/Key";

export const schema = makeSchema({
  types,

  outputs: {
    typegen: join(__dirname, "nexus-typegen.ts"),

    schema: join(__dirname, "schema.graphql"),
  },

  plugins: [
    paljs({
      excludeFields: ["password"],
    }),
  ],
  contextType: {
    module: join(__dirname, "src/modules/context.ts"),

    export: "Context",
  },
});

async function startApolloServer() {
  const app = express();

  app.use(graphqlUploadExpress());

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema,
    context: async ({ req }) => {
      // Get the user token from the headers.
      const token = req.headers.authorization || "";

      if (!token) return context;

      // Try to retrieve a user with the token
      const user = await parseToken<User>(token);

      return {
        user,
        isLogged: !!user,
        isAdmin: user?.roles == "MASTER_ADMIN" || false,
        gotKey: req.headers.authorization == SECRET_KEY,
        ...context,
      };
    },
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();
