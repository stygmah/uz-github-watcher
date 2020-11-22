import React, { useEffect, useState } from 'react';
import * as githubService from '../../../services/github.service';
import ListElement from './ListElement.component';


const GithubRepoList = ({org,error}) => {        
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [repos, setRepos] = useState([]);

    useEffect(async ()=>{
        if(!org) return;
        const reposList = await githubService.getOrgRepos(org, page , limit);
        setRepos(reposList.data);
    }, [page,limit, org]); 


    return(
        <div>
            <div className="text-center">
                {(error && !repos && repos.length < 1 ) && <div>No repositories found for this</div>}
            </div>
            {repos.length > 1 && repos.map( repo => <ListElement key={repo.id} repo={repo} />)}
        </div>
    );
}

export default GithubRepoList;