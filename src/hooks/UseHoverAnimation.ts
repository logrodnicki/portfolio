import { RefObject, useEffect, useState } from 'react';

interface Props {
  wrapperRef: RefObject<HTMLDivElement>;
  disabled?: boolean;
}

const UseHoverAnimation = ({ wrapperRef, disabled }: Props) => {
  const [xRotation, setXRotation] = useState('0deg');
  const [yRotation, setYRotation] = useState('0deg');

  const calculatePosition = (offset: number, breakPoint: number): number => {
    if (offset > breakPoint) {
      return offset - breakPoint;
    }

    return breakPoint - offset;
  };

  const getRotation = (
    offset: number,
    position: number,
    breakPoint: number,
    maxRotation: number,
  ): string => {
    const ratio = position / breakPoint;
    const rotation = position === 0 ? 0 : maxRotation * ratio;

    if (offset > breakPoint) {
      return `${rotation}deg`;
    }

    return `-${rotation}deg`;
  };

  const calculateBoxRotation = (event: MouseEvent) => {
    if (!wrapperRef.current || disabled) {
      return;
    }

    const { width, height } = wrapperRef.current.getBoundingClientRect();

    const halfWidth = width / 2;
    const halfHeight = height / 2;

    const xPosition = calculatePosition(event.offsetX, halfWidth);
    const yPosition = calculatePosition(event.offsetY, halfHeight);

    const max = 15;

    setXRotation(getRotation(event.offsetX, xPosition, halfWidth, max));
    setYRotation(getRotation(event.offsetY, yPosition, halfHeight, max));
  };

  const clearRotation = () => {
    setXRotation('0deg');
    setYRotation('0deg');
  };

  useEffect(() => {
    if (!wrapperRef.current || disabled) {
      return undefined;
    }

    wrapperRef.current.addEventListener('mousemove', calculateBoxRotation);
    wrapperRef.current.addEventListener('mouseout', clearRotation);

    return () => {
      if (!wrapperRef.current) {
        return;
      }

      wrapperRef.current.removeEventListener('mousemove', calculateBoxRotation);
      wrapperRef.current.removeEventListener('mouseout', clearRotation);
    };
  }, []);

  return {
    xRotation,
    yRotation,
  };
};

export default UseHoverAnimation;
