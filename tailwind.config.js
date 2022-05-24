module.exports = {
  mode: 'jit',
  theme: {
    fontFamily: {
      sans: ['MessinaSansWeb', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['MessinaSansWeb', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['MessinaSansWeb', 'Helvetica', 'Arial', 'sans-serif'],
      display: ['MessinaSansWeb', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['MessinaSansWeb', 'Helvetica', 'Arial', 'sans-serif']
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      lg2: '1280px',
      xl: '1440px',
      xl2: '1920px',
      'sm-max': { max: '374px' },
      'md-max': { max: '767px' },
      'lg-max': { max: '1023px' },
      'xl-max': { max: '1439px' },
      'xl2-max': { max: '1919px' },
      'md-h': { raw: '(min-height: 600px)' },
      'md-h-max': { raw: '(max-height: 599px)' },
      hoverable: { raw: '(pointer: fine)' }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      confirmation: '#3CBE5A',
      warning: '#FFC107',
      error: '#FF0037',

      white: '#FFFFFF',
      black: '#000000',
      brown: '#433E3A',

      offblack: {
        600: '#484444',
        700: '#2F2F2F',
        800: '#1F1D1D',
        900: '#1A1818'
      },
      grey: {
        600: '#EDF0F0',
        700: '#D7DADB',
        800: '#CAD0D0',
        900: '#7C7D81'
      },
      offwhite: {
        600: '#F9F9F9',
        700: '#F5F5F5',
        800: '#FEF6F6',
        900: '#F1EAEA'
      },
      orange: {
        DEFAULT: '#FF3C00',
        600: '#FFEBE5',
        700: '#FFD8CD',
        800: '#FBC3B2',
        900: '#FF9B7D'
      }
    },
    fontSize: {
      9: '9px',
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      20: '20px',
      24: '24px',
      28: '28px',
      32: '32px',
      42: '42px',
      46: '46px',
      54: '54px',
      72: '72px',
      88: '88px'
    },
    spacing: {
      0: '0',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      28: '28px',
      30: '30px',
      32: '32px',
      40: '40px',
      48: '48px',
      64: '64px',
      80: '80px',
      96: '96px',
      112: '112px',
      128: '128px',
      '1/3': '33.333333%',
      '1/2': '50%',
      '3/4': '75%',
      max: 'max-content',
      min: 'min-content',
      fit: 'fit-content',
      auto: 'auto',
      screen: '100vh',
      full: '100%',
      none: 'none'
    },
    minWidth: theme => theme('spacing'),
    maxWidth: theme => theme('spacing'),
    minHeight: theme => theme('spacing'),
    maxHeight: theme => theme('spacing'),
    letterSpacing: {
      'm-3_5': '-3.5px',
      'm-1_5': '-1.5px',
      'm-1': '-1px',
      'm-0_5': '-0.5px',
      'm-0_3': '-0.3px',
      'm-0_2': '-0.2px',
      0: '0',
      '0_5': '0.5px',
      '1_5': '1.5px'
    },
    lineHeight: {
      '0_95': '0.95',
      1: '1',
      '1_05': '1.05',
      '1_1': '1.1',
      '1_2': '1.2',
      '1_25': '1.25',
      '1_3': '1.3',
      '1_4': '1.4',
      '1_5': '1.5'
    },
    borderRadius: {
      none: 0,
      2: '2px',
      4: '4px',
      6: '6px',
      8: '8px',
      12: '12px',
      20: '20px',
      30: '30px',
      full: '9999px'
    },
    zIndex: {
      0: 0,
      1: 10,
      2: 20,
      3: 30,
      4: 40,
      5: 50,
      6: 60,
      7: 70,
      8: 80,
      9: 90,
      10: 100,
      '-10': '-10',
      auto: 'auto'
    },
    boxShadow: {
      md: '0 -2px 6px #484444',
      lg: '0 6px 16px rgba(0, 0, 0, 0.1)'
    },
    plugins: [],
    extend: {
      inset: {
        0: '0'
      },
      transitionProperty: {
        color: 'color',
        padding: 'padding',
        width: 'width',
        top: 'top',
        toggle: 'left, width',
        'max-height': 'max-height',
        'min-height': 'min-height'
      },
      rotate: {
        '-135': '-135deg',
        135: '135deg'
      },
      objectPosition: {
        'center-bottom': 'center bottom'
      },
      animation: {
        fade: 'fade 8s infinite'
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '25%': { opacity: '0' },
          '25.1%': { opacity: '0' },
          '50%': { opacity: '0' },
          '50.1%': { opacity: '1' },
          '75%': { opacity: '1' },
          '75.1%': { opacity: '0' },
          '100%': { opacity: '0' }
        }
      }
    }
  }
};
