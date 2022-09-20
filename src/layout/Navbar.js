import React from "react";
import { NavLink as Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
             <div className="container-fluid">
                <a className="navbar-brand" href="/">Employee Management App</a>
                <Link className={'btn btn-success'} to='/addEmpl'>Add Employee</Link>
             </div>
            </nav>
        </div>
    )
}