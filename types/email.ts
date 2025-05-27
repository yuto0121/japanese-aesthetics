// types/email.ts

// 1. 共通で使うメールデータ型
export interface EmailData {
    from: string;
    subject: string;
    message: string;
}
