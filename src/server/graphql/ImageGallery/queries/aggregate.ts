import { queryField, list } from 'nexus'

export const ImageGalleryAggregateQuery = queryField('aggregateImageGallery', {
  type: 'AggregateImageGallery',
  args: {
    where: 'ImageGalleryWhereInput',
    orderBy: list('ImageGalleryOrderByWithRelationInput'),
    cursor: 'ImageGalleryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.imageGallery.aggregate({ ...args, ...select }) as any
  },
})
