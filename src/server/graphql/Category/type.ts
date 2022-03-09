import { objectType } from 'nexus'

export const Category = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Category',
  definition(t) {
    t.int('id')
    t.string('name')
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
    t.field('_count', {
      type: 'CategoryCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
