import { Injectable } from '@nestjs/common';
//import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { DBService } from '../db/db.service';
import { Prisma, Tag } from '@prisma/client';

@Injectable()
export class TagService {
  constructor(private prisma: DBService) {}

  async create(data: Prisma.TagCreateInput): Promise<Tag> {
    return this.prisma.tag.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TagWhereUniqueInput;
    where?: Prisma.TagWhereInput;
    orderBy?: Prisma.TagOrderByWithRelationInput;
  }): Promise<Tag[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.tag.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(id: number) {
    return this.prisma.tag.findFirst({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.tag.update({ data, where: { id } });
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
