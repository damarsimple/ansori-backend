import { mutationField, nonNull } from 'nexus'

export const MemberUpsertOneMutation = mutationField('upsertOneMember', {
  type: nonNull('Member'),
  args: {
    where: nonNull('MemberWhereUniqueInput'),
    create: nonNull('MemberCreateInput'),
    update: nonNull('MemberUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.member.upsert({
      ...args,
      ...select,
    })
  },
})
