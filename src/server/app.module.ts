import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { DefaultModule } from './modules/default/default.module';

@Module({
  imports: [
    /**
     * TODO.. 따로 constant 를 만들어서 옮겨야됨
     * TODO.. env path /src/server extension 만드는게 나을듯?
     */
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./src/server/config/.server.${process.env.NODE_ENV}.env`,
    }),

    /**
     * DB
     */
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true, // 자동으로 엔티티 로드
      synchronize: process.env.NODE_ENV === 'test' ? true : false, // 개발 환경에서는 true (운영 환경에서는 false 추천)
    }),

    // health
    DefaultModule,

    // auth
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
