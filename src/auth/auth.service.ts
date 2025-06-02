import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInUserDto } from 'src/dto/signin-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtDervice: JwtService,
  ) {}

  async signIn(signinUserDto: SignInUserDto): Promise<any> {
    const user = await this.usersService.findOneByEmail(signinUserDto.email);

    if (user?.password !== signinUserDto.password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email };

    return {
      access_token: await this.jwtDervice.signAsync(payload),
    };
  }
}
