import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  className = '',
  children,
  disabled,
  ...props
}) => {
  const classNames = [
    'mos-button',
    `mos-button--${variant}`,
    `mos-button--${size}`,
    fullWidth ? 'mos-button--full-width' : '',
    disabled ? 'mos-button--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classNames} disabled={disabled} {...props}>
      <span className="mos-button__corner mos-button__corner--tl" />
      <span className="mos-button__corner mos-button__corner--tr" />
      <span className="mos-button__corner mos-button__corner--bl" />
      <span className="mos-button__corner mos-button__corner--br" />
      <span className="mos-button__content">{children}</span>
    </button>
  );
};
