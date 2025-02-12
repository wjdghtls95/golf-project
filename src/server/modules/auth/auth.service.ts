import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Auth } from './auth.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  @InjectRepository(Auth)
  private readonly authRepository: Repository<Auth>;

  /**
   * 회원가입
   */
  async signup(name: string) {
    const authTest = this.authRepository.create({ name: name });

    // console.log(authTest);

    await this.authRepository.insert(authTest);

    return authTest;
  }
}
