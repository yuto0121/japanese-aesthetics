// import nodemailer from 'nodemailer';
// import { EmailData } from '../../../types/email';

// // Gmail の場合は App Password を使用
// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: process.env.AUTH_USER, // 例: yourname@gmail.com
//         pass: process.env.AUTH_PASS  // Google アプリパスワード
//     }
// });

// /**
//  * 実際にメールを送信するサーバー関数
//  * API ルート（サーバー）から呼び出してください。
//  */
// export async function sendEmail({ from, subject, message }: EmailData) {
//     await transporter.sendMail({
//         to: process.env.AUTH_USER, // 自分宛
//         from,                      // フォーム入力者のアドレス
//         subject: `[BLOG] ${subject}`,
//         html: `
//       <h2>${subject}</h2>
//       <p>${message.replace(/\\n/g, '<br />')}</p>
//       <hr />
//       <p>from: ${from}</p>
//     `
//     });
// }

import nodemailer from 'nodemailer';
import { EmailData } from '../../types/email';

const { AUTH_USER, AUTH_PASS, NODE_ENV } = process.env;

if (!AUTH_USER || !AUTH_PASS) {
  throw new Error('AUTH_USER or AUTH_PASS is not set in env file');
}

const transporter = nodemailer.createTransport({
  service: 'gmail',            // ← host/port を書くより安全
  auth: {
    user: AUTH_USER,
    pass: AUTH_PASS,           // ← 必ず App Password を使う
  },
});

export async function sendEmail({ from, subject, message }: EmailData) {
  // Gmail に合わせて sender を固定・replyTo に元メール
  await transporter.sendMail({
    from: AUTH_USER,           // 認証ユーザー
    to: AUTH_USER,             // 自分宛
    replyTo: from,             // 返信時はフォーム入力者へ
    subject: `[BLOG] ${subject}`,
    html: `
      <h2>${subject}</h2>
      <p>${message.replace(/\n/g, '<br />')}</p>
      <hr />
      <p>from: ${from}</p>
    `,
  });
}
