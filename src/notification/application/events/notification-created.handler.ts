import { CommandBus, EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { NotificationCreatedEvent } from '../../application/events/notification-created.event';
import { PushNotificationCommand } from '../commands/push-notification.command';

@EventsHandler(NotificationCreatedEvent)
export class NotificationCreatedHandler
  implements IEventHandler<NotificationCreatedEvent> {
  constructor(private readonly commandBus: CommandBus) {}
  handle(event: NotificationCreatedEvent) {
    this.commandBus.execute(new PushNotificationCommand(event.notification));
  }
}
