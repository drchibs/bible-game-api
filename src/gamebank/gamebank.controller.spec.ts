import { Test, TestingModule } from '@nestjs/testing';
import { GamebankController } from './gamebank.controller';
import { GamebankService } from './gamebank.service';

describe('GamebankController', () => {
  let controller: GamebankController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GamebankController],
      providers: [GamebankService],
    }).compile();

    controller = module.get<GamebankController>(GamebankController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
