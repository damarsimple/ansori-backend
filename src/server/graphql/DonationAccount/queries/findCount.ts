import { queryField, nonNull, list } from 'nexus'

export const DonationAccountFindCountQuery = queryField(
  'findManyDonationAccountCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'DonationAccountWhereInput',
      orderBy: list('DonationAccountOrderByWithRelationInput'),
      cursor: 'DonationAccountWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('DonationAccountScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.donationAccount.count(args as any)
    },
  },
)
