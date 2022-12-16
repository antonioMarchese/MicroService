import { NotificationsRepository } from '../repositories/notification-respository';
interface UnreadNotificationRequest {
    notificationId: string;
}
type UnreadNotificationResponse = void;
export declare class UnreadNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: UnreadNotificationRequest): Promise<UnreadNotificationResponse>;
}
export {};
