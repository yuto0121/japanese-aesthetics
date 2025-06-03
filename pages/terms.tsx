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
                <div className={styles.content}>
                    <p className={styles.lastUpdated}>Last Updated: June 3, 2025</p>

                    <p>Welcome to <strong>japanese-aesthetics.com</strong> (the "Site"). These Terms & Conditions ("Terms") govern your access to and use of the Site. By accessing or using the Site, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, please do not use the Site.</p>

                    <h2>1. Scope of Use</h2>
                    <ol>
                        <li>The Site provides information, articles, images, and other content related to Japanese aesthetics and culture ("Content").</li>
                        <li>You may view, download, or print Content solely for your personal, non-commercial use, provided you maintain all copyright and other proprietary notices contained in the original Content.</li>
                    </ol>

                    <h2>2. Prohibited Conduct</h2>
                    <p>When using the Site, you agree not to:</p>
                    <ol>
                        <li>Violate any applicable law or regulation.</li>
                        <li>Infringe any intellectual property or other rights of third parties.</li>
                        <li>Use the Site to transmit harmful code (e.g., viruses, malware) or spam.</li>
                        <li>Attempt to gain unauthorized access to portions of the Site or its servers.</li>
                        <li>Interfere with or disrupt the operation of the Site or servers/networks connected to the Site.</li>
                        <li>Collect or harvest any personally identifiable information from other users without their consent.</li>
                    </ol>

                    <h2>3. Intellectual Property Rights</h2>
                    <ol>
                        <li>All Content on the Site—including text, graphics, logos, images, and software—is the property of japanese-aesthetics.com or its licensors and is protected by copyright, trademark, and other intellectual property laws.</li>
                        <li>You must not modify, reproduce, distribute, create derivative works of, publicly display, or exploit in any way any portion of the Site or its Content without prior written permission from the Site owner.</li>
                    </ol>

                    <h2>4. User Contributions</h2>
                    <ol>
                        <li>If the Site provides a comments section, blog posts, or forums where you can submit text or images ("User Contributions"), you grant the Site a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, copy, modify, distribute, and display those contributions for any purpose.</li>
                        <li>You represent and warrant that you own all rights to your User Contributions and that submitting them does not infringe any third-party rights.</li>
                    </ol>

                    <h2>5. Links to Third-Party Sites</h2>
                    <ol>
                        <li>The Site may contain links or references to other websites or resources provided by third parties.</li>
                        <li>We do not control and are not responsible for the content, privacy policies, or practices of any third-party websites. Linking does not imply endorsement; you access them at your own risk.</li>
                    </ol>

                    <h2>6. Disclaimer of Warranties</h2>
                    <ol>
                        <li>The Site and all Content are provided on an "as-is" and "as-available" basis. We make no warranties, express or implied, including but not limited to fitness for a particular purpose, accuracy, reliability, or non-infringement.</li>
                        <li>We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components.</li>
                    </ol>

                    <h2>7. Limitation of Liability</h2>
                    <ol>
                        <li>To the fullest extent permitted by law, the Site and its owners, affiliates, officers, directors, employees, or agents shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or relating to your use of the Site.</li>
                        <li>This limitation applies whether based on warranty, contract, tort (including negligence), or any other legal theory, even if we have been advised of the possibility of such damages.</li>
                    </ol>

                    <h2>8. Indemnification</h2>
                    <p>You agree to indemnify, defend, and hold harmless japanese-aesthetics.com and its directors, officers, employees, agents, and affiliates from and against any claims, liabilities, losses, damages, costs, or expenses (including reasonable attorneys' fees) arising out of or related to:</p>
                    <ul>
                        <li>Your use of or inability to use the Site.</li>
                        <li>Your violation of these Terms.</li>
                        <li>Your User Contributions or any content you submit.</li>
                    </ul>

                    <h2>9. Modifications to the Site or Terms</h2>
                    <ol>
                        <li>We reserve the right to modify or discontinue the Site (or any part thereof) at any time without notice.</li>
                        <li>We may also revise these Terms at any time by posting updated Terms on this page. Your continued use of the Site after any changes signifies your acceptance of such changes. It is your responsibility to check this page periodically for updates.</li>
                    </ol>

                    <h2>10. Governing Law and Jurisdiction</h2>
                    <p>These Terms are governed by the laws of Japan without regard to conflict-of-law principles. Any dispute arising under or relating to these Terms will be subject to the exclusive jurisdiction of the courts located in Tokyo, Japan.</p>

                    <h2>11. Severability</h2>
                    <p>If any provision of these Terms is deemed invalid or unenforceable by a court of competent jurisdiction, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.</p>

                    <h2>12. Entire Agreement</h2>
                    <p>These Terms (together with our Privacy Policy) constitute the entire agreement between you and japanese-aesthetics.com regarding your use of the Site and supersede all prior or contemporaneous communications and proposals, whether oral or written.</p>

                    <h2>13. Contact Information</h2>
                    <p>For any questions about these Terms or the Site, please contact us at:</p>
                    <div className={styles.contactInfo}>
                        <p>japanese-aesthetics.com Support</p>
                        <p>Email: <a href="mailto:japanese.aesthetics.style@gmail.com">japanese.aesthetics.style@gmail.com</a></p>
                    </div>
                </div>
            </main>
        </div>
    )
}