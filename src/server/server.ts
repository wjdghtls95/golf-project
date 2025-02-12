import { INestApplication, Logger } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module';

export class Server {
  constructor(private readonly app: INestApplication) {}

  init(): void {
    this._initializeSwagger();
  }

  private _initializeSwagger(): void {
    const config = new DocumentBuilder()
      .setTitle('Golf Project Server')
      .setDescription('The Golf project Api Description')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(this.app, config);

    console.log(document);

    const SWAGGER_CUSTOM_OPTIONS: SwaggerCustomOptions = {
      swaggerOptions: {
        persistAuthorization: true,
      },
      customCss:
        '.swagger-ui .opblock .opblock-summary .view-line-link.copy-to-clipboard{display:flex; width:24px; margin: 0px 5px;}',
    } as const;

    SwaggerModule.setup('api-docs', this.app, document, SWAGGER_CUSTOM_OPTIONS);
  }

  async run(): Promise<void> {
    Logger.log(
      'Golf Project Server is running on port:' + process.env.SERVER_PORT,
    );

    await this.app.listen(process.env.SERVER_PORT, '0.0.0.0');
  }
}
