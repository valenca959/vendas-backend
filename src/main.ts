
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


const PORT = process.env.PORT;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`Server is running on http://localhost:${process.env.PORT}`);

  const config = new DocumentBuilder()
    .setTitle('API de vendas')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(PORT);

}
bootstrap();
