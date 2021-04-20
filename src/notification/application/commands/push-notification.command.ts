import { Notification } from '../../domain/notification';

export class PushNotificationCommand {
  constructor(public readonly notification: Notification) {}
}
