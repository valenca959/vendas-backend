import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { LoginPayload } from 'src/auth/dtos/loginPayload.dto';
import { ROLES_KEY } from 'src/decorators/roles.decorators';
import { UserType } from 'src/user/enum/user-type.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<UserType[]>(
      ROLES_KEY, 
      [context.getHandler(), context.getClass()],
  );
  if (!requiredRoles) {
    return true;
  }

    const {autorization} = context.switchToHttp().getRequest().headers;

    const loginPlayload: LoginPayload | undefined = await this.jwtService.verifyAsync(autorization, {secret: process.env.JWT_SECRET
    }).catch(() => undefined);

    if (!loginPlayload) {
      return false;
    }


    return requiredRoles.some((role) => role === loginPlayload.typeUser);
  }
}