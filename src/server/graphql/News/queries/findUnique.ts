import { queryField, nonNull } from 'nexus'

export const NewsFindUniqueQuery = queryField('findUniqueNews', {
  type: 'News',
  args: {
    where: nonNull('NewsWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.news.findUnique({
      where,
      ...select,
    })
  },
})
