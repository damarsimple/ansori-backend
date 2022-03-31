import { prisma } from "./src/modules/context";
import { create } from "./src/modules/Hash";

async function main() {
  await prisma.user.create({
    data: {
      name: "Damar Albaribin",
      email: "damaralbaribin@gmail.com",
      password: await create("123456"),
      roles: "MASTER_ADMIN",
      showOnHomepage: true,
    },
  });

  let index = 0;

  for (const name of [
    "Zakat",
    "Puasa",
    "Lebaran",
    "Acara",
    "Donasi",
    "Sedekah",
    "Yatim Piatu",
  ]) {
    await prisma.category.create({
      data: {
        name,
        slug: `${name.toLowerCase().replace(/\s/g, "-")}-${index}`,
      },
    });
    index++;
  }
  const categories = await prisma.category.findMany();
  const connect = categories.map((e) => ({
    id: e.id,
  }));

  for (let i = 0; i < 100; i++) {
    await prisma.news.create({
      data: {
        title: `Test Berita ${i + 1}`,
        potrait: `https://picsum.photos/id/${i + 1}/200/300`,
        wide: `https://picsum.photos/id/${i + 1}/600/300`,
        content: "",
        shareCountMap: {},
        author: {
          connect: {
            id: 1,
          },
        },
        categories: {
          connect,
        },
        slug: `test-${i}`,
      },
    });
  }

  for (let i = 0; i < 100; i++) {
    await prisma.member.create({
      data: {
        name: `Test Member ${i + 1}`,
        role: i == 0 ? "KETUA" : i > 10 ? "ANGGOTA" : "PENGURUS",
        image: `https://picsum.photos/id/${i + 1}/200/300`,
        description: "Memiliki banyak pengalaman dalam bidang kewirausahaan",
      },
    });
  }

  for (let i = 0; i < 100; i++) {
    await prisma.imageGallery.create({
      data: {
        name: `Test Gambar ${i + 1}`,
        image: `https://picsum.photos/id/${i + 200}/200/300`,
        description: "Acara Seru dong",
      },
    });
  }

  for (const name of [
    "Yayasan Ansori",
    "Yayasan Ansori Bersama",
    "Yayasan Ansori Bersama-sama",
  ]) {
    await prisma.donationAccount.create({
      data: {
        name,
        accountNumber: "123456789",
        accountName: "123456789",
        bankName: "BCA",
        logoUrl: "/images/logo.png",
      },
    });
  }

  for (let i = 0; i < 100; i++) {
    await prisma.donation.create({
      data: {
        name: "Hamba Allah",
        amount: Math.random() * 1000 * 1000,
        accountId: 1,
        hideName: i < 5,
        type: "Sedekah",
        cityName: "Berau",
        status: i > 5 ? "APPROVED" : "PENDING",
        approvedById: i > 5 ? 1 : undefined,
      },
    });
  }
}

main();
