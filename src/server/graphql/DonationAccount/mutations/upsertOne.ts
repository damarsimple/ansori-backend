import { mutationField, nonNull } from 'nexus'

export const DonationAccountUpsertOneMutation = mutationField(
  'upsertOneDonationAccount',
  {
    type: nonNull('DonationAccount'),
    args: {
      where: nonNull('DonationAccountWhereUniqueInput'),
      create: nonNull('DonationAccountCreateInput'),
      update: nonNull('DonationAccountUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.donationAccount.upsert({
        ...args,
        ...select,
      })
    },
  },
)
