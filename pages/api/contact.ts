import type { NextApiRequest, NextApiResponse } from 'next';
import * as yup from 'yup';
import { EmailData } from '../../types/email';
import { sendEmail } from './server/email';

const bodySchema: yup.ObjectSchema<EmailData> = yup.object({
    from: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required()
});

/**
 * POST /api/contact
 */
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // バリデーション
    try {
        await bodySchema.validate(req.body, { abortEarly: false });
    } catch (err) {
        if (err instanceof yup.ValidationError) {
            return res.status(400).json({ message: 'Validation error', errors: err.errors });
        }
        return res.status(400).json({ message: 'Bad Request' });
    }

    // 送信
    try {
        await sendEmail(req.body as EmailData);
        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('[EMAIL_ERROR]', error);
        return res.status(500).json({ message: 'Email failed' });
    }
}
