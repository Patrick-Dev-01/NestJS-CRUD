import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

// Passar os modulos npo import ao inves de importar os controllers e providers aqui
@Module({
  imports: [TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
