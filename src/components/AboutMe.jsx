import styles from '../styles/about.module.css'
import photo from '../images/myPhoto.png'
import TypingEffect from './TypingEffect'

export default function AboutMe() {
  return (
    <section className={styles.content}>
      <img className={styles.photo} src={photo} alt="Minha Foto" />
      <aside className={styles.description}>
        <h1 className={styles.title}>{<TypingEffect />}</h1>
        <h2 className={styles.name}>Luidi Pires</h2>
        <p className={styles.paragraph}>
        Eu sou Luidi Pires, um desenvolvedor Fullstack apaixonado por tecnologia e programação. Me formei na Trybe, onde adquiri um amplo conhecimento em diversas tecnologias e frameworks para construir aplicações web escaláveis e eficientes. Comecei a estudar em abril de 2022 e terminei em maio de 2023, e desde então tenho trabalhado em projetos pessoais e em equipe para aprimorar minhas habilidades e expandir meu conhecimento. Adoro desafios e estou sempre em busca de novas oportunidades para aprender e crescer profissionalmente. Além disso, sou um entusiasta de tecnologia e sempre interessado em estar atualizado com as últimas tendências e avanços no campo da tecnologia.
        </p>
        <p className={styles.paragraph}>
        A Trybe é uma escola de tecnologia, que proporciona uma formação com mais de 1500 horas, abordando fundamentos de desenvolvimento Web, Front-end, Back-end, ciência da computação, metodologias ágeis e habilidades comportamentais.
        </p>
      </aside>
      {/* <img className={styles.photo} src={photo} alt="Minha Foto" /> */}
    </section>
  )
}
