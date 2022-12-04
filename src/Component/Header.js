import React from 'react'
import './Header.css'
import { Link, useNavigate } from "react-router-dom"



function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user-info"));

  // console.log(name);
  function logout() {
    localStorage.clear();
    navigate("/register");

  }



  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">DashBoard</Link>
              </li>
              {
                localStorage.getItem("user-info") ?
                  <>

                    <li className="nav-item">
                      <Link className="nav-link" to="/addproduct">AddProduct</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/updateproduct">Updateproduct</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/productlist">ProductList</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/search">Search</Link>
                    </li>
                  </>
                  :
                  <>
                    {/* <li className="nav-item">
                      <Link className="nav-link" to="/Login">Login</Link>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/Register">Register</Link>
                    </li>
                  </>
              }
            </ul>
            {
              localStorage.getItem("user-info") ?
              <>
              <div className="btn-group mx-1 my-1">
              <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                {user.name ??"USER"}
              </button>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                <li><button className="dropdown-item" type="button" onClick={logout}>LogOut</button></li>
                <li><button className="dropdown-item" type="button">Profile</button></li>
              </ul>
            </div>
              </> : null
            }
            





            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header