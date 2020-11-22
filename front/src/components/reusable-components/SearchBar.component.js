import React, { useRef, useState } from 'react';


const SearchBar = ({results, limit, parentSetter, resultSelector})=>{
    const [focus, setFocus] = useState(false);
    const searchBar = useRef(null);


    const manageChange = (e) => {
        e.preventDefault();
        parentSetter(e.target.value);
    }

    const manageSelect = (organization)=>{
        searchBar.current.value = organization;
        resultSelector(organization);
    }

    return(
        <div className="position-relative w-50 mx-auto">
                <input className="form-control mt-3 mb-0 text-center" 
                ref={searchBar}
                type="text" 
                onChange={manageChange}
                onFocus={()=> setTimeout(()=>{ setFocus(true) }, 150)}
                onBlur={()=> setTimeout(()=>{ setFocus(false) }, 150)}
                />
                <div className="search-result-list mx-auto w-100">
                    {focus && results.map(result => <SearchResult key={result.id} result={result} resultSetter={manageSelect} />)}
                </div>
        </div>
    );
}
const SearchResult = ({result, resultSetter})=>{
    const handleSelect = ()=>{
        resultSetter(result.login)
    }

    return (
        <div className="list-element py-3 px-2" onClick={handleSelect}>
            {result.login}
        </div>
    );
}


export default SearchBar;