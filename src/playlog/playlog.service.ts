import { Injectable } from '@nestjs/common';
import { DBService } from '../db/db.service';
import { Prisma, PlayLog } from '@prisma/client';

@Injectable()
export class PlaylogService {
  constructor(private prisma: DBService) {}

  async create(data: Prisma.PlayLogCreateInput): Promise<PlayLog> {
    return this.prisma.playLog.create({
      data,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PlayLogWhereUniqueInput;
    where?: Prisma.PlayLogWhereInput;
    orderBy?: Prisma.PlayLogOrderByWithRelationInput;
  }): Promise<PlayLog[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.playLog.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(id: number): Promise<PlayLog> {
    return this.prisma.playLog.findFirst({
      where: { id },
    });
  }

  update(id: number, data: any) {
    return this.prisma.playLog.update({
      data,
      where: { id },
    });
  }

 /* remove(id: number) {
    return `This action removes a #${id} playlog`;
  }*/
}
