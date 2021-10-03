import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignUp } from './components';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
