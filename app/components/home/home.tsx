import Image from "next/image";
import styles from "./home.module.css";

const HomeSection = () => (
  <section id="home" className={styles.page}>
    <div className={styles.background}>
      <div className={styles.imagem}>
        <Image
          src="/images/avatar.svg"
          alt="Avatar para a Home"
          width={400}
          height={400}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
      <div className={styles.title}>
        <h1>Bem-vindo ao meu Portfólio</h1>
      </div>
    </div>
  </section>
);

export default HomeSection;
