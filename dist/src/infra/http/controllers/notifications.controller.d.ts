import { SendNotification } from 'src/application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';
export declare class NotificationsController {
    private sendNotification;
    private cancelNotification;
    private readNotification;
    private unreadNotification;
    private countRecipientNotifications;
    private getRecipientNotifications;
    constructor(sendNotification: SendNotification, cancelNotification: CancelNotification, readNotification: ReadNotification, unreadNotification: UnreadNotification, countRecipientNotifications: CountRecipientNotifications, getRecipientNotifications: GetRecipientNotifications);
    cancel(id: string): Promise<void>;
    countFromRecepient(recipientId: string): Promise<{
        count: number;
    }>;
    getFromRecepient(recipientId: string): Promise<{
        notifications: {
            id: any;
            content: any;
            category: any;
            recipientId: any;
        }[];
    }>;
    read(id: string): Promise<void>;
    unread(id: string): Promise<void>;
    create(body: CreateNotificationBody): Promise<{
        notification: {
            id: any;
            content: any;
            category: any;
            recipientId: any;
        };
    }>;
}
