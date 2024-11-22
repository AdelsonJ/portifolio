import Image from "next/image";
import Link from "next/link";
import styles from "./contact.module.css";

const ContactSection = () => (
    <section id="contatos" className={styles.page}>
        <div className={`${styles.background} ${styles.contactBackground}`}>
            <h1>CONTATOS</h1>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=adelson.everolts@gmail.com" target="_blank" className={styles.gmail}>
                <Image
                    src="/images/icons/gmail.png"
                    alt="Gmail"
                    width={45}
                    height={45}
                />
                <p>GMAIL</p>
            </Link>
            <Link href="https://www.instagram.com/adelsonoliveirajr/" target="_blank" className={styles.instagram}>
                <Image
                    src="/images/icons/instagram.png"
                    alt="Instagram"
                    width={50}
                    height={50}
                />
                <Image
                    src="/images/icons/instagram_wordmark.png"
                    alt="Instagram Wordmark"
                    width={120}
                    height={60}
                />
            </Link>
            <Link href="https://github.com/AdelsonJ" target="_blank" className={styles.github}>
                <Image
                    src="/images/icons/github.png"
                    alt="Github"
                    width={45}
                    height={45}
                />
                <Image
                    src="/images/icons/git_wordmark.png"
                    alt="Github Wordmark"
                    width={120}
                    height={60}
                />
            </Link>
            <Link href="https://www.linkedin.com/in/ad%C3%A9lson-j%C3%BAnior-85a970327/" target="_blank" className={styles.linkedin}>
                <Image
                    src="/images/icons/linkedin-completo.svg"
                    alt="Wordmark"
                    width={120}
                    height={250}
                />
            </Link>
        </div>
    </section>
);

export default ContactSection;
