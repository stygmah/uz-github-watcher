import axios from "axios";


const http = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        "Content-type": "application/json"
    }
});

export const getOrgRepos = (name, page, max) =>{
    return http.get(`/orgs/${name}/repos?per_page=${max}&page=${page}`);
}
export const searchOrg = (org, max) =>{
    return http.get(`/search/users?q=${org}+type:org+in:login&per_page=${max}`);
}
export const getRepo = (owner, repo) =>{
    return http.get(`/repos/${owner}/${repo}`);
}