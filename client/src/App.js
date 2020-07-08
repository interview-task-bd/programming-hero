import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Nav/>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
