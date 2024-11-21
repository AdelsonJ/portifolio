import Image from "next/image";
import styles from "./home.module.css";

const HomeSection = () => (
  <section id="home" className={styles.page}>
    <div className={styles.background}>
      <div className={styles.imagem}>
        <Image
          src="/images/avatar.svg"
          alt="Avatar para a Home"
          width={300}
          height={300}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
      <h1>Bem Vindo ao meu Portfólio</h1>
    </div>
  </section>
);

export default HomeSection;
