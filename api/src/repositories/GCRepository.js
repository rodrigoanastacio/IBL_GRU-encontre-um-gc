import { prisma } from "../lib/prisma.js";

export class GCRepository {
  async findAll() {
    return prisma.gC.findMany({
      include: {
        addressDetails: true,
        coordinates: true,
      },
    });
  }

  async findById(id) {
    return prisma.gC.findUnique({
      where: { id },
      include: {
        addressDetails: true,
        coordinates: true,
      },
    });
  }

  async create(data) {
    const { addressDetails, coordinates, ...gcData } = data;

    return prisma.gC.create({
      data: {
        ...gcData,
        addressDetails: {
          create: addressDetails,
        },
        coordinates: {
          create: coordinates,
        },
      },
      include: {
        addressDetails: true,
        coordinates: true,
      },
    });
  }

  async update(id, data) {
    const { addressDetails, coordinates, ...gcData } = data;

    return prisma.gC.update({
      where: { id },
      data: {
        ...gcData,
        addressDetails: {
          update: addressDetails,
        },
        coordinates: {
          update: coordinates,
        },
      },
      include: {
        addressDetails: true,
        coordinates: true,
      },
    });
  }

  async delete(id) {
    await prisma.gC.delete({
      where: { id },
    });
  }
}
