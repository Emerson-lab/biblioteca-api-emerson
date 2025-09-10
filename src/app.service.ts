import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) { }

  async getHello(): Promise<string> {
    const users = await this.prisma.user.findMany();
    return `Banco conectado! Usuários encontrados: ${users.length}`;
  }
}
