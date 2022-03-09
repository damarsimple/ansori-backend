import { mutationField, nonNull } from 'nexus'

export const DonationDeleteOneMutation = mutationField('deleteOneDonation', {
  type: 'Donation',
  args: {
    where: nonNull('DonationWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.donation.delete({
      where,
      ...select,
    })
  },
})
