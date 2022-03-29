import logo from './logo.svg';
import './App.css';
import { HashRouter as BrowserRouter, Route , Switch} from 'react-router-dom';
import { Link as L} from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from '@mui/material';
import { FootballMatches } from './Football';
import React, { Suspense } from 'react';
const PlayWithList = React.lazy(()=> import('./AddDeleteListItems/index'));
const UniversityList = React.lazy(()=> import('./UniversityComponent/index'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;