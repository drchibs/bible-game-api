import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { DBService } from '../db/db.service';
import * as bcrypt from 'bcrypt';
import { UserObject } from './user.interface';

@Injectable()
export class UserService {
  constructor(private prisma: DBService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<UserObject> {
    const saltOrRounds = 10;
    const pwd = data.password;
    data.password = await bcrypt.hash(pwd, saltOrRounds);
    return this.prisma.user.create({
      data,
    });
  }

  async getUser(id: any): Promise<UserObject> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async getUserByEmail(email: string): Promise<any> {
    return this.prisma.user.findUnique({
      where: {
        email: String(email),
      },
    });
  }

  async getUsers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<UserObject[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async updateUser(id: number, data): Promise<UserObject> {
    return this.prisma.user.update({
      data,
      where: { id },
    });
  }
}
