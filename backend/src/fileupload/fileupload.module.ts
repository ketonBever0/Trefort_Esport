import { Global, Module } from '@nestjs/common';
import { FileUploadService } from './fileupload.service';

@Global()
@Module({
  providers: [FileUploadService],
  exports: [FileUploadService]
})
export class FileuploadModule {}
