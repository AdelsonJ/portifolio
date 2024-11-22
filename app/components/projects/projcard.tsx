import React from "react";
import Image from "next/image";
import styles from "./projects.module.css";

interface ProjectContentProps {
  toggleModal: () => void; // Função para abrir o modal
  imageSrc: string; // Caminho da imagem do projeto
  imageAlt: string; // Texto alternativo da imagem
  aboutText: string; // Texto da seção "Sobre"
}

const ProjectContent: React.FC<ProjectContentProps> = ({
  toggleModal,
  imageSrc,
  imageAlt,
  aboutText,
}) => {
  return (
    <div className={styles.projects}>
      <div className={styles.margins_top}>
        <div className={styles.line_vertical}></div>
        <div className={styles.line_horizontal}></div>
      </div>
      <div className={styles.margins_bottom}>
        <div className={styles.line_vertical}></div>
        <div className={styles.line_horizontal}></div>
      </div>

      {/* Imagem do projeto */}
      <div className={styles.image}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={325}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>

      {/* Texto da seção "Sobre" */}
      <div className={styles.text}>
        <h3>Sobre</h3>
        <p>{aboutText}</p>
      </div>

      {/* Botão para abrir o modal */}
      <button className={styles.button_container} onClick={toggleModal}>
        <Image
          src={"/images/setinha.png"}
          alt={"seta"}
          width={34}
          height={22}
        />
      </button>
    </div>
  );
};

export default ProjectContent;
