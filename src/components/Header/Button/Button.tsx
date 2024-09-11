import { ReactElement } from 'react';

import styles from './Button.module.scss';

interface Props {
  text: string;
}

const Button = ({ text }: Props): ReactElement => {
  return (
    <a href="#test" className={styles.wrapper}>
      <span className={styles.bg1} />
      <span className={styles.bg2} />
      <span className={styles.text}>{text}</span>
    </a>
  );
};

export default Button;
