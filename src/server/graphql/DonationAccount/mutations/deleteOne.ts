import { mutationField, nonNull } from 'nexus'

export const DonationAccountDeleteOneMutation = mutationField(
  'deleteOneDonationAccount',
  {
    type: 'DonationAccount',
    args: {
      where: nonNull('DonationAccountWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.donationAccount.delete({
        where,
        ...select,
      })
    },
  },
)
