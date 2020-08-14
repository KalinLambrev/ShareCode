import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const createUser = payload => api.post('/user', payload);
export const getUserById = id => api.get(`/user/${id}`);

export const addSnippet = payload => api.post(`/snippet`, payload);
export const getAllSnippets = () => api.get(`/snippet`);
export const updateSnippetById = (id, payload) => api.put(`/snippet/${id}`, payload);
export const deleteSnippetById = id => api.delete(`/snippet/${id}`);
export const getSnippetById = id => api.get(`/snippet/${id}`);
export const getSnippetByUserId = userId => api.get(`/snippets-byuser/${userId}`);

const apis = {
    createUser,
    getUserById,
    addSnippet,
    getAllSnippets,
    updateSnippetById,
    deleteSnippetById,
    getSnippetById,
    getSnippetByUserId
}

export default apis;