import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorPage from './Componenets/ErrorPage';
import Landing from './Componenets/Landing';
import Description from './Componenets/Landing/description';
import Login from './Componenets/Login';
import Password from './Componenets/Password';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/password' component={Password} />
          <Route exact path='/landing' component={Landing} />
          <Route path='/landing/description' component={Description} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
