// components/ContactForm.tsx

'use client';

import { FormEvent, useState } from 'react';
import * as yup from 'yup';
import { sendContactEmail } from '../pages/api/server/.contact';
import { EmailData } from '../types/email';

// Yup バリデーションスキーマ
const schema = yup.object<EmailData>({
    from: yup.string().email('正しいメールアドレスを入力してください').required(),
    subject: yup.string().required('題名を入力してください'),
    message: yup.string().required('メッセージを入力してください')
});

const DEFAULT_DATA: EmailData = { from: '', subject: '', message: '' };

export default function ContactForm() {
    const [form, setForm] = useState<EmailData>(DEFAULT_DATA);
    const [banner, setBanner] = useState<{ message: string; status: 'success' | 'error' } | null>(null);

    // 入力ハンドラ
    const handleChange = (key: keyof EmailData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm(prev => ({ ...prev, [key]: e.target.value }));

    // 送信時
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // クライアント側でも一応バリデーション
        try {
            await schema.validate(form, { abortEarly: false });
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                setBanner({ message: err.errors.join('\n'), status: 'error' });
                return;
            }
        }

        sendContactEmail(form)
            .then(() => {
                setBanner({ message: 'メール送信に成功しました。ありがとうございました！', status: 'success' });
                setForm(DEFAULT_DATA);
            })
            .catch(() => {
                setBanner({ message: '送信に失敗しました。時間をおいて再度お試しください。', status: 'error' });
            })
            .finally(() => {
                setTimeout(() => setBanner(null), 4000);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {banner && (
                <div className={`rounded p-3 text-sm ${banner.status === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
                    {banner.message}
                </div>
            )}

            <label className="flex flex-col">
                <span className="mb-1 font-semibold">Email</span>
                <input
                    type="email"
                    className="rounded border p-2"
                    placeholder="your@email.com"
                    value={form.from}
                    onChange={handleChange('from')}
                    required
                />
            </label>

            <label className="flex flex-col">
                <span className="mb-1 font-semibold">Subject</span>
                <input
                    type="text"
                    className="rounded border p-2"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange('subject')}
                    required
                />
            </label>

            <label className="flex flex-col">
                <span className="mb-1 font-semibold">Message</span>
                <textarea
                    className="rounded border p-2"
                    rows={6}
                    placeholder="Your message"
                    value={form.message}
                    onChange={handleChange('message')}
                    required
                />
            </label>

            <button
                type="submit"
                className="rounded bg-black px-4 py-2 font-semibold text-white hover:bg-gray-800 disabled:opacity-50"
                disabled={!form.from || !form.subject || !form.message}
            >
                Send
            </button>
        </form>
    );
}