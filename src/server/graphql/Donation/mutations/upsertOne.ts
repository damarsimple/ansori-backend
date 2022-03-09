import { mutationField, nonNull } from 'nexus'

export const DonationUpsertOneMutation = mutationField('upsertOneDonation', {
  type: nonNull('Donation'),
  args: {
    where: nonNull('DonationWhereUniqueInput'),
    create: nonNull('DonationCreateInput'),
    update: nonNull('DonationUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.donation.upsert({
      ...args,
      ...select,
    })
  },
})
