import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DefaultService } from './default.service';

@ApiTags('health')
@Controller()
export class DefaultController {
  constructor(private readonly appService: DefaultService) {}

  @Get('/health')
  @ApiOperation({ summary: '헬스 체크' })
  health(): Record<string, string> {
    return this.appService.health();
  }
}
