import { Test, TestingModule } from '@nestjs/testing';
import { PlaylogController } from './playlog.controller';
import { PlaylogService } from './playlog.service';

describe('PlaylogController', () => {
  let controller: PlaylogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlaylogController],
      providers: [PlaylogService],
    }).compile();

    controller = module.get<PlaylogController>(PlaylogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
