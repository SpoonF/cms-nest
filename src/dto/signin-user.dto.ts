import { WithEmail } from './fields/user/with-email.dto';
import { WithPassword } from './fields/user/with-password';

export class SignInUserDto extends WithEmail(WithPassword(class {})) {}
