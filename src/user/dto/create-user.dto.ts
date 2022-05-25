import { Role } from '../../roles.enum';

export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly role: Role;
}
