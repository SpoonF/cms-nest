import { IsString, Length } from 'class-validator';

export function WithName<T extends new (...args: any[]) => any>(Base: T) {
  abstract class WithName extends Base {
    @IsString()
    @Length(2, 50)
    readonly name: string;
  }
  return WithName;
}
