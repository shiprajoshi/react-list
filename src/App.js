import './App.css';
import { HashRouter as BrowserRouter, Route , Switch} from 'react-router-dom';
import { Link as L} from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from '@mui/material';
import { FootballMatches } from './Football';
import { Login } from './LoginPage';
import React, { Suspense, useContext } from 'react';
import { Theme } from './Provider/index';
const PlayWithList = React.lazy(()=> import('./AddDeleteListItems/index'));
const UniversityList = React.lazy(()=> import('./UniversityComponent/index'));

function App() {
 const theme = useContext(Theme);
  return (
    <div className="App">
      <header className={`App-header ${theme}`}>
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
              <Route exact path="/login" component={Login}></Route>
              <Suspense fallback={<>Loadingg=....</>}>
                <Route exact path="/universities" component={UniversityList}></Route>
                <Route exact path="/playwithlist" component={PlayWithList}></Route>
              </Suspense>
            </Switch>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;