import { queryField, nonNull, list } from 'nexus'

export const NewsFindManyQuery = queryField('findManyNews', {
  type: nonNull(list(nonNull('News'))),
  args: {
    where: 'NewsWhereInput',
    orderBy: list('NewsOrderByWithRelationInput'),
    cursor: 'NewsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('NewsScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.news.findMany({
      ...args,
      ...select,
    })
  },
})
