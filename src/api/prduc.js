import insten from "./fig";

const getPRD = () =>{
    return insten.get('/projects');
}
const getPRoD = (id) =>{
    return insten.get(`/projects/${id}`);
}
const addPRD = (project) =>{
    return insten.post(`/projects/`, project);
}
const deletePRD = (id) =>{
    return insten.delete(`/projects/${id}`);
}
const updateProject = (project) => {
    return instance.put(`/projects/${project.id}`, project);
};
const getBlog = () =>{
    return insten.get('/blogs');
}
const addBlogs = (blog) =>{
    return insten.post(`/blogs/`, blog);
}
const deleteBlog = (id) =>{
    return insten.delete(`/blogs/${id}`);
}
const getAbout = () =>{
    return insten.get('/about');
}
const addAbout = (about) =>{
    return insten.post(`/about/`, about);
}
const deleteAbout = (id) =>{
    return insten.delete(`/about/${id}`);
}
const updateAbout = (about) => {
    return instance.put(`/about/${about.id}`, about);
};
const getHome = () =>{
    return insten.get('/home');
}
const addHome = (home) =>{
    return insten.post(`/home/`, home);
}
const deleteHome = (id) =>{
    return insten.delete(`/home/${id}`);
}
export { getPRD, getPRoD, addPRD, deletePRD, updateProject, getBlog, addBlogs, deleteBlog, getAbout, addAbout, deleteAbout, updateAbout, getHome, addHome, deleteHome };