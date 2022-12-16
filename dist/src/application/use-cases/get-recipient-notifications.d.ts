import { NotificationsRepository } from '../repositories/notification-respository';
import { Notification } from '@application/entities/notification';
interface GetRecipientNotificationsRequest {
    recipientId: string;
}
interface GetRecipientNotificationsResponse {
    notifications: Notification[];
}
export declare class GetRecipientNotifications {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: GetRecipientNotificationsRequest): Promise<GetRecipientNotificationsResponse>;
}
export {};
