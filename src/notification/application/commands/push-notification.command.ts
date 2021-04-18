import { Notification } from '../../domain/entities/notification';

export class PushNotificationCommand {
  constructor(public readonly notification: Notification) {}
}
