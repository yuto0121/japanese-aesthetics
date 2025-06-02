import Typewriter from 'typewriter-effect';
import styles from '../styles/Privacy.module.css';

export default function Privacy() {
    return (
        <div>
            <main className="container">
                <h1 className={styles.mainTitle}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('Privacy Policy')
                                .start();
                        }}
                        options={{
                            autoStart: true,  // マウント直後に始める
                            loop: false,      // 一度きり
                            delay: 100,       // 打鍵間隔
                            deleteSpeed: 50,
                            cursor: "",  // ※ループしないので無視されます
                        }}
                    />
                </h1>
                <div className={styles.mainTitleLine} />
            </main>
        </div>
    )
}