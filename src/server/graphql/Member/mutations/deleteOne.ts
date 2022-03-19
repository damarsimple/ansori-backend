import { mutationField, nonNull } from 'nexus'

export const MemberDeleteOneMutation = mutationField('deleteOneMember', {
  type: 'Member',
  args: {
    where: nonNull('MemberWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.member.delete({
      where,
      ...select,
    })
  },
})
