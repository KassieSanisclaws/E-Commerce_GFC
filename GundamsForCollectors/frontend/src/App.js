import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';  
import ProductEditScreen from './screens/ProductEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';


function App() {

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
      dispatch(signout());
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div className="brand">
        <button onClick={openMenu}>&#9776;</button>
          <Link className="brand" to="/">Gundam's Ecommerce</Link>
        </div>
        <div>
          <Link to="/news">News</Link>
          <Link to="/cart">
                  Cart 
                    {cartItems.length > 0 && ( 
                    <span className="badge">{cartItems.length}</span>
                    )} </Link>
                    { userInfo ? (
                      <div className="dropdown">
                      <Link to="#">
                        {userInfo.name} <i className="fa fa-caret-down"></i>{' '} 
                        </Link>
                        <ul className="dropdown-content">
                          <li>
                            <Link to="/profile">User Profile</Link>
                          </li>
                        <li>
                          <Link to="/orderhistory">Order History</Link>
                        </li>
                        <li>
                          <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                        </li>
                        </ul>
                        </div>
                    ) : (
                      <Link to="/signin">SignIn</Link>
                    )}
                    {userInfo && userInfo.isAdmin && (
                      <div className="dropdown">
                      <Link to="#admin">
                        Admin <i className="fa fa-caret-down"></i></Link>
                      <ul className="dropdown-content">
                        <li>
                          <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                          <Link to="/productlist">Products</Link>
                        </li>
                        <li>
                          <Link to="/orderlist">Orders</Link>
                        </li>
                        <li>
                          <Link to="/userlist">Users</Link>
                        </li>
                      </ul>
                      </div>
                    )}
                 </div>
               </header>
               <aside className="sidebar">
      <h3>Models Kits</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
      <li>
      <Link to="index.html"> - METAL FRAME MODELS</Link>
      </li>
      <li>
      <Link to="index.html"> - CUSTOM BUILD MODELS</Link>
      </li>
      <li>
      <Link to="index.html"> - MASTER GRADE MODELS</Link>
      </li>
      </ul>
      </aside>
      <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/product/:id" component={ProductScreen} exact></Route>
        <Route path="/product/:id/edit" component={ProductEditScreen} exact></Route>
        <Route path="/signin" component={SigninScreen}></Route>
        <Route path="/register" component={RegisterScreen}></Route>
        <Route path="/shipping" component={ShippingAddressScreen}></Route>
        <Route path="/payment" component={PaymentMethodScreen}></Route>
        <Route path="/placeorder" component={PlaceOrderScreen}></Route>
        <Route path="/order/:id" component={OrderScreen}></Route>
        <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
        <Route path="/news" component={NewsScreen}></Route>
        <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
        <AdminRoute path="/productlist" component={ProductListScreen}></AdminRoute>
        <Route path="/" component={HomeScreen} exact></Route>
        
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
