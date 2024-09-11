import { ReactElement } from 'react';
import Button from '@/components/Header/Button/Button';

import styles from './Header.module.scss';

const Header = (): ReactElement => {
  return (
    <nav className={styles.wrapper}>
      <Button text="Home" />
      <Button text="Skills" />
      <Button text="Contact" />
    </nav>
  );
};

export default Header;
