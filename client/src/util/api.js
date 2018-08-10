import axios from "axios";

function getProjects(tags) {
    return axios.get("/projects", {
        params: {
            tags
        }
    });
};

function me (token) {
    return axios.get("/me", {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
};

function getProject(id) {
    return axios.get(`/projects/${id}`);
}

function getUserProject(token) {
    return axios.get(`/userProjects`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

function createProject(token, data) {
    return axios.post(`/projects/`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

function createUserProject(token, id) {
    return axios.post(`/projects/${id}/userProjects`, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

function submitUserProject(token, idUserProject, data) {
    return axios.put(`/userProjects/${idUserProject}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

}

function getAllUserProjects(token, idProject) {
    return axios.get(`/projects/${idProject}/userProjects/`);
}

function getCategories() {
    return axios.get(`/categories`);
}

function updateTasks(token , idUserProject, data) {
    return axios.put(`/userProjects/${idUserProject}/tasks`, data ,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}



export {
    getProjects,
    me,
    getProject,
    getUserProject,
    createProject,
    createUserProject,
    submitUserProject,
    getAllUserProjects,
    updateTasks,
    getCategories,
}

