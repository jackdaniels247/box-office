import React from 'react';
import { Switch,Route } from 'react-router';
import Navs from './components/Navs';



function App() {
  return (
    <div>

    <Navs />
      
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
    </div>
   
  );
}

export default App;
