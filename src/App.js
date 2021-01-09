import React from 'react';
import { Switch,Route } from 'react-router';

import Home from './pages/Home';
import Star from './pages/Star';



function App() {
  return (
     <Switch>
     <Route exact path='/home' >
       <Home />
     </Route>
     <Route exact path='/star'>
       <Star />
     </Route>
     <Route>
       This is 404
     </Route>
   </Switch>
   
   
  );
}

export default App;
