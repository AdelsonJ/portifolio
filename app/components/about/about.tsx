import styles from "./about.module.css";

const AboutSection = () => (
    <section id="sobre mim" className={styles.page}>
        <div className={styles.background}>
          <div className={styles.profile}>
            <div className={styles.profile_image}>
            </div>
          </div>
          <div className={styles.profile_description}>
          </div>
        </div>
    </section>
);

export default AboutSection;
