import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { NotificationCreatorController } from './infrastructure/ui/controllers/notification-creator.controller';
import { CreateNotificationHandler } from './application/commands/create-notification.handler';
import { PushNotificationHandler } from './application/commands/push-notification.handler';
import { NotificationsSagas } from './application/sagas/notifications.saga';
import { NotificationGateway } from './infrastructure/ui/gateways/notification.gateway';
import { WebSocketNotificationPusher } from './infrastructure/notification-pusher/web-socket-notification-pusher';

@Module({
  imports: [CqrsModule],
  controllers: [NotificationCreatorController],
  providers: [
    NotificationsSagas,
    CreateNotificationHandler,
    PushNotificationHandler,
    NotificationGateway,
    {
      provide: 'NotificationPusherInterface',
      useClass: WebSocketNotificationPusher,
    },
  ],
})
export class NotificationModule {}
