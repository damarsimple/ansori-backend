import { mutationField, nonNull } from 'nexus'

export const DonationUpdateManyMutation = mutationField('updateManyDonation', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('DonationUpdateManyMutationInput'),
    where: 'DonationWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.donation.updateMany(args as any)
  },
})
