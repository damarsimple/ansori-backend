import { queryField, nonNull, list } from 'nexus'

export const ImageGalleryFindManyQuery = queryField('findManyImageGallery', {
  type: nonNull(list(nonNull('ImageGallery'))),
  args: {
    where: 'ImageGalleryWhereInput',
    orderBy: list('ImageGalleryOrderByWithRelationInput'),
    cursor: 'ImageGalleryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ImageGalleryScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.imageGallery.findMany({
      ...args,
      ...select,
    })
  },
})
