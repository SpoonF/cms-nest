import { IsString, Length } from 'class-validator';

export function WithPassword<T extends new (...args: any[]) => any>(Base: T) {
  abstract class WithPassword extends Base {
    @IsString()
    @Length(6, 100)
    readonly password: string;
  }
  return WithPassword;
}
