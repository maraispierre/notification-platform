import { IsNotEmpty } from 'class-validator';

export class NotificationDto {
  @IsNotEmpty()
  readonly message: string;
}
