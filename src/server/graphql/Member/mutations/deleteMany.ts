import { mutationField, nonNull } from 'nexus'

export const MemberDeleteManyMutation = mutationField('deleteManyMember', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'MemberWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.member.deleteMany({ where } as any)
  },
})
