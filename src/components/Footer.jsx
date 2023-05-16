import styles from '../styles/footer.module.css';
import linkedin from '../images/contact/linkedin.png';
import github from '../images/contact/github.png'
import gmail from '../images/contact/gmail.png'
import whatsapp from '../images/contact/whatsapp.png'
import { useState } from 'react';

export default function Footer() {

  const [userMessage, setUserMessage] = useState({ user: "", email: "", message: "" });

  const handleChange = (callback, { name, value }) => {
    callback((prevState) => ({ ...prevState, [name]: value }))
  }

  const sendEmail = (event) => {
    event.preventDefault();
    console.log('teste', userMessage);
  }

  return (
    <footer id="contato" className={styles.footer}>
      <section className={styles.footerContainer}>
        <form className={styles.form} onSubmit={sendEmail}>
          <label className={styles.label} htmlFor="name">
            Nome
            <input className={styles.input} id="name" type="text" name='user' placeholder="Nome" onChange={({ target }) => handleChange(setUserMessage, target)} />
          </label>
          <label className={styles.label} htmlFor="email">
            Email
            <input className={styles.input} type="email" name="email" id="email" placeholder="Email" onChange={({ target }) => handleChange(setUserMessage, target)} />
          </label>
          <label className={styles.label} htmlFor="textarea">
            Menssagem
            <textarea className={styles.textarea} id="textarea" name='message' placeholder="Sua mensagem aqui..." onChange={({ target }) => handleChange(setUserMessage, target)}></textarea>
          </label>
          <button type="submit" className={styles.button}>Enviar</button>
        </form>
        <section className={styles.contact}>
          <a href="https://www.linkedin.com/in/luídi-pires/" rel='noreferrer' target='_blank'>
            <img className={styles.icons} src={linkedin} alt="LinkedIn Logo" />
          </a>
          <a href="https://github.com/LuidiPiresHub" rel='noreferrer' target='_blank'>
            <img className={styles.icons} src={github} alt="Github Logo" />
          </a>
          <a href="mailto:luidihot@gmail.com" rel='noreferrer' target='_blank'>
            <img className={styles.icons} src={gmail} alt="Gmail Logo" />
          </a>
          <a href="https://wa.me/5521988687037" rel='noreferrer' target='_blank'>
            <img className={styles.icons} src={whatsapp} alt="Whatsapp Logo" />
          </a>
        </section>
      </section>
      <h3 className={styles.madeBy}>Feito por Luídi Pires</h3>
    </footer>
  )
}
