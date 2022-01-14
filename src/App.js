import Home from './home';
import Profile from './profile';
import  { Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/profile' exact component={Profile} />
    </Switch>
  )
}

export default App;
