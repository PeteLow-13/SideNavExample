import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Reports from './Pages/Reports'
import Products from './Pages/Products'

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/reports' exact component={Reports} />
      <Route path='/products' exact component={Products} />
    </Switch>
    </Router>
      
    </>
  );
}

export default App;
