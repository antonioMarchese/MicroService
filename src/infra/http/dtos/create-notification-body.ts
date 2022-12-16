import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  recipientId: string;
  content: string;
  category: string;
}
