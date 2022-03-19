import { objectType } from 'nexus'

export const ImageGallery = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ImageGallery',
  definition(t) {
    t.int('id')
    t.string('name')
    t.nullable.string('description')
    t.nullable.string('image')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
