import { defineStore } from 'pinia';
import axios from 'axios';
import {ref} from "vue";

export const authStore = defineStore('auth', () => {
    const token = ref(null);

    const login = async (credentials) => {
        try {
            const response = await axios.post('http://lifestealer86.ru/api-shop/login', credentials);
            console.log(response)
            token.value = response.data.token;
            console.log(token.value)
            localStorage.setItem('token', token.value);
        } catch (error) {
            console.error('Ошибка при входе:', error);
        }
    };

    const register = async (credentials) => {
        try {
            const response = await axios.post('http://lifestealer86.ru/api-shop/signup', credentials);
            console.log(response)
            token.value = response.data.token;
            console.log(token.value)
            localStorage.setItem('token', token.value);
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
        }
    };

    const logout = () => {
        token.value = null;
        localStorage.removeItem('token');
    };

    const loadToken = () => {
        token.value = localStorage.getItem('token');
    };

    return { token, login, register, logout, loadToken };
});
