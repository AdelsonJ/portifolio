import Image from "next/image";
import styles from "./abilities.module.css";

interface SkillCardProps {
    imageSrc: string;
    altText: string;
    label: string;
}

const SkillCard = ({ imageSrc, altText, label }: SkillCardProps) => (
    <div className={styles.container_LT_individual}>
        <Image 
            src={imageSrc} 
            alt={altText} 
            width={75} 
            height={75} 
        />
        <p>{label}</p>
    </div>
);

export default SkillCard;
