import { createTheme } from '@mui/material/styles';
import { teal, purple } from '@mui/material/colors';

export const themeCustom = createTheme({
  palette: {
    primary: {
      main: teal[900],
      dark: teal[500],
      light: teal[200]
    },
    secondary: {
      main: purple[600],
      dark: purple[800]
    }
  }
});