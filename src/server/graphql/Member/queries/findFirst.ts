import { queryField, list } from 'nexus'

export const MemberFindFirstQuery = queryField('findFirstMember', {
  type: 'Member',
  args: {
    where: 'MemberWhereInput',
    orderBy: list('MemberOrderByWithRelationInput'),
    cursor: 'MemberWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('MemberScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.member.findFirst({
      ...args,
      ...select,
    })
  },
})
