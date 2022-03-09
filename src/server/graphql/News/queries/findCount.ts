import { queryField, nonNull, list } from 'nexus'

export const NewsFindCountQuery = queryField('findManyNewsCount', {
  type: nonNull('Int'),
  args: {
    where: 'NewsWhereInput',
    orderBy: list('NewsOrderByWithRelationInput'),
    cursor: 'NewsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('NewsScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.news.count(args as any)
  },
})
