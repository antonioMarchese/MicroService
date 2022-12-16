import { NotificationsRepository } from '../repositories/notification-respository';
interface CountRecipientNotificationsRequest {
    recipientId: string;
}
interface CountRecipientNotificationsResponse {
    count: number;
}
export declare class CountRecipientNotifications {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: CountRecipientNotificationsRequest): Promise<CountRecipientNotificationsResponse>;
}
export {};
