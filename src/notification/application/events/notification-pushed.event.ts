import { Notification } from '../../domain/notification';

export class NotificationPushedEvent {
  public notification: Notification;

  constructor(notification: Notification) {
    this.notification = notification;
  }
}
