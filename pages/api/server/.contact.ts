// pages/api/server/.contact.ts

'use client';

import { EmailData } from '../../../types/email';

/**
 * クライアント側から API ルートへ POST するヘルパー
 */
export async function sendContactEmail(data: EmailData) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    const { message } = await res.json();
    throw new Error(message || 'Server error');
  }

  return res.json();
}

export default sendContactEmail;