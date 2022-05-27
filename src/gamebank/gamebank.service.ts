import { Injectable } from '@nestjs/common';
import { DBService } from '../db/db.service';
import { Prisma, GameBank } from '@prisma/client';

@Injectable()
export class GamebankService {
  constructor(private prisma: DBService) {}

  async create(data: Prisma.GameBankUncheckedCreateInput): Promise<GameBank> {
    return this.prisma.gameBank.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GameBankWhereUniqueInput;
    where?: Prisma.GameBankWhereInput;
    orderBy?: Prisma.GameBankOrderByWithRelationInput;
  }): Promise<GameBank[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.gameBank.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(id: number) {
    return this.prisma.gameBank.findFirst({
      where: { id },
    });
  }

  update(id: number, data: any) {
    return this.prisma.gameBank.update({
      data,
      where: { id },
    });
  }

  /*remove(id: number) {
    return `This action removes a #${id} gamebank`;
  }*/
}
