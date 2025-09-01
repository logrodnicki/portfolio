import { ReactElement } from 'react';
import HeaderButton from '@/components/Header/HeaderButton/HeaderButton';
import styles from './Header.module.scss';

const Header = (): ReactElement => {
  return (
    <nav className={styles.wrapper}>
      <HeaderButton text="Home" href="#home" />
      <HeaderButton text="Experience" href="#experience" />
      <HeaderButton text="Projects" href="#projects" />
      <HeaderButton text="Contact" href="#contact" />
    </nav>
  );
};

export default Header;
