import React from 'react';
import './Card.css';

export interface CardProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  hoverable?: boolean;
  glowOnHover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className = '',
  children,
  onClick,
  hoverable = false,
  glowOnHover = false,
}) => {
  const classNames = [
    'mos-card',
    hoverable || onClick ? 'mos-card--hoverable' : '',
    glowOnHover ? 'mos-card--glow' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} onClick={onClick}>
      <div className="mos-card__corner mos-card__corner--tl" />
      <div className="mos-card__corner mos-card__corner--tr" />
      <div className="mos-card__corner mos-card__corner--bl" />
      <div className="mos-card__corner mos-card__corner--br" />
      <div className="mos-card__content">{children}</div>
    </div>
  );
};
