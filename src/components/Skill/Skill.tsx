import { ReactElement, useRef, CSSProperties } from 'react';
import cx from 'classnames';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useHoverAnimation from '@/hooks/UseHoverAnimation';

import styles from './Skill.module.scss';

interface Props {
  label?: string;
  logoSrc: string;
  addImageBackground?: boolean;
  index: number;
  isSmall?: boolean;
}

const Skill = ({
  label = '',
  logoSrc,
  addImageBackground,
  index,
  isSmall = false,
}: Props): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { xRotation, yRotation, isClearing } = useHoverAnimation({
    wrapperRef,
    disabled: true,
  });

  const imageSize = label ? 128 : 160;

  return (
    <motion.div
      ref={wrapperRef}
      whileHover={{
        scale: 1.1,
        textShadow: '0px 0px 4px gray',
      }}
    >
      <div className={cx(styles.upperBox, { [styles.small]: isSmall })} />
      <div
        className={cx(styles.wrapper, styles.hover, {
          [styles.hoverClearing]: isClearing,
          [styles.small]: isSmall,
        })}
        style={
          {
            '--rotateX': xRotation,
            '--rotateY': yRotation,
            'animation-delay': `${index * 100}ms`,
          } as CSSProperties
        }
      >
        <div
          className={cx(styles.imageWrapper, {
            [styles.imageBackground]: addImageBackground,
          })}
        >
          <Image
            src={logoSrc}
            alt={label}
            width={imageSize}
            height={imageSize}
            className={styles.image}
          />
        </div>
        {label ? <h3 className={styles.label}>{label}</h3> : null}
      </div>
    </motion.div>
  );
};

Skill.defaultProps = {
  addImageBackground: false,
};

export default Skill;
