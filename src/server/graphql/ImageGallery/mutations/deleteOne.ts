import { mutationField, nonNull } from 'nexus'

export const ImageGalleryDeleteOneMutation = mutationField(
  'deleteOneImageGallery',
  {
    type: 'ImageGallery',
    args: {
      where: nonNull('ImageGalleryWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.imageGallery.delete({
        where,
        ...select,
      })
    },
  },
)
