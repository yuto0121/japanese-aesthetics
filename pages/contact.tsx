'use client';

import Typewriter from 'typewriter-effect';
import ContactForm from '../components/ContactForm';

import {
    FaInstagram
} from 'react-icons/fa';

import styles from '../styles/Contact.module.css';

export default function Contact() {
    return (
        <div>
            {/* ─── メイン ───────────────────────────────── */}
            <main className="container">
                {/* 見出し */}
                <h1 className={styles.mainTitle}>
                    <Typewriter
                        onInit={(tw) => tw.typeString('Contact').start()}
                        options={{
                            autoStart: true,
                            loop: false,
                            delay: 100,
                            deleteSpeed: 50,
                            cursor: '',
                        }}
                    />
                </h1>
                <div className={styles.mainTitleLine} />

                {/* 2 カラム */}
                <section className={styles.contactRow}>
                    {/* ─── 左カラム ───────────────────── */}
                    <div className={styles.leftPane}>
                        <img
                            src="/images/contact.jpg"
                            alt="Abstract curved surface"
                            className={styles.leftImage}
                        />

                        <div className={styles.contactInfo}>
                            <p className={styles.email}>
                                Email:&nbsp;japanese.aesthetics.style@gmail.com
                            </p>

                            {/* SNS リンク */}
                            <div className={styles.social}>
                                <a href="https://www.instagram.com/japanese_aesthetics_style/" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ─── 右カラム ───────────────────── */}
                    <div className={styles.formWrapper}>
                        <h2 className={styles.formHeading}>Contact Form</h2>
                        <ContactForm />
                    </div>
                </section>
            </main>
        </div>
    );
}
