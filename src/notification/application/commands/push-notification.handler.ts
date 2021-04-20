import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { PushNotificationCommand } from './push-notification.command';
import { NotificationPushedEvent } from '../events/notification-pushed.event';
import { Inject } from '@nestjs/common';
import { NotificationPusher } from '../../domain/notification-pusher';
import { Notification } from '../../domain/notification';

@CommandHandler(PushNotificationCommand)
export class PushNotificationHandler
  implements ICommandHandler<PushNotificationCommand> {
  constructor(
    @Inject('NotificationPusher')
    private readonly notificationPusher: NotificationPusher,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: PushNotificationCommand): Promise<Notification> {
    this.notificationPusher.push(command.notification);
    this.eventBus.publish(new NotificationPushedEvent(command.notification));
    return command.notification;
  }
}
