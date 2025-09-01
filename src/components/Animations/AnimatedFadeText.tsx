import cx from 'classnames';
import styles from './AnimatedFadeText.module.scss';

interface Props {
  text: string;
  classes?: string;
  delay?: number;
}

const AnimatedFadeText = ({ text, classes = '', delay = 50 }: Props) => {
  const splitText = text.split('');

  const getKey = (letter: string, index: number) => {
    return `${letter}-${index}`;
  };

  return (
    <>
      {splitText.map((letter, index) => {
        return (
          <span
            key={getKey(letter, index)}
            className={cx(styles.letter, classes)}
            style={{ animationDelay: `${index * delay}ms` }}
          >
            {letter}
          </span>
        );
      })}
    </>
  );
};

export default AnimatedFadeText;
