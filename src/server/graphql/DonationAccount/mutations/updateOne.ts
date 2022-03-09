import { mutationField, nonNull } from 'nexus'

export const DonationAccountUpdateOneMutation = mutationField(
  'updateOneDonationAccount',
  {
    type: nonNull('DonationAccount'),
    args: {
      data: nonNull('DonationAccountUpdateInput'),
      where: nonNull('DonationAccountWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.donationAccount.update({
        where,
        data,
        ...select,
      })
    },
  },
)
