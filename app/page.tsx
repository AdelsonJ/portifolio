import Image from "next/image";
import styles from "./page.module.css";
/* import { skills } from "@/data/skills";
import SkillCard from "@/components/SkillCard"; */
import HomeSection from "./components/home/home";
import AbilitiesSection from "./components/abilities/abilities";
import ProjectsSection from "./components/projects/projects";
import AboutSection from "./components/about/about";
import ContactSection from "./components/contact/contact";

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeSection />
      <AbilitiesSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />

    </div>
  );
}
