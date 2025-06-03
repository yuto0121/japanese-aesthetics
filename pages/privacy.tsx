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
                            autoStart: true,
                            loop: false,
                            delay: 100,
                            deleteSpeed: 50,
                            cursor: "",
                        }}
                    />
                </h1>
                <div className={styles.mainTitleLine} />
                <div className={styles.content}>
                    <p className={styles.lastUpdated}>Last Updated: June 3, 2025</p>
                    
                    <p>japanese-aesthetics.com (hereinafter "the Site") is committed to protecting the privacy and personal data of all visitors. This Privacy Policy ("Policy") explains how we collect, use, share, and safeguard your information when you visit or use our Site.</p>

                    <h2>1. Definitions</h2>
                    <ul>
                        <li><strong>Personal Data</strong>: Any information relating to an identified or identifiable individual (e.g., name, email address, phone number, etc.).</li>
                        <li><strong>User/You</strong>: Any visitor to or consumer of the Site, whether browsing freely or submitting information via forms.</li>
                    </ul>

                    <h2>2. Information We Collect</h2>
                    <h3>1. Information You Provide Voluntarily</h3>
                    <ul>
                        <li><strong>Contact Forms & Inquiries</strong>: If you send us a message via our contact form or subscribe to a newsletter, you may enter your name and email address.</li>
                        <li><strong>Comments</strong>: If you leave comments on blog posts, we collect the content you submit and any identifier you choose (e.g., name or pseudonym, email).</li>
                    </ul>

                    <h3>2. Automatically Collected Information</h3>
                    <ul>
                        <li><strong>Device & Browser Data</strong>: IP address, browser type/version, operating system, referral/exit pages, and date/time stamps.</li>
                        <li><strong>Cookies and Similar Technologies</strong>: We may use cookies and web beacons to collect information about your browsing behavior (e.g., pages viewed, time spent). These are used only in a non-personally identifiable, aggregate manner.</li>
                    </ul>

                    <h2>3. How We Use Your Information</h2>
                    <p>We will use collected data for the following purposes:</p>
                    <ol>
                        <li>To respond to your inquiries or requests sent via email or contact form.</li>
                        <li>To send you newsletters, updates, or other communications if you have opted in.</li>
                        <li>To analyze Site usage trends, diagnose technical issues, and improve content, features, and functionality.</li>
                        <li>To comply with applicable laws or regulations and to protect the rights, property, or safety of the Site, its users, or the public when required.</li>
                    </ol>

                    <h2>4. Cookies and Tracking Technologies</h2>
                    <ul>
                        <li>We use cookies to improve user experience, remember preferences, and support analytics (e.g., Google Analytics).</li>
                        <li>You may disable cookies through your browser settings; however, some Site features may not function properly if cookies are blocked.</li>
                    </ul>

                    <h2>5. Third-Party Services</h2>
                    <p>We may share non-personally identifiable, aggregated data with third parties for analytics or advertising purposes. We do not sell your Personal Data. Examples of services we use:</p>
                    <ul>
                        <li><strong>Google Analytics</strong> (for traffic analysis)</li>
                        <li><strong>Google AdSense</strong> (for ad placement)</li>
                    </ul>
                    <p>If you prefer not to have your browsing behavior used for targeted advertising, you can opt out via your browser settings or visit <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">https://adssettings.google.com</a>.</p>

                    <h2>6. Data Sharing and Disclosure</h2>
                    <p>We do not share your Personal Data with any third party except in the following circumstances:</p>
                    <ol>
                        <li>With your consent.</li>
                        <li>To comply with legal obligations (e.g., court order, subpoena).</li>
                        <li>To protect the safety, rights, or property of the Site, its users, or the public.</li>
                        <li>To service providers who assist us with Site operations (e.g., hosting, email distribution). These providers are contractually bound to keep your data confidential and use it only for the purpose of providing services to the Site.</li>
                    </ol>

                    <h2>7. Data Retention</h2>
                    <p>We keep your Personal Data only as long as necessary to fulfill the purposes outlined in this Policy or as required by law. After that, we will securely delete or anonymize it.</p>

                    <h2>8. Security Measures</h2>
                    <p>We implement reasonable technical and organizational measures—such as SSL encryption, access controls, and firewalls—to safeguard your data against unauthorized access, alteration, or destruction. However, no internet-based system is 100% secure; we cannot guarantee absolute security.</p>

                    <h2>9. Children's Privacy</h2>
                    <p>Our Site is not intended for children under 13. We do not knowingly collect or solicit Personal Data from anyone under 13. If you believe a child under 13 has provided us with information, please contact us to have that data removed.</p>

                    <h2>10. Your Rights</h2>
                    <p>Depending on your jurisdiction, you may have the right to:</p>
                    <ul>
                        <li>Request access to, correction of, or deletion of your Personal Data.</li>
                        <li>Object to or restrict certain processing activities.</li>
                        <li>Withdraw consent (where processing is based on consent).</li>
                        <li>Lodge a complaint with a supervisory authority.</li>
                    </ul>
                    <p>To exercise these rights, please contact us at <a href="mailto:japanese.aesthetics.style@gmail.com">japanese.aesthetics.style@gmail.com</a>.</p>

                    <h2>11. Changes to This Policy</h2>
                    <p>We may update this Policy from time to time. When we do, the "Last Updated" date at the top will reflect the change. Continued use of the Site following any update constitutes acceptance of the revised Policy.</p>

                    <h2>12. Contact Information</h2>
                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                    <div className={styles.contactInfo}>
                        <p>japanese-aesthetics.com Administration</p>
                        <p>Email: <a href="mailto:japanese.aesthetics.style@gmail.com">japanese.aesthetics.style@gmail.com</a></p>
                    </div>
                </div>
            </main>
        </div>
    )
}