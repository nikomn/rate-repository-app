import { Platform } from 'react-native';

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
    },
    fontSizes: {
      body: 16,
      subheading: 18,
    },
    fonts: {
      main: Platform.select({
        android: 'Roboto',
        ios: 'Arial',
        default: 'System',
      }),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    flexContainer: {
      flexDirection: 'row',
    },
    flexItemA: {
      flexGrow: 0,
      backgroundColor: 'green',
    },
    flexItemB: {
      flexGrow: 1,
      backgroundColor: 'blue',
    },
    appBar: {
      backgroundColor: '#24292e',
    },
    buttonBlue: {
      backgroundColor: 'blue'
    },
  };
  
  export default theme;