import { Notification } from '../entities/notification';

export interface NotificationPusherInterface {
  push(notification: Notification): void;
}
