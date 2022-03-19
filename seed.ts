import { prisma } from "./src/modules/context";
import { hash } from "./src/modules/hash";

async function main() {

    await prisma.user.create({
        data: {
            name: "Damar Albaribin",
            email: "damaralbaribin@gmail.com",
            password: await hash("123456"),
            roles: "MASTER_ADMIN",
            showOnHomepage: true
        }
    })


    for (const name of ["Zakat", "Puasa", "Lebaran", "Acara", "Donasi", "Sedekah", "Yatim Piatu"]) {
        await prisma.category.create({
            data: {
                name,
            }
        })
    }
    const categories = await prisma.category.findMany();
    const connect = categories.map(e => ({
        id: e.id
    }))

    for (let i = 0; i < 100; i++) {
        await prisma.news.create({
            data: {
                title: `Test Berita ${i + 1}`,
                potrait: `https://picsum.photos/id/${i + 1}/200/300`,
                wide: "https://picsum.photos/id/${i + 1}/600/300",
                content: "",
                authorId: 1,
                categories: {
                    connect
                }
            }
        })

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
                bankName: "BCA",
                logoUrl: "/images/logo.png",
            }
        })
    }

    for (let i = 0; i < 10; i++) {
        await prisma.donation.create({
            data: {
                name: "Hamba Allah",
                amount: 100000,
                accountId: 1,
                status: i > 5 ? "APPROVED" : "PENDING",
                approvedById: i > 5 ? 1 : undefined,
            }
        })
    }


}

main();