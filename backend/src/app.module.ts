import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { OrganizationModule } from './organization/organization.module';
import { EventModule } from './event/event.module';
import { CompetitionModule } from './competition/competition.module';
import { SessionteamModule } from './sessionteam/sessionteam.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    PrismaModule,
    OrganizationModule,
    EventModule,
    CompetitionModule,
    SessionteamModule,
  ],
})
export class AppModule {}
