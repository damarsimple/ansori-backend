import { mutationField, nonNull } from 'nexus'

export const CategoryUpdateManyMutation = mutationField('updateManyCategory', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('CategoryUpdateManyMutationInput'),
    where: 'CategoryWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.category.updateMany(args as any)
  },
})
