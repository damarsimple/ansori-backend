import { mutationField, nonNull } from 'nexus'

export const ImageGalleryDeleteManyMutation = mutationField(
  'deleteManyImageGallery',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ImageGalleryWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.imageGallery.deleteMany({ where } as any)
    },
  },
)
