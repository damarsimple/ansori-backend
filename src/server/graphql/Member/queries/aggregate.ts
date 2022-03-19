import { queryField, list } from 'nexus'

export const MemberAggregateQuery = queryField('aggregateMember', {
  type: 'AggregateMember',
  args: {
    where: 'MemberWhereInput',
    orderBy: list('MemberOrderByWithRelationInput'),
    cursor: 'MemberWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.member.aggregate({ ...args, ...select }) as any
  },
})
