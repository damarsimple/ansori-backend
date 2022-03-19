import { queryField, nonNull, list } from 'nexus'

export const ImageGalleryFindCountQuery = queryField(
  'findManyImageGalleryCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'ImageGalleryWhereInput',
      orderBy: list('ImageGalleryOrderByWithRelationInput'),
      cursor: 'ImageGalleryWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('ImageGalleryScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.imageGallery.count(args as any)
    },
  },
)
