import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AddressEntity } from './entities/address.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAddressDto } from './dtos/createAddress.dto';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(AddressEntity)
        private readonly addressRepository: Repository<AddressEntity>,
    ) {};

    async createAddress(CreateAddressDto: CreateAddressDto, userId: number):
     Promise<AddressEntity>{
        return this.addressRepository.save({
            ...CreateAddressDto,
            userId,
        });
    }
}
