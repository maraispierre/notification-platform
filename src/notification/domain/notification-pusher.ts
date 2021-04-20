import { Notification } from './notification';

export interface NotificationPusher {
  push(notification: Notification): void;
}
