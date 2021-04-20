import { Notification } from '../../domain/notification';

export class NotificationCreatedEvent {
  public notification: Notification;

  constructor(notification: Notification) {
    this.notification = notification;
  }
}
