import React from 'react';
import { Switch,Route } from 'react-router';
import {ThemeProvider} from 'styled-components'

import Home from './pages/Home';
import Star from './pages/Star';
import Show from './pages/Show';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
<Switch>
     <Route exact path='/home' >
       <Home />
     </Route>
     <Route exact path='/star'>
       <Star />
     </Route>
     <Route exact path='/show/:id'>
      <Show />
     </Route>
     <Route>
       This is 404
     </Route>
   </Switch>
    </ThemeProvider>
     
   
   
  );
}

export default App;
