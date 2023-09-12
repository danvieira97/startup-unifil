import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClientDTO } from './dtos/create-client.dto';
import { Client } from './interfaces/clients.interface';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel('Client') private readonly clientModel: Model<Client>,
  ) {}

  async createClient(createClientDTO: CreateClientDTO): Promise<Client> {
    const { email } = createClientDTO;

    const findClient = await this.clientModel.findOne({ email });
    if (findClient) {
      throw new BadRequestException(
        `Cliente com o e-mail: ${email} já cadastrado`,
      );
    }

    const { password, confirmPassword } = createClientDTO;
    if (password !== confirmPassword) {
      throw new BadRequestException(
        `A senha e confirmação de senha precisam ser iguais`,
      );
    }

    const createClient = new this.clientModel(createClientDTO);
    return await createClient.save();
  }

  async getAllClients(): Promise<Client[]> {
    return await this.clientModel.find();
  }

  async getClientByID(id: string): Promise<Client> {
    const client = await this.clientModel.findById(id);

    if (!client) {
      throw new NotFoundException(`Cliente com o id: ${id} não encontrado`);
    }

    return client;
  }

  async loginUser(loginClientDTO): Promise<Client> {
    const { email, password } = loginClientDTO;
    const user = await this.clientModel.findOne({ email: email });
    if (!user) {
      throw new NotFoundException(
        `Cliente com o email: ${email} não econtrado`,
      );
    }
    if (user.password !== password) {
      throw new NotFoundException(`Senha inválida`);
    }

    return user;
  }
}
