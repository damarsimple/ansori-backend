import { mutationField, nonNull } from 'nexus'

export const NewsUpdateManyMutation = mutationField('updateManyNews', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('NewsUpdateManyMutationInput'),
    where: 'NewsWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.news.updateMany(args as any)
  },
})
