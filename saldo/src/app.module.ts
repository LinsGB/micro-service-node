import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrismaConectorService } from './prisma-conector/prisma-conector.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SALDO_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'saldo-queue',
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaConectorService],
})
export class AppModule {}
