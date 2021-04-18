import { NotificationPusherInterface } from '../../domain/interfaces/notification-pusher.interface';
import { NotificationGateway } from '../ui/gateways/notification.gateway';
import { Injectable } from '@nestjs/common';
import { Notification } from '../../domain/entities/notification';

@Injectable()
export class WebsocketNotificationPusher
  implements NotificationPusherInterface {
  constructor(private readonly notificationGateway: NotificationGateway) {}

  push(notification: Notification): void {
    this.notificationGateway.server.emit('notification', notification);
  }
}
