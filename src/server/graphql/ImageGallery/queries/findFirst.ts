import { queryField, list } from 'nexus'

export const ImageGalleryFindFirstQuery = queryField('findFirstImageGallery', {
  type: 'ImageGallery',
  args: {
    where: 'ImageGalleryWhereInput',
    orderBy: list('ImageGalleryOrderByWithRelationInput'),
    cursor: 'ImageGalleryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ImageGalleryScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.imageGallery.findFirst({
      ...args,
      ...select,
    })
  },
})
