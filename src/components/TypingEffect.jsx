import { TypeAnimation } from 'react-type-animation';

export default function TypingEffect() {
  return (
    <TypeAnimation
      sequence={[
        'Desenvolvedor Front-End',
        2500,
        'Desenvolvedor Back-End',
        2500,
        'Cientista da Computação',
        2500,
        'Desenvolvedor Fullstack',
        5000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
  );
}
