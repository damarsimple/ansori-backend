import { queryField, nonNull, list } from 'nexus'

export const MemberFindManyQuery = queryField('findManyMember', {
  type: nonNull(list(nonNull('Member'))),
  args: {
    where: 'MemberWhereInput',
    orderBy: list('MemberOrderByWithRelationInput'),
    cursor: 'MemberWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('MemberScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.member.findMany({
      ...args,
      ...select,
    })
  },
})
