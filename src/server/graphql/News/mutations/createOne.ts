import { mutationField, nonNull } from 'nexus'

export const NewsCreateOneMutation = mutationField('createOneNews', {
  type: nonNull('News'),
  args: {
    data: nonNull('NewsCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.news.create({
      data,
      ...select,
    })
  },
})
