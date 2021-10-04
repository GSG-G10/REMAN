import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignUp } from './components';
import Login from './components/Login';
import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
