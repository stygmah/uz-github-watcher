import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ()=>{
    return(
        <div className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">Github Repo Watcher</Link>
        </div>
    );
}

export default Navbar;