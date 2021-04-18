import { Notification } from '../../domain/entities/notification';

export class NotificationCreatedEvent {
  public notification: Notification;

  constructor(notification: Notification) {
    this.notification = notification;
  }
}
