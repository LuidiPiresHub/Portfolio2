import styles from '../styles/skills.module.css';
import skillsData from '../data/skills.json';

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsContainer}>
      {skillsData.map(({ title, skills }, index) => (
        <div className={styles.skillsArea} key={index}>
          <h1>{title}</h1>
          <figure className={styles.skillsList}>
            {skills.map(({ name, logo }, index) => (
              <div className={styles.skills} key={index}>
                <img src={logo} alt={name + ' Logo'} />
                <span>{name}</span>
              </div>
            ))}
          </figure>
        </div>
      ))}
    </section>
  );
}
