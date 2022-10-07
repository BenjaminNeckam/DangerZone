// // A custom theme for this app
import { createTheme } from '@mui/material';
import regular from "./assets/Roboto/Roboto-Regular.ttf";

let theme = createTheme({
  palette: {
    primary: {
      main: '#780228',
    },
    secondary: {
      main: '#29000E',
    },
    error: {
      main: '#F44336',
    },
    warning: {
      main: '#FF9800',
    },
    success: {
      main: '#4CAF50',
    },
    text: {
      main: '#373737',
      secondary: '#878787',
      disabled: '#B3B3B3',
    },
    info: {
      main: '#0C58A5',
    },
    action: {
      selected: '#EBF4FA',
      focus: '#06390b',
    },
    grey: {
      default: '#F9F9F9',
      disabled: '#bdbdbd',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
  },

  breakpoints: {
    values: {
      xxl: 1400,
      xl: 1200,
      lg: 992,
      md: 768,
      sm: 576,
      xs: 375,
      xxs: 0,
    },
  },

  containerMaxWidth: {
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140,
    xxl: 1320,
  },

  typography: {
    fontFamily: "Roboto",
    body1: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '150%',
      letterSpacing: '0.15px',
    },
    body1SemiBold: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '21px',
      letterSpacing: '0.15px',
    },
    body2: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '150%',
      letterSpacing: '0.15px',
    },
    subtitle1: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '160%',
      letterSpacing: '0.15px',
      color: '#373737',
    },
    subtitle2: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '30px',
      letterSpacing: '0.1px',
    },
    subtitle2SemiBold: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '100%',
      letterSpacing: '0.1px',
    },
    caption: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '13px',
      //lineHeight: '120%',
      letterSpacing: '0.4px',
      color: '#373737',
      opacity: 0.8,
    },
    overline: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '120%',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
    },
    button: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '120%',
      letterSpacing: '0.15px',
      color: '#4CAF50',
    },
    buttonMedium: {
      fontFamily: 'Roboto',
      fontSize: '16px',
      color: '#FFFFFF',
      lineHeight: '19px',
      letterSpacing: '0.46px',
    },
    h1: {
      fontSize: '24px',
      fontFamily: "Roboto",
    },
    h2: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '36px',
      lineHeight: '120%',
    },
    h3: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '32px',
      lineHeight: '150%',
    },
    h4: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '175%',
      letterSpacing: '0.15px',
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '600 !important',
      fontSize: '20px',
      lineHeight: '143%',
      letterSpacing: '0.15px',
    },
    h6: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '36px',
      lineHeight: '120%',
    },
    selectPrimary: {
      background: '#F2F2F2',
      borderColor: '#E4E4E4',
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h1Regular: {
      fontFamily: 'Rubik',
      fontStyle: 'normal',
      fontWeight: '400 !important',
      fontSize: '24px !important',
      lineHeight: '120%',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: theme.palette.text.main,
      [theme.breakpoints.up('lg')]: {
        fontSize: '36px !important',
      },
    },
    h1Medium: {
      fontFamily: 'Rubik',
      fontStyle: 'normal',
      fontWeight: '500 !important',
      fontSize: '24px !important',
      lineHeight: '120%',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: theme.palette.text.main,
      [theme.breakpoints.up('lg')]: {
        fontSize: '36px !important',
      },
    },
    h2Medium: {
      fontFamily: 'Rubik',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '36px',
      lineHeight: '120%',
      color: theme.palette.text.main,
      [theme.breakpoints.up('lg')]: {
        fontSize: '42px',
      },
    },
    h3Regular: {
      fontFamily: 'Rubik',
      fontStyle: 'normal',
      //fontWeight: 500,
      fontSize: '32px',
      lineHeight: '150%',
    },
    overline2: {
      fontFamily: 'Rubik',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '150%',
      letterSpacing: '0.15px',
      color: theme.palette.text.main,
    },
  },
  customComponentStyles: {
    cardStyle: {
      backgroundColor: theme.palette.grey,
      boxShadow: '1px 4px 6px rgba(0, 0, 0, 0.2)',
      borderRadius: '8px',
      padding: '24px',
      gap: '8px',
      margin: "16px 0",
    },
  },
});

console.log(theme);
export default theme;
