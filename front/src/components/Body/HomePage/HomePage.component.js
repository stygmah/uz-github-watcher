import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ()=>{
    return(
        <div>
            <div className="jumbotron">
                <h1>Github Organization Repo Watcher</h1>
                <p>Follow any organization in github and their repositories</p>
                <Link to="/organization"><button className="btn btn-primary">Go to organization search</button></Link>
            </div>
        </div>
    );
}

export default HomePage;