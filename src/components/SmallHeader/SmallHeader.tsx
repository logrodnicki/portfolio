import HeaderButton from '@/components/Header/HeaderButton/HeaderButton';
import styles from './SmallHeader.module.scss';

const SmallHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.background} />
        <div className={styles.content}>
          <HeaderButton text="Home" href="#home" />
          <HeaderButton text="Experience" href="#experience" />
          <HeaderButton text="Projects" href="#projects" />
          <HeaderButton text="Contact" href="#contact" />
        </div>
      </div>
    </div>
  );
};

export default SmallHeader;
