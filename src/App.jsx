import { Box, Grid } from '@mui/material';
import Layout from './components/layout';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Dashboard from './dashboard';

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#f5007f',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: "#0066ff",
      main: '#9702c3',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: "#ffcc00",
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    // @ts-ignore
    custom1: {
      // light: "#ffa726",
      main: '#4abbf7',
      dark: '#3a8cb7',
      // contrastText: "rgba(0, 0, 0, 0.87)",
    },
    custom2: {
      main: '#fbc700',
      dark: '#b3910f',
    },
    custom3: {
      main: '#00ff47',
    },
    text: {
      primary: '#31374c',
      secondary: 'rgb(49 55 76 / 50%)',
    },

    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
theme.typography.h5 = {
  fontSize: '1rem',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Box sx={{ flexGrow: 1 }}>
          <Dashboard />
        </Box>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
