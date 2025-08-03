import { ReactElement, useContext } from 'react';
import cx from 'classnames';
import pagesContext from '@/contexts/pagesContext';
import styles from './HeaderButton.module.scss';

interface Props {
  text: string;
  href?: string;
}

const HeaderButton = ({ text, href }: Props): ReactElement => {
  const { activePage } = useContext(pagesContext);

  return (
    <a href={href} className={styles.wrapper}>
      <span className={styles.bg1} />
      <span
        className={cx(styles.bgActive, { [styles.show]: href === activePage })}
      />
      <span className={styles.bg2} />
      <span className={styles.text}>{text}</span>
    </a>
  );
};

export default HeaderButton;
