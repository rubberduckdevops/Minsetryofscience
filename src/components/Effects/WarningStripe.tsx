import React from 'react';
import './WarningStripe.css';

export interface WarningStripeProps {
  className?: string;
  height?: number;
  animated?: boolean;
  variant?: 'danger' | 'caution' | 'hazard';
  speed?: 'slow' | 'normal' | 'fast' | number;
}

export const WarningStripe: React.FC<WarningStripeProps> = ({
  className = '',
  height = 8,
  animated = false,
  variant = 'caution',
  speed = 'normal',
}) => {
  const classNames = [
    'mos-warning-stripe',
    `mos-warning-stripe--${variant}`,
    animated ? 'mos-warning-stripe--animated' : '',
    typeof speed === 'string' ? `mos-warning-stripe--${speed}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style: React.CSSProperties = {
    height: `${height}px`,
    ...(typeof speed === 'number' && animated
      ? { animationDuration: `${speed}s` }
      : {}),
  };

  return <div className={classNames} style={style} />;
};
