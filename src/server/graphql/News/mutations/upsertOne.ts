import { mutationField, nonNull } from 'nexus'

export const NewsUpsertOneMutation = mutationField('upsertOneNews', {
  type: nonNull('News'),
  args: {
    where: nonNull('NewsWhereUniqueInput'),
    create: nonNull('NewsCreateInput'),
    update: nonNull('NewsUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.news.upsert({
      ...args,
      ...select,
    })
  },
})
