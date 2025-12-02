// ui/tokens.d.ts - TypeScript definitions for design tokens

export interface Tokens {
  fonts: {
    display: string;
    body: string;
    mono: string;
  };

  colors: {
    infinite: string;
    moon: string;
    space: string;
    galaxy: string;
    dust: string;
    estrella: string;
  };

  text: {
    primary: string;
    secondary: string;
  };

  fontSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };

  spacing: {
    1: string;
    2: string;
    3: string;
    4: string;
    6: string;
    8: string;
    [key: number]: string;
  };

  component: {
    sliderLabelGap: string;
    sliderThumbSize: string;
    sliderTrackHeight: string;
    sliderContainerPadding: string;
  };

  slider: {
    marginTop: string;
    marginBottom: string;
    paddingLeft: string;
    paddingRight: string;
    thumbWidth: string;
    thumbHeight: string;
    thumbBackgroundColor: string;
    thumbHoverBoxShadow: string;
    thumbFocusBoxShadow: string;
    trackHeight: string;
    trackBackgroundColor: string;
    trackBorder: string;
    railHeight: string;
    railBackgroundColor: string;
    railOpacity: number;
    valueLabelBackgroundColor: string;
    valueLabelBorderRadius: string;
    valueLabelPadding: string;
  };

  fontWeight: {
    regular: number;
    semibold: number;
    bold: number;
    extrabold: number;
  };

  letterSpacing: {
    caps: string;
  };

  link: {
    default: string;
    hover: string;
    visited: string;
  };

  border: {
    subtle: string;
    default: string;
  };

  background: {
    surface: string;
    hover: string;
  };

  accent: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    [key: number]: string;
  };

  status: {
    success: {
      bg: string;
      text: string;
      border: string;
    };
    warning: {
      bg: string;
      text: string;
      border: string;
    };
    danger: {
      bg: string;
      text: string;
      border: string;
    };
    info: {
      bg: string;
      text: string;
      border: string;
    };
  };

  scores: {
    high: {
      bg: string;
      text: string;
      border: string;
    };
    medium: {
      bg: string;
      text: string;
      border: string;
    };
    low: {
      bg: string;
      text: string;
      border: string;
    };
  };
}

export const tokens: Tokens;
