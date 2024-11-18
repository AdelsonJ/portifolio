import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>

      <section className={styles.page}>
        <div className={styles.background_Home}>

          <div className={styles.imagem}>
            <Image
              src="/images/avatar.svg" // Caminho relativo para sua imagem SVG na pasta public
              alt="Avatar para a Home"
              width={300}
              height={300}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
          <h1>Bem Vindo ao meu Portfólio</h1>
        </div>
      </section>

      <section className={styles.page}>
          <div className={styles.background_Abilities}>
            <div className={styles.container_Title_Tools}>
              <h2> HABILIDADES </h2>
            </div>
            <h3> Linguagens</h3>
            <div className={styles.container_LT}>
            </div>
            <h3> Ferramentas</h3>
            <div className={styles.container_LT}>
            </div>
          </div>
      </section>

      <section className={styles.page}>Página 3

      </section>
    </div>
  );
}
