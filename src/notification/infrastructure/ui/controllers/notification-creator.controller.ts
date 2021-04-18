import { CommandBus } from '@nestjs/cqrs';
import { Body, Controller, Post } from '@nestjs/common';
import { NotificationDto } from '../dtos/notification.dto';
import { CreateNotificationCommand } from '../../../application/commands/create-notification.command';

@Controller('notifications')
export class NotificationCreatorController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  public async push(@Body() notification: NotificationDto): Promise<string> {
    return await this.commandBus.execute(
      new CreateNotificationCommand(notification.message),
    );
  }
}
