import LoginPage from "./components/login";
import {Switch, Route} from 'react-router-dom'
import Header from "./components/Header"
import Cart from "./components/cart"
import HomePage from './components/homepage'
import Register from "./components/register";


function App() {
  return (
<div className="page">
    <Header />
      <Switch>
        <Route path='/login' component={LoginPage}/>
        
        <Route path='/cart' component={Cart}/>
        <Route path='/register' component={Register}/>
        <Route path='/' component={HomePage}/>
        

      </Switch>
      
</div>
     

    
  );
}

export default App;
