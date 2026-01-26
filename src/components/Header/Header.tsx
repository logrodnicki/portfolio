import { ReactElement } from 'react';
import HeaderButton from '@/components/Header/HeaderButton/HeaderButton';
import { NavButton } from '@/types/common';
import styles from './Header.module.scss';

interface Props {
  buttons: NavButton[];
}

const Header = ({ buttons }: Props): ReactElement => {
  return (
    <nav className={styles.wrapper}>
      {buttons.map(({ text, href }) => {
        return (
          <HeaderButton text={text} href={href} key={href} />
        );
      })}
    </nav>
  );
};

export default Header;
