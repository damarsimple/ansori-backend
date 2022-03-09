import { mutationField, nonNull } from 'nexus'

export const DonationAccountUpdateManyMutation = mutationField(
  'updateManyDonationAccount',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('DonationAccountUpdateManyMutationInput'),
      where: 'DonationAccountWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.donationAccount.updateMany(args as any)
    },
  },
)
