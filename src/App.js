import React from 'react';
import { Switch,Route } from 'react-router';



function App() {
  return (
   <Switch>
     <Route exact path='/' >
       This is homepage
     </Route>
     <Route exact path='/star'>
       This is star
     </Route>
     <Route>
       This is 404
     </Route>
   </Switch>
  );
}

export default App;
