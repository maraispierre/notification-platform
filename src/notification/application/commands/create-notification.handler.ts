import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateNotificationCommand } from './create-notification.command';
import { NotificationCreatedEvent } from '../events/notification-created.event';
import { Notification } from '../../domain/notification';

@CommandHandler(CreateNotificationCommand)
export class CreateNotificationHandler
  implements ICommandHandler<CreateNotificationCommand> {
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: CreateNotificationCommand): Promise<Notification> {
    const notification = new Notification(command.properties);
    this.eventBus.publish(new NotificationCreatedEvent(notification));
    return notification;
  }
}
