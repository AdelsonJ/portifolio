"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Template({
  children
}: {
  children: React.ReactNode
}) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={styles.main}>
      <div
        className={isNavOpen ? styles.navegacao_aberta : styles.navegacao_fechada}
        onClick={!isNavOpen ? toggleNav : undefined} // Só expande ao clicar se estiver fechado
      >
        {isNavOpen && (
          <>
            {/* Conteúdo da navegação aberta */}
            <div>
              <p>Home</p>
              <p>Habilidades</p>
              <p>Projetos</p>
              <p>Sobre mim</p>
              <p>Contatos</p>
            </div>
            {/* Caixa para fechar a navegação */}
            <div className={styles.caixa_toggle} onClick={toggleNav}>
              X {/* Ícone ou texto para fechar */}
            </div>
          </>
        )}
        {!isNavOpen && <span>≡</span>}
      </div>

      
      <div className={styles.centro}> 
        {children} 
      </div>
    </div>
  );
}