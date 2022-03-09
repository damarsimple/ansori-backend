import { mutationField, nonNull } from 'nexus'

export const CategoryDeleteManyMutation = mutationField('deleteManyCategory', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'CategoryWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.category.deleteMany({ where } as any)
  },
})
