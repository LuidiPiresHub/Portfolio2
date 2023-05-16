import styles from '../styles/projects.module.css';
import projects from '../data/projects.json';
import { FaPlay, FaCode } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className={styles.projectContainer}>
      {projects.map(({ name, gitLink, deployLink, image }, index) => (
        <div className={styles.projects} key={index} style={{ backgroundImage: `url(${image})` }}>
          <h1 className={styles.projectName}>{name}</h1>
          <div className={styles.projectButtons}>
            <a className={styles.link} href={deployLink} rel='noreferrer' target='_blank'>
              <FaPlay className={styles.icons} />
            </a>
            <a className={styles.link} href={gitLink} rel='noreferrer' target='_blank'>
              <FaCode className={styles.icons} /> 
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
