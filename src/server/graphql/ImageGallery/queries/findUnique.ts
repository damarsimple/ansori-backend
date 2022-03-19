import { queryField, nonNull } from 'nexus'

export const ImageGalleryFindUniqueQuery = queryField(
  'findUniqueImageGallery',
  {
    type: 'ImageGallery',
    args: {
      where: nonNull('ImageGalleryWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.imageGallery.findUnique({
        where,
        ...select,
      })
    },
  },
)
