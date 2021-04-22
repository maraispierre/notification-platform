import { ModuleRef } from '@nestjs/core';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { CreateNotificationHandler } from '../../../notification/application/commands/create-notification.handler';
import { CreateNotificationCommand } from '../../../notification/application/commands/create-notification.command';
import { Notification } from '../../../notification/domain/notification';

describe('CreateNotificationHander', () => {
  const PROPERTIES = { test: 'test'};

  let commandBus: CommandBus;
  let moduleRef: ModuleRef;

  let createNotificationHandler: CreateNotificationHandler;
  let eventBus: EventBus;

  beforeEach(async () => {
    eventBus = new EventBus(commandBus, moduleRef);
    createNotificationHandler = new CreateNotificationHandler(eventBus);
  });

  describe('execute', () => {
    it('should return Notification', async () => {
      const notification = new Notification(PROPERTIES);

      jest.spyOn(eventBus, 'publish').mockImplementation(async () => null);

      const command = new CreateNotificationCommand(PROPERTIES);
      expect(await createNotificationHandler.execute(command)).toEqual(
        notification,
      );
    });
  });
});
