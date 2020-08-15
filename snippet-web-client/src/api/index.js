import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

const SNIPPET_PATH = `/snippet`;
const USER_PATH = '/user';
const SNIPPET_BY_USER_ID = '/snippets-byuser';

export const getUserById = id => api.get(`${USER_PATH}/${id}`);
export const createUser = payload => api.post(USER_PATH, payload);

export const getAllSnippets = () => api.get(SNIPPET_PATH);
export const getSnippetById = id => api.get(`${SNIPPET_PATH}/${id}`);
export const getSnippetByUserId = userId => api.get(`${SNIPPET_BY_USER_ID}/${userId}`);
export const addSnippet = payload => api.post(SNIPPET_PATH, payload);
export const updateSnippetById = (id, payload) => api.put(`${SNIPPET_PATH}/${id}`, payload);
export const deleteSnippetById = id => api.delete(`${SNIPPET_PATH}/${id}`);


const apis = {
    getUserById,
    createUser,
    getAllSnippets,
    getSnippetById,
    getSnippetByUserId,
    addSnippet,
    updateSnippetById,
    deleteSnippetById

}

export default apis;