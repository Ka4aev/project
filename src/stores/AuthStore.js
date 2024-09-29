import { defineStore } from 'pinia';
import {computed, ref} from "vue";
import {useRouter} from "vue-router";
import {api} from "@/shared/index.js";

import {toast} from "vue3-toastify";
import 'vue3-toastify/dist/index.css';

export const useAuthStore = defineStore('auth', () => {
    const token = ref(localStorage.getItem('token') || null);
    const router = useRouter()
    const loginError = ref(null);

    const login = async (credentials) => {
        try {
            const response = await api.post(`login`, credentials);
            token.value = response.data.data.user_token;
            localStorage.setItem('token', token.value);
            loginError.value = null;
            await toast("Вы авторизовались!", {
                autoClose: 2000,
                "theme": "auto",
                "type": "success",
                "position": "top-right",
                "dangerouslyHTMLString": true
            });
            setTimeout(()=>{
                router.push('/')
            },2000)
        } catch (error) {
            if (error.response && error.response.status === 401) {
                loginError.value = 'Неверные введеные данные';
                toast("Неверные введенные данные!", {
                    autoClose: 2000,
                    "theme": "auto",
                    "type": "error",
                    "position": "top-right",
                    "dangerouslyHTMLString": true
                });
            } else {
                loginError.value = 'Ошибка при входе';
            }
            console.error('Ошибка при входе:', error);
        }
    };

    const register = async (credentials) => {
        try {
            const response = await api.post(`signup`, credentials);
            console.log(response)
            token.value = response.data.data.user_token;
            console.log(response.data)
            console.log(token.value)
            localStorage.setItem('token', token.value);
            await toast("Вы зарегистрировались!", {
                autoClose: 2000,
                "theme": "auto",
                "type": "success",
                "position": "top-right",
                "dangerouslyHTMLString": true
            });
            setTimeout(()=>{
                router.push('/')
            },1500)
        } catch (error) {
            toast("Ошибка при регистрации!", {
                autoClose: 2000,
                "theme": "auto",
                "type": "error",
                "position": "top-right",
                "dangerouslyHTMLString": true
            });
            console.error('Ошибка при регистрации:', error);
        }

    };

    const logout = async () => {
        await toast("Вы вышли из аккаунта", {
            autoClose: 2000,
            "theme": "auto",
            "type": "info",
            "position": "top-right",
            "dangerouslyHTMLString": true
        });
        token.value = null;
        localStorage.removeItem('token');
        setTimeout(()=>{
            router.push('/')
        },2000)
    };

    const isAuthenticated = computed(() => !!token.value);



    return { token, router, loginError, login, register, logout, isAuthenticated };
});
