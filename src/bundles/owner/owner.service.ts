import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';
import { Query } from '@nestjs/graphql';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner) private ownerRepository: Repository<Owner>,
  ) {}
  async create(createOwnerInput: CreateOwnerInput): Promise<Owner> {
    const owner = this.ownerRepository.create(createOwnerInput);
    return await this.ownerRepository.save(owner);
  }

  async findAll(): Promise<Owner[]> {
    return await this.ownerRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} owner`;
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return `This action updates a #${id} owner`;
  }

  async remove(id: number): Promise<Owner> {
    const ownerToRemove = await this.ownerRepository.findOne({where: {id}});
    if (!ownerToRemove) {
      throw new NotFoundException(`Owner with ID ${id} not found`);
    }
    await this.ownerRepository.remove(ownerToRemove); 
    return ownerToRemove;
  }
}
