
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Banner from './Components/Banner/Banner';
import Bookings from './Components/Bookings/Bookings';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import MyOrder from './Components/MyOrder/MyOrder';
import PrivateRoute from './Private/PrivateRoute';
import AddnewService from './Components/AddNewService/AddnewService';
import ManageAllOrder from './Components/ManageAllOrder/ManageAllOrder';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
        <Switch>
        <Route exact path="/">
          <Banner></Banner>
          <Bookings></Bookings>

        </Route>
        <PrivateRoute exact path="/myorder">
            <MyOrder></MyOrder>
          </PrivateRoute>
        <PrivateRoute exact path="/manageAllOrder">
            <ManageAllOrder></ManageAllOrder>
          </PrivateRoute>
        <PrivateRoute exact path="/addNewService">
            <AddnewService></AddnewService>
          </PrivateRoute>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
         
         
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
