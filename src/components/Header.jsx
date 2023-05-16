import { useState, useEffect } from 'react';
import styles from '../styles/header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.onscroll = handleScroll;

    return () => {
      window.onscroll = null;
    };
  }, []);
  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerSolid : ''}`}>
      <h1>Portfolio</h1>
      <nav className={styles.headerInfo}>
        <a href='#skills'>Skills</a>
        <a href='#projects'>Projetos</a>
        <a href='#contato'>Fale Comigo</a>
      </nav>
    </header>
  )
}
