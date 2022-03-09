import { queryField, nonNull } from 'nexus'

export const DonationFindUniqueQuery = queryField('findUniqueDonation', {
  type: 'Donation',
  args: {
    where: nonNull('DonationWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.donation.findUnique({
      where,
      ...select,
    })
  },
})
