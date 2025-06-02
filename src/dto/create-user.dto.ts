import { WithEmail } from './fields/user/with-email.dto';
import { WithName } from './fields/user/with-name.dto';
import { WithPassword } from './fields/user/with-password';

export class CreateUserDto extends WithName(
  WithEmail(WithPassword(class {})),
) {}
