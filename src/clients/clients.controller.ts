import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDTO } from './dtos/create-client.dto';
import { LoginClientDTO } from './dtos/login-client.dto';
import { Client } from './interfaces/clients.interface';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientService: ClientsService) {}

  @Post('createClient')
  async creteClient(@Body() createClientDTO: CreateClientDTO): Promise<Client> {
    return await this.clientService.createClient(createClientDTO);
  }

  @Get('allClients')
  async getAllClients(): Promise<Client[]> {
    return await this.clientService.getAllClients();
  }

  @Get('/:id')
  async getClientByID(@Param('id') id: string): Promise<Client> {
    return await this.clientService.getClientByID(id);
  }

  @Post('login')
  async loginUser(@Body() loginClientDTO: LoginClientDTO): Promise<Client> {
    return await this.clientService.loginUser(loginClientDTO);
  }
}
