import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { V1Module } from './versions/v1/v1.module';
import { DatabaseModule } from './configs/db/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DatabaseModule,
    V1Module
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
