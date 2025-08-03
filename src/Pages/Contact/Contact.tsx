import Title from '@/components/Title/Title';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.wrapper} data-page-hash="#contact">
      <Title text="Contact" />
    </div>
  );
};

export default Contact;
