import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateNotificationCommand } from './create-notification.command';
import { NotificationCreatedEvent } from '../events/notification-created.event';
import { Notification } from '../../domain/entities/notification';

@CommandHandler(CreateNotificationCommand)
export class CreateNotificationHandler
  implements ICommandHandler<CreateNotificationCommand> {
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: CreateNotificationCommand): Promise<string> {
    const notification = new Notification(command.message);
    this.eventBus.publish(new NotificationCreatedEvent(notification));
    return command.message;
  }
}
