import { queryField, list } from 'nexus'

export const DonationAccountAggregateQuery = queryField(
  'aggregateDonationAccount',
  {
    type: 'AggregateDonationAccount',
    args: {
      where: 'DonationAccountWhereInput',
      orderBy: list('DonationAccountOrderByWithRelationInput'),
      cursor: 'DonationAccountWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.donationAccount.aggregate({ ...args, ...select }) as any
    },
  },
)
