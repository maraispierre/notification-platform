import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { NotificationCreatorController } from './infrastructure/ui/http/notification-creator.controller';
import { CreateNotificationHandler } from './application/commands/create-notification.handler';
import { PushNotificationHandler } from './application/commands/push-notification.handler';
import { NotificationGateway } from './infrastructure/ui/websocket/notification.gateway';
import { WebSocketNotificationPusher } from './infrastructure/domain/web-socket-notification-pusher';
import { NotificationCreatedHandler } from './application/events/notification-created.handler';

@Module({
  imports: [CqrsModule],
  controllers: [NotificationCreatorController],
  providers: [
    NotificationCreatedHandler,
    CreateNotificationHandler,
    PushNotificationHandler,
    NotificationGateway,
    {
      provide: 'NotificationPusher',
      useClass: WebSocketNotificationPusher,
    },
  ],
})
export class NotificationModule {}
