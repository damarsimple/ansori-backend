import { mutationField, nonNull } from 'nexus'

export const MemberCreateOneMutation = mutationField('createOneMember', {
  type: nonNull('Member'),
  args: {
    data: nonNull('MemberCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.member.create({
      data,
      ...select,
    })
  },
})
