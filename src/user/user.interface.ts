import { Role } from '@prisma/client';

export interface UserObject {
  uuid: string;
  name: string;
  email: string;
  highScore: number;
  role: Role;
  countryId: number;
  rankId: number;
}

/*export interface UserObject {
  user: UserRO;
}*/
