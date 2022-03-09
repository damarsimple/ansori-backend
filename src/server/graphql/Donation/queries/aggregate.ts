import { queryField, list } from 'nexus'

export const DonationAggregateQuery = queryField('aggregateDonation', {
  type: 'AggregateDonation',
  args: {
    where: 'DonationWhereInput',
    orderBy: list('DonationOrderByWithRelationInput'),
    cursor: 'DonationWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.donation.aggregate({ ...args, ...select }) as any
  },
})
