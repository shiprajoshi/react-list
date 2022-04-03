import './App.css';
import { HashRouter as BrowserRouter, Route , Switch} from 'react-router-dom';
import { Link as L} from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from '@mui/material';
import { FootballMatches } from './Football';
import React, { createContext, Suspense, useState } from 'react';
const PlayWithList = React.lazy(()=> import('./AddDeleteListItems/index'));
const UniversityList = React.lazy(()=> import('./UniversityComponent/index'));
export const Theme = createContext('dark');

function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme=(e)=>{
    if(e.target.value === '0') setTheme('light');
    else if(e.target.value === '1') setTheme('dark');
  }
  return (
    <div className="App">
      <div className="toggleButton">
        <labe for="toggle">Dark Theme</labe>
        <input id="toggle" type="range" min="0" max="1"
        onChange={toggleTheme}
        ></input>
    </div>
      <header className="App-header">
        <Theme.Provider value={theme}>
          <BrowserRouter>
            <L to = "/">
              <Link href="/">Landing</Link>
            </L>
            <L to = "/login">
              <Link href= "/login">Logon</Link>
            </L>
            <L to = "/universities">
              <Link>University List</Link>
            </L>
            <L to= '/football'>
              <Link>
                Football
              </Link>
            </L>
            <L to ='/playwithlist'>
              <Link>Play with lists</Link>
            </L>
            <Switch>
              <Route exact path={'/'} component={()=><div>ho</div>}></Route>
              <Route exact path="/football" component={FootballMatches}></Route>
              <Suspense fallback={<>Loadingg=....</>}>
                <Route exact path="/universities" component={UniversityList}></Route>
                <Route exact path="/playwithlist" component={PlayWithList}></Route>
              </Suspense>
            </Switch>
          </BrowserRouter>
        </Theme.Provider>
      </header>
    </div>
  );
}

export default App;