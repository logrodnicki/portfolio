import { RefObject, useEffect, useRef, useState } from 'react';

interface Props {
  wrapperRef: RefObject<HTMLDivElement>;
  disabled?: boolean;
}

const UseHoverAnimation = ({ wrapperRef, disabled }: Props) => {
  const [xRotation, setXRotation] = useState('0deg');
  const [yRotation, setYRotation] = useState('0deg');
  const [isClearing] = useState(false);

  const xRotationRef = useRef<string>('0deg');
  const yRotationRef = useRef<string>('0deg');

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

    xRotationRef.current = getRotation(
      event.offsetX,
      xPosition,
      halfWidth,
      max,
    );
    yRotationRef.current = getRotation(
      event.offsetY,
      yPosition,
      halfHeight,
      max,
    );

    setXRotation(getRotation(event.offsetX, xPosition, halfWidth, max));
    setYRotation(getRotation(event.offsetY, yPosition, halfHeight, max));
  };

  const clearRotation = () => {
    let counter = 1;
    const steps = 15;

    const initXRotation = xRotationRef.current.replace('deg', '');
    const initYRotation = yRotationRef.current.replace('deg', '');

    const xRotationPositive = Number(initXRotation) > 0;
    const yRotationPositive = Number(initYRotation) > 0;

    const absXRotation = Math.abs(Number(initXRotation));
    const absYRotation = Math.abs(Number(initYRotation));

    const xStepValue = absXRotation / steps;
    const yStepValue = absYRotation / steps;

    const intervalId = setInterval(() => {
      if (counter > steps) {
        clearInterval(intervalId);
        return;
      }

      const calculatedXRotation = absYRotation - counter * xStepValue;
      const calculatedYRotation = absYRotation - counter * yStepValue;

      setXRotation(
        xRotationPositive
          ? `${calculatedXRotation}deg`
          : `-${calculatedXRotation}deg`,
      );
      setYRotation(
        yRotationPositive
          ? `${calculatedYRotation}deg`
          : `-${calculatedYRotation}deg`,
      );

      counter += 1;
    }, 50);
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
    isClearing,
  };
};

export default UseHoverAnimation;
