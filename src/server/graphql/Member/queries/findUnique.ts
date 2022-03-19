import { queryField, nonNull } from 'nexus'

export const MemberFindUniqueQuery = queryField('findUniqueMember', {
  type: 'Member',
  args: {
    where: nonNull('MemberWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.member.findUnique({
      where,
      ...select,
    })
  },
})
