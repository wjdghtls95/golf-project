import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DefaultController } from './modules/default/default.controller';
import { DefaultService } from './modules/default/default.service';

@Module({
  imports: [
    /**
     * TODO.. 따로 constant 를 만들어서 옮겨야됨
     * forRoot
     */
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./config/.server.${process.env.NODE_ENV}.env`,
    }),
  ],
  controllers: [DefaultController],
  providers: [DefaultService],
})
export class AppModule {}
