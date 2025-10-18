import React from 'react';
import './Panel.css';

export interface PanelProps {
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'warning' | 'danger' | 'success';
  headerRight?: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({
  title,
  subtitle,
  className = '',
  children,
  variant = 'default',
  headerRight,
}) => {
  const classNames = ['mos-panel', `mos-panel--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames}>
      <div className="mos-panel__corner mos-panel__corner--tl" />
      <div className="mos-panel__corner mos-panel__corner--tr" />
      <div className="mos-panel__corner mos-panel__corner--bl" />
      <div className="mos-panel__corner mos-panel__corner--br" />

      {(title || headerRight) && (
        <div className="mos-panel__header">
          <div className="mos-panel__header-left">
            {title && <h2 className="mos-panel__title">{title}</h2>}
            {subtitle && <p className="mos-panel__subtitle">{subtitle}</p>}
          </div>
          {headerRight && (
            <div className="mos-panel__header-right">{headerRight}</div>
          )}
        </div>
      )}

      <div className="mos-panel__content">{children}</div>
    </div>
  );
};
