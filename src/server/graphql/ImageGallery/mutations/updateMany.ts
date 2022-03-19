import { mutationField, nonNull } from 'nexus'

export const ImageGalleryUpdateManyMutation = mutationField(
  'updateManyImageGallery',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('ImageGalleryUpdateManyMutationInput'),
      where: 'ImageGalleryWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.imageGallery.updateMany(args as any)
    },
  },
)
