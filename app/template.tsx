"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Link from 'next/link';

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
      <header
        className={isNavOpen ? styles.navegacao_aberta : styles.navegacao_fechada}
        onClick={!isNavOpen ? toggleNav : undefined} // Só expande ao clicar se estiver fechado
      >
        {isNavOpen && (
          <>
            {/* Conteúdo da navegação aberta */}
            <div>
                <p><Link href="#home">Home</Link></p>
                <p><Link href="#habilidades">Habilidades</Link></p>
                <p><Link href="#projetos">Projetos</Link></p>
                <p><Link href="#sobre mim">Sobre mim</Link></p>
                <p><Link href="#contatos">Contatos</Link></p>
            </div>
            {/* Caixa para fechar a navegação */}
            <div className={styles.caixa_toggle} onClick={toggleNav}>
              X {/* Ícone ou texto para fechar */}
            </div>
          </>
        )}
        {!isNavOpen && <span>≡</span>}
      </header>

      
      <div className={styles.centro}> 
        {children} 
      </div>
    </div>
  );
}