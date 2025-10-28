import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  future: {
    hoverOnlyWhenSupported: true
  },
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
      lg: '1025px',
      lg2: '1280px',
      xl: '1440px',
      xl2: '1633px',
      'sm-max': { max: '374px' },
      'md-max': { max: '767px' },
      'lg-max': { max: '1024px' },
      'xl-max': { max: '1439px' },
      'xl2-max': { max: '1632px' },
      'md-h': { raw: '(min-height: 600px)' },
      'md-h-max': { raw: '(max-height: 599px)' },
      hoverable: { raw: '(pointer: fine)' },
      portrait: { raw: '(orientation: portrait)' },
      landscape: { raw: '(orientation: landscape)' }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      confirmation: '#3CBE5A',
      warning: '#FFC107',
      lime: '#F2EFEE',
      green: '#578049',
      lavender: '#8868AA',
      cinnamon: '#A66653',
      sale: '#F3F677',

      white: '#FFFFFF',
      black: '#000000',
      brown: '#433E3A',

      error: {
        DEFAULT: '#FF0037',
        100: '#FCE3E9',
        500: '#C2002A'
      },
      success: {
        100: '#E1F5E6',
        500: '#107D2A'
      },
      alert: {
        100: '#FDF3E1',
        500: '#EC9B13'
      },
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
        100: '#FFEBE5',
        200: '#FFD8CC',
        300: '#FFB199',
        400: '#FF835C',
        500: '#FF3C00',
        550: '#EB3700',
        600: '#D43100',
        700: '#A62700',
        800: '#791C00',
        900: '#4D1200'
      },
      neutral: {
        100: '#FAFBFC',
        200: '#F5F6F7',
        300: '#EBEEF0',
        400: '#DCDFE0',
        500: '#B2B6B8',
        600: '#8E9294',
        700: '#6F7173',
        750: '#4B4D4E',
        800: '#3A3C3D',
        900: '#1D1E1F'
      },
      beige: {
        100: '#F2EFEE',
        200: '#E7E3DF'
      }
    },
    fontSize: {
      9: '9px',
      10: '10px',
      12: '12px',
      13: '13px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      28: '28px',
      32: '32px',
      36: '36px',
      40: '40px',
      44: '44px',
      42: '42px',
      46: '46px',
      54: '54px',
      72: '72px',
      80: '80px',
      88: '88px',
      96: '96px'
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
      52: '52px',
      56: '56px',
      64: '64px',
      80: '80px',
      96: '96px',
      112: '112px',
      120: '120px',
      128: '128px',
      144: '144px',
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
    letterSpacing: {
      'm-3_5': '-3.5px',
      'm-3': '-3px',
      'm-2': '-2px',
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
      none: '0',
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
      none: '0',
      2: '2px',
      4: '4px',
      6: '6px',
      8: '8px',
      12: '12px',
      20: '20px',
      24: '24px',
      30: '30px',
      full: '9999px'
    },
    zIndex: {
      0: '0',
      1: '10',
      2: '20',
      3: '30',
      4: '40',
      5: '50',
      6: '60',
      7: '70',
      8: '80',
      9: '90',
      10: '100',
      '-10': '-10',
      '-2': '-2',
      auto: 'auto'
    },
    boxShadow: {
      md: '0 -2px 6px #484444',
      lg: '0 6px 16px rgba(0, 0, 0, 0.1)',
      icon: '0 4px 20px rgba(0,0,0,0.08)',
      'category-selection': '0 4px 6px rgba(0, 0, 0, 0.1)',
      'plp-product-card': '0px 12px 32px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.24)'
    },
    extend: {
      transitionProperty: {
        color: 'color',
        padding: 'padding',
        width: 'width',
        top: 'top',
        toggle: 'left, width, transform',
        'max-height': 'max-height',
        'min-height': 'min-height',
        'border-color': 'border-color'
      },
      rotate: {
        '-135': '-135deg',
        135: '135deg'
      },
      objectPosition: {
        'center-bottom': 'center bottom'
      }
    },
    important: true
  },
  darkMode: 'selector'
};
