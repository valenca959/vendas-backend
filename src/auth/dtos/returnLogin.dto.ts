import { ReturnUserDto } from "src/user/dtos/returnUser.dto";

export interface ReturnLogin{
    user: ReturnUserDto;
    acessToken: string;
}