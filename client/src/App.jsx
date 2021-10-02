import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/home" />
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
