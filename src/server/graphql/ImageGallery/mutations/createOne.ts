import { mutationField, nonNull } from 'nexus'

export const ImageGalleryCreateOneMutation = mutationField(
  'createOneImageGallery',
  {
    type: nonNull('ImageGallery'),
    args: {
      data: nonNull('ImageGalleryCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.imageGallery.create({
        data,
        ...select,
      })
    },
  },
)
