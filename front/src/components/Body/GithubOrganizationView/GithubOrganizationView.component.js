import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as githubService from '../../../services/github.service';
import SearchBar from '../../reusable-components/SearchBar.component';
import GithubRepoList from './GithubRepoList.component';

const GithubOrganizationView = () =>{
    const {select} = useParams();
    const [timeoutSearch, setTimeoutSearch] = useState(null);
    const [search, setSearch] = useState('');
    const [organization, setOrganization] = useState('');
    const [organizationList, setOrganizationList] = useState([]);
    const [error, setError] = useState(false);

    useEffect(async ()=>{
        if(timeoutSearch) clearTimeout(timeoutSearch);
        if(search.length < 2)return;
        const timeout = setTimeout(executeSearch, 200);
        setTimeoutSearch(timeout)
        return ()=>{
            clearTimeout(timeout);
        }
    },[search]);

    useEffect(()=>{
        if(select){
            manageSelection(select);
        }
    },[])

    const executeSearch = async()=>{
        try{
            const orgs = await githubService.searchOrg(search, 8);
            setOrganizationList(orgs.data.items);
            setError(false);
        }catch(e){
            setError(true);
            setOrganizationList([]);
        }
    }


    const manageSelection = (organization) =>{
        setOrganization(organization);
        setSearch(organization);
    }

    return(
        <div className="container">
            <div className="mb-4" >
                <h5 className="text-center my-2">Search for organizations in GitHub:</h5>
                <SearchBar parentSetter={setSearch} resultSelector={manageSelection} results={organizationList}/>
            </div>
            {organization && <h3 className="mb-4">Repositories owned by {organization}:</h3>}
            <GithubRepoList org={organization} error={error}/>
        </div>
    );
}

export default GithubOrganizationView;