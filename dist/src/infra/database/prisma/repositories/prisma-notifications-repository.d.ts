import { Notification } from 'src/application/entities/notification';
import { NotificationsRepository } from '../../../../application/repositories/notification-respository';
import { PrismaService } from '../prisma.service';
export declare class PrismaNotificationsRepository implements NotificationsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findById(notificationId: string): Promise<Notification | null>;
    countManyByRecipientId(recipientId: string): Promise<number>;
    findManyByRecipientId(recipientId: string): Promise<Notification[]>;
    save(notification: Notification): Promise<void>;
    create(notification: Notification): Promise<void>;
}
