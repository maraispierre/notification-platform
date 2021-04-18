import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { NotificationCreatedEvent } from '../events/notification-created.event';
import { map } from 'rxjs/operators';
import { PushNotificationCommand } from '../commands/push-notification.command';

@Injectable()
export class NotificationsSagas {
  @Saga()
  notificationCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(NotificationCreatedEvent),
      map((event) => new PushNotificationCommand(event.notification)),
    );
  };
}
