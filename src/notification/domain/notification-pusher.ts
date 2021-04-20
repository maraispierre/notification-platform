import { Notification } from '../entities/notification';

export interface NotificationPusher {
  push(notification: Notification): void;
}
