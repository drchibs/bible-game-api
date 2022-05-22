import { Test, TestingModule } from '@nestjs/testing';
import { GamebankService } from './gamebank.service';

describe('GamebankService', () => {
  let service: GamebankService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GamebankService],
    }).compile();

    service = module.get<GamebankService>(GamebankService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
