import { Test, TestingModule } from '@nestjs/testing';
import { PlaylogService } from './playlog.service';

describe('PlaylogService', () => {
  let service: PlaylogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaylogService],
    }).compile();

    service = module.get<PlaylogService>(PlaylogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
