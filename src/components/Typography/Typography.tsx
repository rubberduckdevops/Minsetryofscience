import React from 'react';
import './Typography.css';

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  stencil?: boolean;
  glow?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  className = '',
  stencil = false,
  glow = true,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const classNames = [
    'mos-heading',
    `mos-heading--${level}`,
    stencil ? 'mos-heading--stencil' : '',
    glow ? 'mos-heading--glow' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <Tag className={classNames}>{children}</Tag>;
};

export interface TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'mono';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  uppercase?: boolean;
  bold?: boolean;
}

export const Text: React.FC<TextProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  uppercase = false,
  bold = false,
}) => {
  const classNames = [
    'mos-text',
    `mos-text--${variant}`,
    `mos-text--${size}`,
    uppercase ? 'mos-text--uppercase' : '',
    bold ? 'mos-text--bold' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={classNames}>{children}</span>;
};

export interface LabelProps {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}

export const Label: React.FC<LabelProps> = ({
  children,
  className = '',
  htmlFor,
}) => {
  return (
    <label htmlFor={htmlFor} className={`mos-label ${className}`}>
      {children}
    </label>
  );
};

export interface CodeProps {
  children: React.ReactNode;
  className?: string;
  inline?: boolean;
}

export const Code: React.FC<CodeProps> = ({
  children,
  className = '',
  inline = true,
}) => {
  const classNames = [
    'mos-code',
    inline ? 'mos-code--inline' : 'mos-code--block',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (inline) {
    return <code className={classNames}>{children}</code>;
  }

  return (
    <pre className={classNames}>
      <code>{children}</code>
    </pre>
  );
};
