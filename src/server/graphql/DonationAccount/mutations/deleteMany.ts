import { mutationField, nonNull } from 'nexus'

export const DonationAccountDeleteManyMutation = mutationField(
  'deleteManyDonationAccount',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'DonationAccountWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.donationAccount.deleteMany({ where } as any)
    },
  },
)
