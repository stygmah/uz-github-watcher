import React from 'react';
import { Link } from 'react-router-dom';

const ListElement = ({repo}) =>{
    const {name, id, description, html_url, updated_at, owner} = repo;
    
    return(
    <div className="card">
        <div className="card-body">
                <div className="list-element-section list-element-top">
                    <h4>{name}</h4>
                    <p className="small muted ml-2">last updated: {updated_at}</p>
                </div>
                <div className="list-element-section list-element-bottom">
                    <p className="mb-0">{description && (description.length > 15 ? description.substring(0,12)+'...' : description)}</p>
                    <Link to={`/repo/${owner.login}/${name}`} className="mx-5 my-3">
                        <button className="btn btn-primary float-right">View more</button>
                    </Link>
                </div>
        </div>
    </div>
    );
}

export default ListElement;