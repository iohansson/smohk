import type { FunctionComponent } from 'react';
import defu from 'defu';
import clsx from 'clsx';

export type ProgressProps = {
  size?: number;
  stroke?: number;
  progress?: number;
  text?: string;
  className?: string;
};

const defaults: Pick<ProgressProps, 'size' | 'stroke' | 'progress'> = {
  size: 64,
  stroke: 2,
  progress: 0,
};

export const Progress: FunctionComponent<ProgressProps> = (props) => {
  const { size, stroke, progress, text, className } = defu(props, defaults);

  const r = size / 2 - stroke;
  const centerX = size / 2;
  const centerY = size / 2;
  const c = 2 * Math.PI * r;
  const lProgress = c * progress;

  return (
    <div className={clsx('relative', className)}>
      <svg viewBox={`0 0 ${size} ${size}`} className={'stroke-current'}>
        <circle
          cx={centerX}
          cy={centerY}
          r={r}
          fill="none"
          strokeWidth={stroke}
          strokeDashoffset={c / 4}
          strokeDasharray={`${lProgress} ${c - lProgress}`}
        />
      </svg>
      {text ? (
        <span className="absolute top-1/2 left-1/2 text-3xl -translate-x-1/2 -translate-y-1/2 text-current font-black">
          {text}
        </span>
      ) : null}
    </div>
  );
};
