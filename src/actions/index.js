import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=randomworddoesntmatter';

export function fetchPosts() {

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        // redux-promise will intercept the request from action and wait until it resolves
        // before passing it on to the reducer
        payload: request
    }
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    }
}