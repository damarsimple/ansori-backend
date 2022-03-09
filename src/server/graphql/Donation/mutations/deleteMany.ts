import { mutationField, nonNull } from 'nexus'

export const DonationDeleteManyMutation = mutationField('deleteManyDonation', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'DonationWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.donation.deleteMany({ where } as any)
  },
})
