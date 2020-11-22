import React from 'react';
import {Switch, Route} from 'react-router-dom';
import GithubOrganizationView from './GithubOrganizationView/GithubOrganizationView.component';
import GithubRepoView from './GithubRepoView/GithubRepoView.component';
import HomePage from './HomePage/HomePage.component';

const Body = ()=>{
    return(

        <div>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/repo/:owner/:repo">
                    <GithubRepoView/>
                </Route>
                <Route exact path="/organization/:select?">
                    <GithubOrganizationView/>
                </Route>
            </Switch>
        </div>
    );
}

export default Body;