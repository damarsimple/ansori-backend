import { mutationField, nonNull } from 'nexus'

export const NewsDeleteOneMutation = mutationField('deleteOneNews', {
  type: 'News',
  args: {
    where: nonNull('NewsWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.news.delete({
      where,
      ...select,
    })
  },
})
