'use client';

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef
} from 'react';
import gsap from 'gsap';

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: 'linear' | 'elastic';
  fitContainer?: boolean;
  children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${customClass ?? ''} ${rest.className ?? ''}`.trim()}
  />
));
Card.displayName = 'Card';

type CardRef = RefObject<HTMLDivElement>;
interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (i: number, distX: number, distY: number, total: number): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 100,
  verticalDistance = 90,
  delay = 3000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 0,
  easing = 'elastic',
  children,
  fitContainer = false
}) => {
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2
        };

  const childArr = useMemo(() => Children.toArray(children) as ReactElement<CardProps>[], [children]);
  const refs = useMemo<CardRef[]>(
    () => childArr.map(() => React.createRef<HTMLDivElement>() as CardRef),
    [childArr.length],
  );

  const order = useRef<number[]>(Array.from({ length: childArr.length }, (_, i) => i));

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | null>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = refs.length;

    // Measure container when available for responsive sizing
    const rect = container.current?.getBoundingClientRect();
    const numericWidth = rect?.width
      ? Math.max(0, Math.floor(rect.width))
      : typeof width === 'number'
        ? width
        : 500;
    const numericHeight = rect?.height
      ? Math.max(0, Math.floor(rect.height))
      : typeof height === 'number'
        ? height
        : 400;

    // Distribute spacing so more than 3 cards still fit nicely
    const maxXSpread = Math.max(140, numericWidth - 180);
    const maxYSpread = Math.max(140, numericHeight - 180);
    const perX = total > 1 ? maxXSpread / (total - 1) : 0;
    const perY = total > 1 ? maxYSpread / (total - 1) : 0;
    const distX = Math.min(cardDistance, perX);
    const distY = Math.min(verticalDistance, perY);

    refs.forEach((r, i) => placeNow(r.current!, makeSlot(i, distX, distY, total), skewAmount));

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current!;
      const tl = gsap.timeline();
      tlRef.current = tl;

      // Drop distance relative to height to avoid jumping outside container
      const dropDistance = Math.min(0.85 * numericHeight, Math.max(240, numericHeight - 60));
      tl.to(elFront, {
        y: `+=${dropDistance}`,
        duration: config.durDrop,
        ease: config.ease
      });

      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current!;
        const slot = makeSlot(i, distX, distY, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(refs.length - 1, distX, distY, refs.length);
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        'return'
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease
        },
        'return'
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current!;
      const pause = () => {
        tlRef.current?.pause();
        if (intervalRef.current !== null) {
          window.clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
      const resume = () => {
        tlRef.current?.play();
        if (intervalRef.current === null) {
          intervalRef.current = window.setInterval(swap, delay);
        }
      };
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
      return () => {
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
        if (intervalRef.current !== null) {
          window.clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    }
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [width, height, cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const cardW: number | string = fitContainer ? '85%' : width;
  const cardH: number | string = fitContainer ? '70%' : height;

  const rendered = childArr.map((child, i) =>
    isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width: cardW, height: cardH, ...(child.props.style ?? {}) },
          onClick: e => {
            child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
            onCardClick?.(i);
          }
        } as CardProps & React.RefAttributes<HTMLDivElement>)
      : child
  );

  return (
    <div
      ref={container}
      className="absolute bottom-0 right-0 transform translate-x-[-10%] translate-y-[40%] origin-bottom-right perspective-[900px] max-[1024px]:left-1/2 max-[1024px]:right-auto max-[1024px]:translate-x-[-50%] max-[1024px]:translate-y-[0%] max-[768px]:left-1/2 max-[768px]:right-auto max-[768px]:translate-x-[-55%] max-[768px]:translate-y-[-10%] max-[768px]:scale-[0.9] max-[480px]:scale-[0.67] max-[480px]:translate-y-[-40%] max-[480px]:translate-x-[-67%]"
      style={{ width: fitContainer ? '100%' : width, height: fitContainer ? '100%' : height }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
