import React from "react";
import styles from "./projects.module.css";
import Carousel from "./carousel";

interface ProjectModalProps {
  title: string; // Título do modal
  about: string; // Texto descritivo do projeto
  details: string[]; // Lista de detalhes do projeto
  functionalities: string[]; // Lista de funcionalidades do projeto
  githubLink: string; // Link do GitHub do projeto
  items: { id: number; src: string; alt: string; width: number; height: number}[]; 
  currentIndex: number; // Índice atual do carrossel
  nextSlide: () => void; // Função para ir ao próximo slide
  prevSlide: () => void; // Função para voltar ao slide anterior
  toggleModal: () => void; // Função para fechar o modal
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  title,
  about,
  details,
  functionalities,
  githubLink,
  items,
  currentIndex,
  nextSlide,
  prevSlide,
  toggleModal,
}) => {
  return (
    <>
      <div className={styles.container_modal_overlay}></div>
        <div className={styles.container_modal}>
            <div className={styles.modal_content}>
                <button className={styles.button_container} onClick={toggleModal}>
                    <h3>X</h3>
                </button>

                <div className={styles.margins_top}>
                    <div className={styles.line_vertical}></div>
                    <div className={styles.line_horizontal}></div>
                </div>

                <h1>{title}</h1>

                {/* Usando o componente Carousel com imagens */}
                <Carousel
                    items={items}
                    currentIndex={currentIndex}
                    nextSlide={nextSlide}
                    prevSlide={prevSlide}
                />

                <div className={styles.container_two_text}>
                    <div className={styles.text}>
                    <h3>Detalhes do projeto:</h3>
                    <div className={styles.info}>
                        {details.map((detail, index) => (
                        <p key={index}>{detail}</p>
                        ))}
                    </div>
                    </div>
                    <div className={styles.text}>
                    <h3>Sobre:</h3>
                    <p>{about}</p>
                    </div>
                </div>

                <div className={styles.text_functionality}>
                    <h3>Funcionalidades:</h3>

                    <div className={styles.container_two_text}>
                    <div className={styles.text}>
                        <ul className={styles.info}>
                        {functionalities.slice(0, Math.ceil(functionalities.length / 2)).map((func, index) => (
                            <li key={index}>{func}</li>
                        ))}
                        </ul>
                    </div>
                    <div className={styles.text}>
                        <ul className={styles.info}>
                        {functionalities.slice(Math.ceil(functionalities.length / 2)).map((func, index) => (
                            <li key={index}>{func}</li>
                        ))}
                        </ul>
                    </div>
                    </div>
                </div>

                <div className={styles.text_functionality}>
                    <p>Link para Github: <a href={githubLink} target="_blank" rel="noopener noreferrer">{githubLink}</a></p>
                </div>

                <div className={styles.margins_bottom}>
                    <div className={styles.line_vertical}></div>
                    <div className={styles.line_horizontal}></div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ProjectModal;
