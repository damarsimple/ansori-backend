import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('email')
    t.nullable.string('name')
    t.nullable.string('profilePicture')
    t.string('password')
    t.list.field('news', {
      type: 'News',
      args: {
        where: 'NewsWhereInput',
        orderBy: 'NewsOrderByWithRelationInput',
        cursor: 'NewsWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'NewsScalarFieldEnum',
      },
      resolve(root: any) {
        return root.news
      },
    })
    t.list.field('approvedDonations', {
      type: 'Donation',
      args: {
        where: 'DonationWhereInput',
        orderBy: 'DonationOrderByWithRelationInput',
        cursor: 'DonationWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'DonationScalarFieldEnum',
      },
      resolve(root: any) {
        return root.approvedDonations
      },
    })
    t.boolean('showOnHomepage')
    t.field('roles', { type: 'Roles' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('_count', {
      type: 'UserCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
