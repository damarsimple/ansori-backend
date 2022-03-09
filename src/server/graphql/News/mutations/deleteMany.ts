import { mutationField, nonNull } from 'nexus'

export const NewsDeleteManyMutation = mutationField('deleteManyNews', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'NewsWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.news.deleteMany({ where } as any)
  },
})
