import { defineStore } from 'pinia';
import {computed, ref} from "vue";
import {useRouter} from "vue-router";
import {api} from "@/shared/index.js";

export const useAuthStore = defineStore('auth', () => {
    const token = ref(localStorage.getItem('token'));
    const router = useRouter()
    const loginError = ref(null);
    const carts = ref([]);

    const login = async (credentials) => {
        try {
            const response = await api.post(`login`, credentials);
            token.value = response.data.data.user_token;
            localStorage.setItem('token', token.value);
            loginError.value = null;
            await router.push('/')
        } catch (error) {
            if (error.response && error.response.status === 401) {
                loginError.value = 'Неверные введеные данные';
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

    const addToCart = async (productId) => {
        try {
            const response = await api.post(`cart/${productId}`, null, {
                headers: {
                    Authorization: `Bearer ${token.value}`
                }
            });
            console.log('Товар добавлен в корзину:', response.data);
            return response.data;
        } catch (error) {
            console.error('Ошибка при добавлении товара в корзину:', error);
            throw error;
        }
    };

    const showCarts = async () => {
        try {
            const response = await api.get('cart', {
                headers: {
                    Authorization: `Bearer ${token.value}`
                }
            });
            console.log(response)
            carts.value = response.data.data;
            console.log(carts.value);
        } catch (error) {
            console.error('Ошибка при получении корзины:', error);
        }
    };

    return { token, carts, router, loginError, login, register, logout, isAuthenticated , addToCart, showCarts};
});
