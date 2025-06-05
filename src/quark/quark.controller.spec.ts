import { Test, TestingModule } from '@nestjs/testing';
import { QuarkController } from './quark.controller';

describe('QuarkController', () => {
  let controller: QuarkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuarkController],
    }).compile();

    controller = module.get<QuarkController>(QuarkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
