import { Module } from '@nestjs/common';
import { SessionteamService } from './sessionteam.service';
import { SessionteamController } from './sessionteam.controller';

@Module({
  providers: [SessionteamService],
  controllers: [SessionteamController]
})
export class SessionteamModule {}
