import { queryField, nonNull } from 'nexus'

export const DonationAccountFindUniqueQuery = queryField(
  'findUniqueDonationAccount',
  {
    type: 'DonationAccount',
    args: {
      where: nonNull('DonationAccountWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.donationAccount.findUnique({
        where,
        ...select,
      })
    },
  },
)
