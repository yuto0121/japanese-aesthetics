import Typewriter from 'typewriter-effect';
import ContactForm from '../components/ContactForm';
import Navigation from '../components/Navigation';
import styles from '../styles/Contact.module.css';

export default function Contact() {
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
                        </div>
                    </div>

                    <div className={styles.formWrapper}>
                        <h2 className={styles.formHeading}>Contact Form</h2>
                        <ContactForm />
                    </div>
                </section>
            </main>
        </div>
    );
}
