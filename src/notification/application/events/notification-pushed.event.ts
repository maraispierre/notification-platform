import { Notification } from '../../domain/entities/notification';

export class NotificationPushedEvent {
  public notification: Notification;

  constructor(notification: Notification) {
    this.notification = notification;
  }
}
