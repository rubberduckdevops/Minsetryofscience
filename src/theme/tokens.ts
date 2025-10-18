/**
 * Ministry of Science Design Tokens
 * Helldivers 2 inspired color palette and design system
 */

export const colors = {
  // Primary - Amber/Yellow
  primary: {
    100: '#FFF8E1',
    200: '#FFECB3',
    300: '#FFE082',
    400: '#FFD54F',
    500: '#FFC107', // Main yellow
    600: '#FFB300',
    700: '#FFA000',
    800: '#FF8F00',
    900: '#FF6F00',
  },

  // Background - Military grays and blacks
  background: {
    darkest: '#0A0A0A',
    dark: '#1A1A1A',
    medium: '#2A2A2A',
    light: '#3A3A3A',
  },

  // Surface colors
  surface: {
    primary: '#1E1E1E',
    secondary: '#2D2D2D',
    tertiary: '#3C3C3C',
  },

  // Status colors
  status: {
    success: '#4CAF50',
    warning: '#FFC107',
    danger: '#F44336',
    info: '#2196F3',
  },

  // Text
  text: {
    primary: '#FFFFFF',
    secondary: '#B0B0B0',
    disabled: '#666666',
    accent: '#FFC107',
  },

  // Borders and dividers
  border: {
    primary: '#FFC107',
    secondary: '#3A3A3A',
    warning: '#FF6F00',
  },
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
} as const;

export const typography = {
  fontFamily: {
    primary: '"Share Tech Mono", "Courier New", monospace',
    secondary: '"Orbitron", "Arial", sans-serif',
    mono: '"Courier New", monospace',
  },
  fontSize: {
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '16px',
    xl: '20px',
    xxl: '24px',
    xxxl: '32px',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
} as const;

export const effects = {
  shadow: {
    small: '0 2px 4px rgba(0, 0, 0, 0.5)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.5)',
    large: '0 8px 16px rgba(0, 0, 0, 0.5)',
    glow: '0 0 10px rgba(255, 193, 7, 0.5)',
  },
  borderRadius: {
    none: '0',
    small: '2px',
    medium: '4px',
  },
} as const;

export const animations = {
  duration: {
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
  },
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
} as const;
