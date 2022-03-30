import { objectType } from 'nexus'

export const Donation = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Donation',
  definition(t) {
    t.int('id')
    t.string('name')
    t.boolean('hideName')
    t.string('message')
    t.float('amount')
    t.int('accountId')
    t.field('account', {
      type: 'DonationAccount',
      resolve(root: any) {
        return root.account
      },
    })
    t.field('status', { type: 'DonationStatus' })
    t.string('cityName')
    t.field('type', { type: 'DonationType' })
    t.nullable.int('approvedById')
    t.nullable.field('approvedBy', {
      type: 'User',
      resolve(root: any) {
        return root.approvedBy
      },
    })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
