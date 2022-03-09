import { queryField, nonNull, list } from 'nexus'

export const DonationAccountFindManyQuery = queryField(
  'findManyDonationAccount',
  {
    type: nonNull(list(nonNull('DonationAccount'))),
    args: {
      where: 'DonationAccountWhereInput',
      orderBy: list('DonationAccountOrderByWithRelationInput'),
      cursor: 'DonationAccountWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('DonationAccountScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.donationAccount.findMany({
        ...args,
        ...select,
      })
    },
  },
)
