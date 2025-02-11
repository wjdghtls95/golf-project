import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { DefaultService } from './default.service';

@Controller()
export class DefaultController {
  constructor(private readonly appService: DefaultService) {}

  @Get('/health')
  @ApiOperation({ summary: '헬스 체크' })
  health(): Record<string, string> {
    return this.appService.health();
  }
}
