import { Module } from '@nestjs/common';
import { ClanService } from './clan.service';
import { ClanController } from './clan.controller';

@Module({
  providers: [ClanService],
  controllers: [ClanController]
})
export class ClanModule {}
