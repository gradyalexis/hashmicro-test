import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          red: '#9C171E',
          navy: '#7B00FF',
          orange: '#FEA110',
          white: '#FFFFFF',
          grey: '#ECECEC',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#2196F3',
          secondary: '#424242',
          accent: '#FF4081',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
          red: '#9C171E',
          navy: '#7B00FF',
          orange: '#FEA110',
          red: '#9C171E',
          navy: '#7B00FF',
          orange: '#FEA110',
          white: '#FFFFFF',
          grey: '#ECECEC',
        },
      },
    },
  },
});