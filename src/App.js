import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Inventory from './components/page/Inventory';
import OrderReview from './components/page/OrderReview';
import PlaceOrder from './components/page/PlaceOrder';
import Notfound from './components/page/Notfound';
import Login from './components/page/Login';
import Register from './components/page/Register';
import AuthProvidor from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Shipping from './components/page/Shipping/Shipping';

function App() {
  return (
    <div className="App">
      <AuthProvidor>
        <Header/>
        <Router>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Shop} />
            <Route exact path="/shop" component={Shop} />
            <PrivateRoute exact path="/inventory">
              <Inventory></Inventory>
            </PrivateRoute>
            <Route exact path="/order" component={OrderReview} />
            <PrivateRoute exact path="/PlaceOrder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/Shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route path="*" component={Notfound} />
          </Switch>
        </Router>
        <Footer/>
      </AuthProvidor>
    </div>
  );
}

export default App;
