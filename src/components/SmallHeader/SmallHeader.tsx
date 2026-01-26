import HeaderButton from '@/components/Header/HeaderButton/HeaderButton';
import { NavButton } from '@/types/common';
import styles from './SmallHeader.module.scss';

interface Props {
  buttons: NavButton[];
}

const SmallHeader = ({ buttons }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.background} />
        <div className={styles.content}>
          {buttons.map(({ text, href }) => {
            return <HeaderButton text={text} href={href} key={href} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SmallHeader;
