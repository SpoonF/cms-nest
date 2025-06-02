import { IsEmail } from 'class-validator';

export function WithEmail<T extends new (...args: any[]) => any>(Base: T) {
  abstract class WithEmail extends Base {
    @IsEmail()
    readonly email: string;
  }
  return WithEmail;
}
