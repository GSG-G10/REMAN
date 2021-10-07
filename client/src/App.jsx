import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { SignUp } from './components';
import Login from './components/Login';
import Home from './pages/Home';
import Product from './pages/Product';
import Dashboard from './components/Dashboard';
import Error from './pages/error404';
import Cart from './Cart/Cart'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/products/:productId" component={Product} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/Not-Found" component={Error} />
        <Route exact path="/" component={Home} />

        <Redirect to="/Not-Found" />
      </Switch>
    </Router>
  );
}

export default App;
