import { objectType } from 'nexus'

export const Member = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Member',
  definition(t) {
    t.int('id')
    t.string('name')
    t.string('role')
    t.nullable.string('description')
    t.nullable.string('image')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
