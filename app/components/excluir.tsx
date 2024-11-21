import Image from "next/image";
import styles from "./page.module.css";
/* import { skills } from "@/data/skills";
import SkillCard from "@/components/SkillCard"; */

export default function Home() {
  return (
    <div className={styles.container}>
      {/* HOME */}
      <section id="home" className={styles.page}>
        <div className={styles.background_Home}>

          <div className={styles.imagem}>
            <Image
              src="/images/avatar.svg"
              alt="Avatar para a Home"
              width={300}
              height={300}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
          <h1>Bem Vindo ao meu Portfólio</h1>
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className={styles.page}> 
        <div className={styles.background_Abilities}>
          <div className={styles.container_Title_Tools}>
            <h2> HABILIDADES </h2>
          </div>
          <h3> Linguagens</h3>
          <div className={styles.container_LT}>
            <div className={styles.container_LT_individual}>
              <Image
                src="/images/icons/c.png" 
                alt="Linguagem C"
                width={75}
                height={75}/>
              <p>C</p>
            </div>

            <div className={styles.container_LT_individual}>
              <Image
                src="/images/icons/python.png" 
                alt="Linguagem PYTHON"
                width={75}
                height={75}/>
              <p>Python</p>
            </div>

            <div className={styles.container_LT_individual}>
              <Image
                src="/images/icons/java.png" 
                alt="Linguagem JAVA"
                width={75}
                height={75}/>
              <p>Java</p>
            </div>

            <div className={styles.container_LT_individual}>
              <Image
                src="/images/icons/r.png" 
                alt="Linguagem R"
                width={75}
                height={75}/>
              <p>R</p>
            </div>

            <div className={styles.container_LT_individual}>
              <Image
                src="/images/icons/html.png" 
                alt="Linguagem HTML"
                width={75}
                height={75}/>
              <p>HTML</p>
            </div>

            <div className={styles.container_LT_individual}>
              <Image
                src="/images/icons/javascript.png" 
                alt="Linguagem JAVASCRIPT"
                width={75}
                height={75}/>
              <p>JavaScript</p>
            </div>

          </div>
          <h3> Ferramentas</h3>
          <div className={styles.container_LT}>
            <div className={styles.container_LT_individual}>
              <Image
                src="/images/icons/linux.png" 
                alt="Ferramenta LINUX"
                width={75}
                height={75}/>
              <p>Linux</p>
            </div>

            <div className={styles.container_LT_individual}>
              <Image
                src="/images/icons/latex.svg" 
                alt="Ferramenta LATEX"
                width={75}
                height={75}/>
              <p>LaTeX</p>
            </div>

            <div className={styles.container_LT_individual}>
              <Image
                src="/images/icons/github.svg" 
                alt="Ferramenta GITHUB"
                width={75}
                height={75}/>
              <p>GitHub</p>
            </div>

            <div className={styles.container_LT_individual}>
              <Image
                src="/images/icons/figma.svg" 
                alt="Ferramenta FIGMA"
                width={75}
                height={75}/>
              <p>Figma</p>
            </div>
      
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className={styles.page}>
        <div className={styles.background_Projects}>
          <div className={styles.projects}>

          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre mim" className={styles.page}>
        <div className={styles.background_About}>
          <div className={styles.profile}>
            <div className={styles.profile_image}>
            </div>
          </div>
          <div className={styles.profile_description}>
          </div>
        </div>
      </section>

      {/* CONTATOS */}
      <section id="contatos" className={styles.page}>Página 5

      </section>
    </div>
  );
}
