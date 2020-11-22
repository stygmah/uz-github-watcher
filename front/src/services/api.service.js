import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3200",
  headers: {
    "Content-type": "application/json"
  }
});

export const saveRepo =  (metadata) => {
    return http.post('/tracked-repo',{
        data: {
            repoId: metadata.id,
            metaInformation: metadata
        }
    })
}