import { mutationField, nonNull } from 'nexus'

export const MemberUpdateManyMutation = mutationField('updateManyMember', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('MemberUpdateManyMutationInput'),
    where: 'MemberWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.member.updateMany(args as any)
  },
})
