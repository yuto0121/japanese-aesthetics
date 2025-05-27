import { NextRequest, NextResponse } from 'next/server';
import * as yup from 'yup';
import { sendEmail } from '../../../pages/api/server/.email';
import { EmailData } from '../../../types/email';

const bodySchema: yup.ObjectSchema<EmailData> = yup.object({
    from: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required()
});

export async function POST(req: NextRequest) {
    const body = (await req.json()) as Partial<EmailData>;

    // スキーマ検証
    try {
        await bodySchema.validate(body, { abortEarly: false });
    } catch (err) {
        if (err instanceof yup.ValidationError) {
            return NextResponse.json({ message: 'Validation error', errors: err.errors }, { status: 400 });
        }
        return NextResponse.json({ message: 'Bad Request' }, { status: 400 });
    }

    try {
        await sendEmail(body as EmailData);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Email failed' }, { status: 500 });
    }
}
