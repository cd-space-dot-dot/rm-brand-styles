// ui/tokens.js - Design tokens as JavaScript for framework integration
// This file exports the same values as tokens.css for use in JS frameworks like MUI

export const tokens = {
  // Fonts
  fonts: {
    display: '"Raleway", "Roboto", sans-serif',
    body: '"Roboto", "Segoe UI", -apple-system, system-ui, sans-serif',
    mono: '"Roboto Mono", "Courier New", monospace',
  },

  // Brand base colors
  colors: {
    infinite: '#18191E',    // near-black
    moon: '#F7F8F6',        // near-white
    space: '#2D334D',       // dark blue-gray for headers/emphasis
    galaxy: '#7A64A0',      // primary purple accent
    dust: '#DBE6E3',        // light sage for subtle backgrounds
    estrella: '#E0C169',    // warm gold tint
  },

  // Text colors (light mode)
  text: {
    primary: '#18191E',
    secondary: '#4B5163',
  },

  // Type scale
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },

  // Spacing
  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
  },

  // Component spacing
  component: {
    sliderLabelGap: '1.5rem',      // Gap between slider label and slider
    sliderThumbSize: '20px',       // Slider thumb size
    sliderTrackHeight: '8px',      // Slider track height
    sliderContainerPadding: '2rem', // Horizontal padding to prevent thumb overlap
  },

  // Slider styling (framework-agnostic calculations)
  slider: {
    // Spacing
    marginTop: '1.5rem',           // Space between label and slider
    marginBottom: '1.5rem',        // Space below slider
    paddingLeft: '2rem',           // Left padding to prevent thumb overflow
    paddingRight: '2rem',          // Right padding to prevent thumb overflow

    // Thumb (the draggable circles)
    thumbWidth: '20px',
    thumbHeight: '20px',
    thumbBackgroundColor: '#7A64A0', // RM Galaxy
    thumbHoverBoxShadow: '0 0 0 8px rgba(122, 100, 160, 0.16)',
    thumbFocusBoxShadow: '0 0 0 12px rgba(122, 100, 160, 0.24)',

    // Track (the colored line)
    trackHeight: '8px',
    trackBackgroundColor: '#7A64A0', // RM Galaxy
    trackBorder: 'none',

    // Rail (the gray background line)
    railHeight: '8px',
    railBackgroundColor: '#CDD3DB', // RM border-subtle
    railOpacity: 1,

    // Value label (the popup showing the value)
    valueLabelBackgroundColor: '#7A64A0', // RM Galaxy
    valueLabelBorderRadius: '4px',
    valueLabelPadding: '4px 8px',
  },

  // Font weights
  fontWeight: {
    regular: 400,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Letter spacing
  letterSpacing: {
    caps: '0.5px',
  },

  // Links (light mode)
  link: {
    default: '#5A4286',
    hover: '#4B386F',
  },

  // Surfaces & borders (light mode)
  background: {
    page: '#F6F7F5',
    surface: '#FFFFFF',
  },

  border: {
    subtle: '#CDD3DB',
  },

  shadow: {
    soft: '0 1px 2px rgba(0,0,0,.04), 0 6px 18px rgba(0,0,0,.06)',
  },

  // Border radius
  radius: {
    s: '6px',
    m: '8px',
  },

  // Control sizes
  control: {
    height: '40px',
    paddingX: '14px',
  },

  // Status colors
  status: {
    success: {
      bg: '#E6F4E6',
      text: '#134E13',
      border: '#96C49A',
    },
    warning: {
      bg: '#FFF4E6',
      text: '#7A4900',
      border: '#FFD699',
    },
    danger: {
      bg: '#FCE6E8',
      text: '#7E1E26',
      border: '#E7A3AB',
    },
  },

  // Score colors (for opportunity scores, ratings, etc.)
  scores: {
    high: {
      bg: '#E6F4E6',
      text: '#134E13',
      border: '#96C49A',
    },
    medium: {
      bg: '#FFF4E6',
      text: '#7A4900',
      border: '#FFD699',
    },
    low: {
      bg: '#FCE6E8',
      text: '#7E1E26',
      border: '#E7A3AB',
    },
  },

  // Accent ramp (light mode)
  accent: {
    50: '#F2ECF9',
    100: '#E8DEF7',
    200: '#D7CAF2',
    300: '#C2B1EA',
    600: '#7A64A0',
    700: '#5A4286',
  },

  // Neutral tints
  tint: {
    dust12: '#EEF3F1',
  },

  // Chart/Data Visualization tokens
  charts: {
    // Background for charts (use Moon on Moon backgrounds, transparent on white)
    background: '#F7F8F6', // Moon

    // Primary gradient for sequential data (pie charts, heatmaps, etc.)
    // Charts can interpolate between these points
    gradient: {
      start: '#2D334D',  // Space - darkest
      mid: '#7A64A0',    // Galaxy - primary purple
      end: '#DBE6E3',    // Dust - lightest
    },

    // Single-series defaults (per brand guide)
    bar: '#7A64A0',           // Galaxy - default bar/column color
    barEmphasis: '#2D334D',   // Space - higher emphasis
    barMuted: '#DBE6E3',      // Dust - lower emphasis
    benchmark: '#E0C169',     // Estrella - benchmark/comparison lines

    // Categorical palette for pie charts & multi-series (10 colors)
    // Derived from brand gradient + complementary warm tones
    categorical: [
      '#2D334D',  // Space
      '#7A64A0',  // Galaxy
      '#5A4286',  // Accent 700 (dark purple)
      '#9B85BA',  // Mid purple (interpolated)
      '#C2B1EA',  // Accent 300 (light purple)
      '#E0C169',  // Estrella (warm contrast)
      '#D4A84B',  // Darker gold
      '#8B7355',  // Warm brown (complement)
      '#6B8E8E',  // Teal (cool contrast)
      '#4A6B6B',  // Dark teal
    ],

    // LLM/Model-specific colors (official brand colors)
    llm: {
      claude: '#DE7356',    // Anthropic peach
      gpt: '#74AA9C',       // ChatGPT teal
      llama: '#0082FB',     // Meta blue
      gemini: '#4285F4',    // Google blue
      mistral: '#FA520F',   // Mistral orange
      copilot: '#8A50D8',   // Microsoft Copilot purple
      perplexity: '#20808D', // Perplexity teal
      huggingface: '#FFCC00', // Hugging Face yellow
      default: '#2D334D',   // Space - fallback
    },
  },
};

// Dark mode tokens
export const darkTokens = {
  background: {
    page: '#0F1115',
    surface: '#171A22',
  },

  text: {
    primary: '#EDEFF3',
    secondary: '#B7BECA',
  },

  border: {
    subtle: '#30364A',
  },

  shadow: {
    soft: '0 1px 2px rgba(0,0,0,.55), 0 8px 24px rgba(0,0,0,.35)',
  },

  accent: {
    50: '#241F2B',
    100: '#2E2837',
    200: '#3A3250',
    300: '#4D4070',
    600: '#BCA7E0',
    700: '#A894D0',
  },

  link: {
    default: '#A894D0',
    hover: '#BCA7E0',
  },
};

// Helper to get CSS variable value
export const getCSSVar = (varName) => {
  if (typeof window !== 'undefined') {
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  }
  return '';
};
