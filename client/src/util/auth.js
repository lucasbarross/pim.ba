import axios from 'axios';
import {me} from './api';

export default class AuthService {
    
    login = (auth) => {
        // Get a token from api server
        return axios.post('/login', auth).then(res => {
                this.setToken(res.data.token) // Setting the token in localStorage
                return Promise.resolve(res);
            })
    }

    loggedIn = () => {
        if (!this.getToken()) {
            return Promise.reject(new Error('No Token'));
        } else {
            return me(this.getToken()).then((response) => {
                if (response.data.code) {
                    this.logout();
                    throw new Error('Invalid token');
                }
                return Promise.resolve(response);
            });
        }
    }

    setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
    }
}