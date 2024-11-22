"use client"
import { useState } from "react";
import styles from "./projects.module.css";
import ProjectContent from "./projcard";
import ProjectModal from "./modal";
import { projectsData } from "../../data/projectsData";
import { modalData } from "../../data/modalData";

const ProjectSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(modalData[0]); // Modal começa com o primeiro dado

  const toggleModal = (projectId?: number) => {
    if (projectId !== undefined) {
      const project = modalData.find((proj) => proj.id === projectId); // Busca no modalData
      if (project) setSelectedProject(project);
    }
    setIsModalOpen((prev) => !prev);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedProject.items.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? selectedProject.items.length - 1 : prevIndex - 1));

  return (
    <section id="projetos" className={styles.page}>
      <div className={styles.background}>
      
      <div className={styles.title}>
        <h1>PROJETOS</h1>
      </div>

      {projectsData.map((project) => (
          <ProjectContent
            key={project.id}
            toggleModal={() => toggleModal(project.id)}
            imageSrc={project.imageSrc}
            imageAlt={project.altText}
            aboutText={project.aboutText}
          />
        ))}


        {isModalOpen && (
          <ProjectModal
            title={selectedProject.title}
            about={selectedProject.about}
            details={selectedProject.details}
            functionalities={selectedProject.functionalities}
            githubLink={selectedProject.githubLink}
            items={selectedProject.items}
            currentIndex={currentIndex}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            toggleModal={toggleModal}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
