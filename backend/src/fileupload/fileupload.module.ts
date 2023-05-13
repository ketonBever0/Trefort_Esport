import { Global, Module } from '@nestjs/common';
import { FileuploadService } from './fileupload.service';

@Global()
@Module({
  providers: [FileuploadService]
})
export class FileuploadModule {}
