import axios from "axios";

function getProjects(tags) {
    return axios.post("/projects", {
        tags: tags
    })
};

function me (token) {
    return axios.get("/me");
};

export {
    getProjects,
    me
}

