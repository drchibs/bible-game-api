import { GameType } from '@prisma/client';

export class CreatePlaylogDto {
  readonly playerId: number;
  readonly gameType: GameType;
  readonly totalScore: number;
  readonly baseScore: number;
  readonly bonusScore: number;
  readonly averageTimeSpent: number;
  readonly numberOfCorrectAnswers: number;
}
