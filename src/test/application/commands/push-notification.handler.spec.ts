import { ModuleRef } from '@nestjs/core';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { PushNotificationHandler } from '../../../notification/application/commands/push-notification.handler';
import { PushNotificationCommand } from '../../../notification/application/commands/push-notification.command';
import { Notification } from '../../../notification/domain/entities/notification';
import { NotificationPusherInterface } from '../../../notification/domain/interfaces/notification-pusher.interface';
import { WebSocketNotificationPusher } from '../../../notification/infrastructure/notification-pusher/web-socket-notification-pusher';
import { NotificationGateway } from '../../../notification/infrastructure/ui/gateways/notification.gateway';

describe('PushNotificationHander', () => {
  const MESSAGE = 'test';

  let commandBus: CommandBus;
  let moduleRef: ModuleRef;
  let notificationGateway: NotificationGateway;

  let pushNotificationHandler: PushNotificationHandler;
  let eventBus: EventBus;
  let notificationPusher: NotificationPusherInterface;

  beforeEach(async () => {
    eventBus = new EventBus(commandBus, moduleRef);
    notificationPusher = new WebSocketNotificationPusher(notificationGateway);
    pushNotificationHandler = new PushNotificationHandler(
      notificationPusher,
      eventBus,
    );
  });

  describe('execute', () => {
    it('should return Notification', async () => {
      const notification = new Notification(MESSAGE);

      jest.spyOn(eventBus, 'publish').mockImplementation(async () => null);
      jest
        .spyOn(notificationPusher, 'push')
        .mockImplementation(async () => null);

      const command = new PushNotificationCommand(notification);
      expect(await pushNotificationHandler.execute(command)).toEqual(
        notification,
      );
    });
  });
});
