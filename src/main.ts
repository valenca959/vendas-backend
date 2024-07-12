
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


const PORT = process.env.PORT;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
  await app.listen(PORT);
}
bootstrap();
