import { IsNotEmpty } from 'class-validator';

export class CreateNotificationRequest {
  @IsNotEmpty()
  readonly message: string;
}
