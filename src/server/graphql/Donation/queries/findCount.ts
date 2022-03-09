import { queryField, nonNull, list } from 'nexus'

export const DonationFindCountQuery = queryField('findManyDonationCount', {
  type: nonNull('Int'),
  args: {
    where: 'DonationWhereInput',
    orderBy: list('DonationOrderByWithRelationInput'),
    cursor: 'DonationWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('DonationScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.donation.count(args as any)
  },
})
