import { ReactElement, useRef, CSSProperties } from 'react';
import cx from 'classnames';
import Image from 'next/image';

import useHoverAnimation from '@/hooks/UseHoverAnimation';
import styles from './Skill.module.scss';

interface Props {
  label: string;
  logoSrc: string;
}

const Skill = ({ label, logoSrc }: Props): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { xRotation, yRotation } = useHoverAnimation({
    wrapperRef,
    disabled: true,
  });

  const imageSize = label ? 128 : 160;

  return (
    <div ref={wrapperRef}>
      <div className={styles.upperBox} />
      <div
        className={cx(styles.wrapper, styles.hover)}
        style={
          { '--rotateX': xRotation, '--rotateY': yRotation } as CSSProperties
        }
      >
        {label ? <h3 className={styles.label}>{label}</h3> : null}
        <Image
          src={logoSrc}
          alt={label}
          width={imageSize}
          height={imageSize}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Skill;
