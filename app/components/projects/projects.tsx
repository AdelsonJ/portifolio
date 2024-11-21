import styles from "./projects.module.css";

const ProjectSection = () => (
    <section id="projetos" className={styles.page}>
        <div className={styles.background}>
            <div className={styles.projects}>
            <div className={styles.margins_top}>
                <div className={styles.line_vertical}></div>
                <div className={styles.line_horizontal}></div>
            </div>
            <div className={styles.margins_bottom}>
                <div className={styles.line_vertical}></div>
                <div className={styles.line_horizontal}></div>
            </div>

            </div>
        </div>
    </section>
);

export default ProjectSection;
