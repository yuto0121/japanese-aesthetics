// pages/contact.tsx
import { FormEvent, useState } from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import Navigation from '../components/Navigation';
import styles from '../styles/Contact.module.css';

type Banner = { message: string; status: 'success' | 'error' };

export default function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [banner, setBanner] = useState<Banner | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // API に送信するペイロード
        const payload = {
            from: email,
            subject: `Contact: ${firstName} ${lastName}`,
            message,
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const body = await res.json();
                throw new Error(body.message || '送信エラー');
            }

            setBanner({ message: '送信に成功しました！', status: 'success' });
            // フォームをリセット
            setFirstName('');
            setLastName('');
            setEmail('');
            setMessage('');
        } catch (err) {
            console.error(err);
            setBanner({ message: '送信に失敗しました。再度お試しください。', status: 'error' });
        } finally {
            setTimeout(() => setBanner(null), 3000);
        }
    };

    return (
        <div>
            <Navigation />

            <main className="container">
                <h1 className={styles.mainTitle}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Contact').start();
                        }}
                        options={{ autoStart: true, loop: false, delay: 100, deleteSpeed: 50, cursor: '' }}
                    />
                </h1>
                <div className={styles.mainTitleLine} />

                <section className={styles.contactRow}>
                    <div className={styles.leftPane}>
                        <img
                            src="/images/contact.jpg"
                            alt="Abstract curved surface"
                            className={styles.leftImage}
                        />

                        <div className={styles.contactInfo}>
                            <p className={styles.email}>
                                Email:&nbsp;japanese-aesthetics-style@gmail.com
                            </p>

                            <div className={styles.social}>
                                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                                <a href="#" aria-label="YouTube"><FaYoutube /></a>
                                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formWrapper}>
                        <h2 className={styles.formHeading}>Contact Form</h2>

                        {banner && (
                            <div className={`p-3 mb-4 rounded ${banner.status === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
                                {banner.message}
                            </div>
                        )}

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <label>
                                First name
                                <input
                                    type="text"
                                    placeholder="Jane"
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                    required
                                />
                            </label>

                            <label>
                                Last name
                                <input
                                    type="text"
                                    placeholder="Smitherton"
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                    required
                                />
                            </label>

                            <label>
                                Email address
                                <input
                                    type="email"
                                    placeholder="email@example.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                            </label>

                            <label>
                                Your message
                                <textarea
                                    placeholder="Enter your question or message"
                                    rows={6}
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    required
                                />
                            </label>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}
