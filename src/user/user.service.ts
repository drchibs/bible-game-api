import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { DBService } from '../db.service';

@Injectable()
export class UserService {
  constructor(private prisma: DBService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async getUser(id: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id: Number(id) },
    });
  }

  async getUsers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async updateUser(id: number, data): Promise<User> {
    return this.prisma.user.update({
      data,
      where: { id },
    });
  }
}
