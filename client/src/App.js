import React from 'react';
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import Routes from './routes'
import Nav from './components/nav';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Nav/>
        <Switch>
          <Routes/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
