import { mutationField, nonNull } from 'nexus'

export const MemberUpdateOneMutation = mutationField('updateOneMember', {
  type: nonNull('Member'),
  args: {
    data: nonNull('MemberUpdateInput'),
    where: nonNull('MemberWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.member.update({
      where,
      data,
      ...select,
    })
  },
})
