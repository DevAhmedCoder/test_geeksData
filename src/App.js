import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorPage from './Componenets/ErrorPage';
import Landing from './Componenets/Landing';
import Login from './Componenets/Login';
import Password from './Componenets/Password';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/password' component={Password} />
          <Route path='/landing' component={Landing} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
