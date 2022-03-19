import { objectType } from 'nexus'

export const News = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'News',
  definition(t) {
    t.int('id')
    t.boolean('published')
    t.string('title')
    t.nullable.field('author', {
      type: 'User',
      resolve(root: any) {
        return root.author
      },
    })
    t.nullable.int('authorId')
    t.string('slug')
    t.list.field('categories', {
      type: 'Category',
      args: {
        where: 'CategoryWhereInput',
        orderBy: 'CategoryOrderByWithRelationInput',
        cursor: 'CategoryWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CategoryScalarFieldEnum',
      },
      resolve(root: any) {
        return root.categories
      },
    })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.int('views')
    t.nullable.string('potrait')
    t.nullable.string('wide')
    t.string('content')
    t.nullable.string('description')
    t.field('_count', {
      type: 'NewsCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
