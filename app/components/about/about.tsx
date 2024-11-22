import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";

const AboutSection = () => (
    <section id="sobre mim" className={styles.page}>
        <div className={`${styles.background} ${styles.aboutBackground}`}>
          <div className={styles.title}>
            <h1>SOBRE MIM</h1>
          </div>
          <div className={styles.profile}>
            <div className={styles.profile_left}>
              <div className={styles.profile_image}>
              </div>
              <div className={styles.info}>
                <p>Nome: Adélson Júnior</p>
                <p>Idade: 21 anos</p>
                <p>Pronomes: Ele/Dele</p>
              </div>
            </div>

            <div className={styles.profile_right}>
              <p>
              Atualmente, estou no 8º período de Ciência da Computação na 
              Universidade Federal de São João del-Rei (UFSJ). Ao longo 
              desses quase quatro anos de faculdade, tive a oportunidade 
              de aprender e desenvolver sistemas web, iniciando com projetos
              orientados a objetos e, mais recentemente, com aplicações 
              voltadas para a web utilizando HTML e CSS. Apesar de ainda
              estar em processo de aprendizado, tenho grande interesse na 
              área e busco constantemente me aprimorar para criar soluções 
              cada vez melhores.
              </p>
              <div className={styles.container_icon}>
                <div className={styles.icon}>
                  <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=adelson.everolts@gmail.com" target="_blank" className={styles.gmail}>
                      <Image
                          src="/images/icons/gmail_dark.png"
                          alt="Gmail"
                          width={45}
                          height={45}
                      />
                  </Link>
                </div>
                <div className={styles.icon}>
                  <Link href="https://www.instagram.com/adelsonoliveirajr/" target="_blank" className={styles.instagram}>
                    <Image
                      src="/images/icons/instagram_dark.png"
                      alt="Instagram"
                      width={50}
                      height={50}
                      />
                  </Link>
                </div>
                <div className={styles.icon}>
                  <Link href="https://github.com/AdelsonJ" target="_blank" className={styles.github}>
                    <Image
                      src="/images/icons/github.png"
                      alt="Github"
                      width={45}
                      height={45}
                    />
                  </Link>
                </div>
                <div className={styles.icon}>
                  <Link href="https://www.linkedin.com/in/ad%C3%A9lson-j%C3%BAnior-85a970327/" target="_blank" className={styles.linkedin}>
                      <Image
                        src="/images/icons/linkedin_dark.svg"
                        alt="Wordmark"
                        width={45}
                        height={45}
                      />
                  </Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
    </section>
);

export default AboutSection;
