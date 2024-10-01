import { ReactElement, useRef, CSSProperties } from 'react';
import cx from 'classnames';
import Image from 'next/image';

import useHoverAnimation from '@/hooks/UseHoverAnimation';

import styles from './Skill.module.scss';

interface Props {
  label: string;
  logoSrc: string;
  addImageBackground?: boolean;
  index: number;
}

const Skill = ({
  label,
  logoSrc,
  addImageBackground,
  index,
}: Props): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { xRotation, yRotation, isClearing } = useHoverAnimation({
    wrapperRef,
    disabled: false,
  });

  const imageSize = label ? 128 : 160;

  return (
    <div ref={wrapperRef}>
      <div className={styles.upperBox} />
      <div
        className={cx(styles.wrapper, styles.hover, {
          [styles.hoverClearing]: isClearing,
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
    </div>
  );
};

Skill.defaultProps = {
  addImageBackground: false,
};

export default Skill;
