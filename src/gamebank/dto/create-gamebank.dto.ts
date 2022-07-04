import { Tag } from '@prisma/client';

export class CreateGamebankDto {
  readonly bookId: number;
  readonly chapter: string;
  readonly verse: string[];
  readonly difficultyId: number;
  readonly tags: Tag[];
  readonly text: string;
}
