import { queryField, nonNull, list } from 'nexus'

export const DonationFindManyQuery = queryField('findManyDonation', {
  type: nonNull(list(nonNull('Donation'))),
  args: {
    where: 'DonationWhereInput',
    orderBy: list('DonationOrderByWithRelationInput'),
    cursor: 'DonationWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('DonationScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.donation.findMany({
      ...args,
      ...select,
    })
  },
})
