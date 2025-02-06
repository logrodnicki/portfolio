import styles from './Title.module.scss';

interface Props {
  text: string;
}

const Title = ({ text }: Props) => {
  return <h1 className={styles.wrapper}>{text}</h1>;
};

export default Title;
