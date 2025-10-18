import React from 'react';
import './ScanLine.css';

export interface ScanLineProps {
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
  opacity?: number;
  enabled?: boolean;
}

export const ScanLine: React.FC<ScanLineProps> = ({
  className = '',
  speed = 'normal',
  opacity = 0.3,
  enabled = true,
}) => {
  if (!enabled) return null;

  const classNames = [
    'mos-scanline',
    `mos-scanline--${speed}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classNames} style={{ opacity }} />;
};
