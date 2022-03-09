import { mutationField, nonNull } from 'nexus'

export const NewsUpdateOneMutation = mutationField('updateOneNews', {
  type: nonNull('News'),
  args: {
    data: nonNull('NewsUpdateInput'),
    where: nonNull('NewsWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.news.update({
      where,
      data,
      ...select,
    })
  },
})
