import nodemailer from 'nodemailer';
import { EmailData } from '../../../types/email';

// Gmail の場合は App Password を使用
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.AUTH_USER, // 例: yourname@gmail.com
        pass: process.env.AUTH_PASS  // Google アプリパスワード
    }
});

/**
 * 実際にメールを送信するサーバー関数
 * App Router では server-only の場所で呼び出してください。
 */
export async function sendEmail({ from, subject, message }: EmailData) {
    await transporter.sendMail({
        to: process.env.AUTH_USER,         // 送信先（自分）
        from,                              // フォーム入力者アドレス
        subject: `[BLOG] ${subject}`,
        html: `
      <h2>${subject}</h2>
      <p>${message.replace(/\n/g, '<br />')}</p>
      <hr />
      <p>from: ${from}</p>
    `
    });
}
