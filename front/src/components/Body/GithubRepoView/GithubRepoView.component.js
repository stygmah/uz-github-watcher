import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as githubService from '../../../services/github.service';

const GithubRepoView = () => {
    const {owner} = useParams();
    const {repo} = useParams();
    const [hasError, setHasError] = useState(false);
    const [info, setInfo] = useState({});

    const GH_LOGO = 'https://www.google.com/search?q=github+logo&sxsrf=ALeKk001nrxKVW_Fnx518cI_HzP2_PNfgA:1606068704287&tbm=isch&source=iu&ictx=1&fir=Kq4l3mSBVj08zM%252CH8p6HHzcTglWAM%252C_&vet=1&usg=AI4_-kT78k009xgpSJC9N7NFJj6hzojAkg&sa=X&ved=2ahUKEwjLgOqU4JbtAhULA2MBHfJmAQUQ9QF6BAgLEFM&biw=1920&bih=946#imgrc=Kq4l3mSBVj08zM';

    useEffect( async ()=>{
        if(!owner || !repo){
            setHasError(true);
            return;
        }

        const result = await githubService.getRepo(owner, repo);
        setInfo(result.data);
    },[]);
    

    return(
    <div className="container">
        <Link to={`/organization/${owner}`} className="mx-5 my-3">Go back</Link>
        
        {(info && !hasError)&& 
            <div className="card shadow mx-5 mt-2">
                <div className="row">
                    <div className="col-sm-6">
                        <img className="img-fluid" src={info.owner && (info.owner.avatar_url || GH_LOGO )}/>
                    </div>
                    <div className="col-sm-6 pt-4">
                        <h2 className="mb-0">{info.name}</h2>
                        <p className="muted small">by: {info.owner && info.owner.login}</p>
                        <hr className="w-75"></hr>
                        <p><b>Created:</b> {info.created_at}</p>
                        <p><b>Last Updated:</b>  {info.updated_at}</p>
                        <p><b>Stars:</b>  {info.stargazers_count} </p>
                        <p><b>Forks:</b>  {info.forks} </p>
                        <p><b>Watchers:</b>  {info.watchers_count} </p>
                        <p><b>Accesibility:</b> {info.private ? 'private':'public'}</p>
                    </div>
                </div>
                <div className="row">
                    <p className="p-5 ">{info.description}</p>
                </div>
            </div>
        }
    </div>);
}

export default GithubRepoView;