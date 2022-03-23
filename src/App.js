import logo from './logo.svg';
import './App.css';
import { HashRouter as BrowserRouter, Route, Routes , Switch} from 'react-router-dom';
import { Link as L} from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from '@mui/material';
import UniversityList from './UniversityComponent';
import { FootballMatches } from './Football';

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
            <Switch>
              <Route exact path={'/'} component={()=><div>ho</div>}></Route>
              <Route exact path="/universities" component={UniversityList}></Route>
              <Route exact path="/football" component={FootballMatches}></Route>
            </Switch>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;