import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignUp } from './components';
import Login from './components/Login';
import Home from './pages/Home';
import Product from './pages/Product';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/products/:productId" component={Product} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
