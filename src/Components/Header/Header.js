import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'

const Header = (props) => {
  const { user, logout } = useAuth();
  return (
    <div className="MenuBar-container menubar mt-2  d-flex align-items-center">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-2">

            <div className="logo-img">
              <Link to="/" className=" d-flex align-items-center items">
                <h3 className="logoname">Tra<span className="vio">Vio</span></h3>
              </Link>

            </div>

          </div>
          <div className="col-md-10">
            <div className="menu-container">
              <ul className="d-flex align-items-center justify-content-end ">

                <Link to="/" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About</li>
                </Link>
                {user.email ?
                  <Link to="/myorder" className="items">
                    <li>My Orders</li></Link> : ''}
                {user.email ?
                  <Link to="/manageAllOrder" className="items">
                    <li>Manage Orders</li></Link> : ''}
                {user.email ?
                  <Link to="/addNewService" className="items">
                    <li>Add Service</li></Link> : ''}
                {!user.email ?
                  <Link to="/login" className="items">
                    <li>Login</li></Link> :
                  <Link to="/login" className="items d-flex align-items-center">
                    <li onClick={logout}>Logout</li>

                  </Link>
                }
                {user.email ? <small className="user-name">Signed in as <span style={{ color: "violet", fontWeight: "bold" }}>{user.displayName}</span></small> : <p></p>}


              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;