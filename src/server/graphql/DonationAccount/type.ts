import { objectType } from 'nexus'

export const DonationAccount = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'DonationAccount',
  definition(t) {
    t.int('id')
    t.string('name')
    t.string('accountNumber')
    t.string('bankName')
    t.string('logoUrl')
    t.list.field('donations', {
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
        return root.donations
      },
    })
    t.field('_count', {
      type: 'DonationAccountCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
