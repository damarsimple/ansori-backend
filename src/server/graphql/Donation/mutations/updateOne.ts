import { mutationField, nonNull } from 'nexus'

export const DonationUpdateOneMutation = mutationField('updateOneDonation', {
  type: nonNull('Donation'),
  args: {
    data: nonNull('DonationUpdateInput'),
    where: nonNull('DonationWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.donation.update({
      where,
      data,
      ...select,
    })
  },
})
