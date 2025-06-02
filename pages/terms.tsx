import Typewriter from 'typewriter-effect';
import styles from '../styles/Terms.module.css';

export default function Terms() {
    return (
        <div>
            <main className="container">
                <h1 className={styles.mainTitle}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('Terms & Conditions')
                                .start();
                        }}
                        options={{
                            autoStart: true,
                            loop: false,
                            delay: 100,
                            deleteSpeed: 50,
                            cursor: "",
                        }}
                    />
                </h1>
                <div className={styles.mainTitleLine} />
            </main>
        </div>
    )
}