import { Injectable } from '@nestjs/common';
import { DBService } from '../db/db.service';
import { Prisma, GameBank } from '@prisma/client';

@Injectable()
export class GamebankService {
  constructor(private prisma: DBService) {}

  async create(data: Prisma.GameBankUncheckedCreateInput): Promise<GameBank> {
    return this.prisma.gameBank.create({ data });
  }

  findAll() {
    return `This action returns all gamebank`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gamebank`;
  }

  update(id: number, data: any) {
    return `This action updates a #${id} gamebank`;
  }

  remove(id: number) {
    return `This action removes a #${id} gamebank`;
  }
}
