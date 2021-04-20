import { NotificationPusher } from '../../domain/notification-pusher';
import { NotificationGateway } from '../ui/websocket/notification.gateway';
import { Injectable } from '@nestjs/common';
import { Notification } from '../../domain/notification';

@Injectable()
export class WebSocketNotificationPusher implements NotificationPusher {
  constructor(private readonly notificationGateway: NotificationGateway) {}

  push(notification: Notification): void {
    this.notificationGateway.server.emit('notification', notification);
  }
}
