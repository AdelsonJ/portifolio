import styles from "./abilities.module.css";
import { languages } from "../../data/languages";
import { tools } from "../../data/tools";
import SkillCard from "./skillcard";

const AbilitiesSection = () => (
    <section id="habilidades" className={styles.page}> 
        <div className={styles.background}>
          <div className={styles.container_Title}>
            <h2> HABILIDADES </h2>
          </div>
          <h3> Linguagens</h3>
            <div className={styles.container_LT}>
                {languages.map((languages, index) => (
                    <SkillCard key={index} {...languages} />
                ))}
            </div>
          <h3> Ferramentas</h3>
            <div className={styles.container_LT}>
                {tools.map((tools, index) => (
                    <SkillCard key={index} {...tools} />
                ))}
            </div>   
        </div>
    </section>
);

export default AbilitiesSection;
