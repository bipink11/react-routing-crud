import React from 'react'
import {Link,NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <nav className ="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="conatiner" style={{display:'flex'}}>
                {/* <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink className="btn btn-outline-light" to="/users/add" style={{'margin-left':'940px'}}>Add User</NavLink>
              
            </div>
        </nav>
    )
}

export default Navbar;