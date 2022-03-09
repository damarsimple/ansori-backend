import { mutationField, nonNull } from 'nexus'

export const DonationAccountCreateOneMutation = mutationField(
  'createOneDonationAccount',
  {
    type: nonNull('DonationAccount'),
    args: {
      data: nonNull('DonationAccountCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.donationAccount.create({
        data,
        ...select,
      })
    },
  },
)
