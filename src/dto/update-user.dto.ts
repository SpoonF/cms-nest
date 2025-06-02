import { PartialType } from '@nestjs/mapped-types';
import { WithEmail } from './fields/user/with-email.dto';
import { WithName } from './fields/user/with-name.dto';
import { WithPassword } from './fields/user/with-password';

export class UpdateUserDto extends PartialType(
  WithName(WithEmail(WithPassword(class {}))),
) {}
