import React from "react";
import Image from "next/image";
import styles from "./projects.module.css";

interface CarouselProps {
  items: { id: number; src: string; alt: string; width: number; height: number}[]; 
  currentIndex: number; // Índice atual do carrossel
  nextSlide: () => void; // Função para ir ao próximo slide
  prevSlide: () => void; // Função para voltar ao slide anterior
}

const Carousel: React.FC<CarouselProps> = ({ items, currentIndex, nextSlide, prevSlide }) => {
  return (
    <div className={styles.image}>
      <div
        className={styles.carouselContent}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.id} className={styles.carouselItem}>
            <div className={styles.imageWrapper}>
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                className={styles.carouselImage}
              />
              <div className={styles.label}>{item.alt}</div>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.prevButton} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={styles.nextButton} onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;