import { queryField, list } from 'nexus'

export const NewsAggregateQuery = queryField('aggregateNews', {
  type: 'AggregateNews',
  args: {
    where: 'NewsWhereInput',
    orderBy: list('NewsOrderByWithRelationInput'),
    cursor: 'NewsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.news.aggregate({ ...args, ...select }) as any
  },
})
