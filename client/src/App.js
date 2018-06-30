import React, { Component } from 'react';
import CustomRoutes from './endusers/Routes/Routes';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Bangers'
    ].join(','),
  },
});
class App extends Component {
      render() {
        return (
            <div>
              <MuiThemeProvider theme={theme}>
              <CustomRoutes/>
              </MuiThemeProvider>
            </div>
          
        );
      }
    }
export default App;
