import { CommandBus } from '@nestjs/cqrs';
import { Body, Controller, Post } from '@nestjs/common';
import { Notification } from '../../../domain/entities/notification';
import { NotificationDto } from '../dtos/notification.dto';
import { CreateNotificationCommand } from '../../../application/commands/create-notification.command';

@Controller('notifications')
export class NotificationCreatorController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('/push')
  public async push(
    @Body() notification: CreateNotificationRequest,
  ): Promise<Notification> {
    return await this.commandBus.execute(
      new CreateNotificationCommand(notification.message),
    );
  }
}

