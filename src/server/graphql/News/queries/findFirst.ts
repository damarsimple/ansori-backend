import { queryField, list } from 'nexus'

export const NewsFindFirstQuery = queryField('findFirstNews', {
  type: 'News',
  args: {
    where: 'NewsWhereInput',
    orderBy: list('NewsOrderByWithRelationInput'),
    cursor: 'NewsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('NewsScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.news.findFirst({
      ...args,
      ...select,
    })
  },
})
