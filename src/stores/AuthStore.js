import { defineStore } from 'pinia';
import axios from 'axios';
import {computed, ref} from "vue";
import {useRouter} from "vue-router";

export const useAuthStore = defineStore('auth', () => {
    const token = ref(localStorage.getItem('token'));
    const router = useRouter()

    const login = async (credentials) => {
        try {
            const response = await axios.post('http://lifestealer86.ru/api-shop/login', credentials);
            token.value = response.data.data.user_token;
            localStorage.setItem('token', token.value);

            await router.push('/')
        } catch (error) {
            console.error('Ошибка при входе:', error);
        }
    };

    const register = async (credentials) => {
        try {
            const response = await axios.post('http://lifestealer86.ru/api-shop/signup', credentials);
            console.log(response)
            token.value = response.data.data.user_token;
            console.log(response.data)
            console.log(token.value)
            localStorage.setItem('token', token.value);
            await router.push('/')
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
        }

    };

    const logout = () => {
        token.value = null;
        localStorage.removeItem('token');
    };

    const isAuthenticated = computed(() => !!token.value);

    return { token, router, login, register, logout, isAuthenticated };
});
