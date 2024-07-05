import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dtos/login.dto';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService) {}

    async login(loginDto: LoginDto): Promise<UserEntity> {
        const user = await this.userService.findUserByEmail(loginDto.email).catch(() => undefined);

        const isMatch = await compare(loginDto.password, user?.password) || '';

        if (!user || !isMatch) {
            throw new NotFoundException('email ou senha invalidos');
        }

        return user;
        
    }
}