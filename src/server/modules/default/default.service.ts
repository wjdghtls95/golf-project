import { Injectable } from '@nestjs/common';

@Injectable()
export class DefaultService {
  health(): Record<string, string> {
    return { env: process.env.NODE_ENV };
  }
}
