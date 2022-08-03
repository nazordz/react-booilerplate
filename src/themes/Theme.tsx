import { ThemeProvider } from "@mui/system";
import { createTheme } from '@mui/material/styles'; 
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import React from "react";

type Props = {
  children: React.ReactNode
}
function Theme({children}: Props){
  const theme = createTheme({
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              backgroundColor: '#'
            }
          }
        ]
      }
    }
  })
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        { children }
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Theme;
