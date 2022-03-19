import { mutationField, nonNull } from 'nexus'

export const ImageGalleryUpsertOneMutation = mutationField(
  'upsertOneImageGallery',
  {
    type: nonNull('ImageGallery'),
    args: {
      where: nonNull('ImageGalleryWhereUniqueInput'),
      create: nonNull('ImageGalleryCreateInput'),
      update: nonNull('ImageGalleryUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.imageGallery.upsert({
        ...args,
        ...select,
      })
    },
  },
)
