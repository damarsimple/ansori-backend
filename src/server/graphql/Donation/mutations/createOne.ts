import { mutationField, nonNull } from 'nexus'

export const DonationCreateOneMutation = mutationField('createOneDonation', {
  type: nonNull('Donation'),
  args: {
    data: nonNull('DonationCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.donation.create({
      data,
      ...select,
    })
  },
})
