import { ReactElement, useContext } from 'react';
import cx from 'classnames';
import pagesContext from '@/contexts/pagesContext';
import Link from 'next/link';
import styles from './HeaderButton.module.scss';

interface Props {
  text: string;
  href?: string;
}

const HeaderButton = ({ text, href }: Props): ReactElement | null => {
  const { activePage } = useContext(pagesContext);

  if (!href) {
    return null;
  }

  return (
    <Link className={styles.wrapper} href={href}>
      <span className={styles.bg1} />
      <span
        className={cx(styles.bgActive, { [styles.show]: href === activePage })}
      />
      <span className={styles.bg2} />
      <span className={styles.text}>{text}</span>
    </Link>
  );
};

export default HeaderButton;
