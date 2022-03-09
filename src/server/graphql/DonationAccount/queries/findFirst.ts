import { queryField, list } from 'nexus'

export const DonationAccountFindFirstQuery = queryField(
  'findFirstDonationAccount',
  {
    type: 'DonationAccount',
    args: {
      where: 'DonationAccountWhereInput',
      orderBy: list('DonationAccountOrderByWithRelationInput'),
      cursor: 'DonationAccountWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('DonationAccountScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.donationAccount.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
