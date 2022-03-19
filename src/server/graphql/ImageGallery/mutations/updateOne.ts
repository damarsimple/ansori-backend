import { mutationField, nonNull } from 'nexus'

export const ImageGalleryUpdateOneMutation = mutationField(
  'updateOneImageGallery',
  {
    type: nonNull('ImageGallery'),
    args: {
      data: nonNull('ImageGalleryUpdateInput'),
      where: nonNull('ImageGalleryWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.imageGallery.update({
        where,
        data,
        ...select,
      })
    },
  },
)
