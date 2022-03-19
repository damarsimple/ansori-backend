import { queryField, nonNull, list } from 'nexus'

export const MemberFindCountQuery = queryField('findManyMemberCount', {
  type: nonNull('Int'),
  args: {
    where: 'MemberWhereInput',
    orderBy: list('MemberOrderByWithRelationInput'),
    cursor: 'MemberWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('MemberScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.member.count(args as any)
  },
})
