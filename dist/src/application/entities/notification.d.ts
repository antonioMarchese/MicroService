import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
export interface NotificationProps {
    recipientId: string;
    category: string;
    content: Content;
    readAt?: Date | null;
    canceledAt?: Date | null;
    createdAt: Date;
}
export declare class Notification {
    private _id;
    private props;
    constructor(props: Replace<NotificationProps, {
        createdAt?: Date;
    }>, id?: string);
    get id(): string;
    set content(content: Content);
    get content(): Content;
    set recipientId(recipientId: string);
    get recipientId(): string;
    set category(category: string);
    get category(): string;
    read(): void;
    unread(): void;
    set readAt(readAt: Date | null | undefined);
    get readAt(): Date | null | undefined;
    get canceledAt(): Date | null | undefined;
    cancel(): void;
    get createdtAt(): Date;
}
