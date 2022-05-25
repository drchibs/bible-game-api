export class CreateGamebankDto {
  readonly bookId: number;
  readonly chapter: string;
  readonly verse: string[];
  readonly difficultyId: number;
  readonly tags: string[];
  readonly text: string;
}
