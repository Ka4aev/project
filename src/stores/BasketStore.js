import {defineStore, storeToRefs} from "pinia";
import { useAuthStore } from "./AuthStore.js";
import {api} from "@/shared/index.js";
import {ref} from "vue";
import {toast} from "vue3-toastify";
import 'vue3-toastify/dist/index.css';

export const useBasketStore = defineStore('BasketStore', () => {
    const basketProducts = ref([]);
    const { token } = storeToRefs(useAuthStore());

    const addToBasket = async (productId) => {
        console.log("Попытка добавить товар в корзину с идентификатором:", productId);
        try {
            const response = await api.post(`cart/${productId}`, null, {
                headers: {
                    Authorization: `Bearer ${token.value}`
                }
            });
            toast("Товар добавлен в корзину!", {
                autoClose: 2000,
                theme: "auto",
                type: "success",
                position: "top-right",
                dangerouslyHTMLString: true
            });
            await getProducts(); // Обновляем корзину после изменения
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 404) {
                toast("Товар не найден!", {
                    autoClose: 2000,
                    theme: "auto",
                    type: "error",
                    position: "top-right",
                    dangerouslyHTMLString: true
                });
            } else {
                console.error('Ошибка при добавлении товара в корзину:', error);
                toast("Ошибка при добавлении товара в корзину!", {
                    autoClose: 2000,
                    theme: "auto",
                    type: "error",
                    position: "top-right",
                    dangerouslyHTMLString: true
                });
            }
            throw error;
        }
    };

    const removeFromBasket = async (productId) => {

        try {
            const response = await api.delete(`cart/${productId}`,  {
                headers: {
                    Authorization: `Bearer ${token.value}`
                }
            });

            await getProducts(); // Обновляем корзину после изменения
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 404) {
                toast("Товар не найден!", {
                    autoClose: 2000,
                    theme: "auto",
                    type: "error",
                    position: "top-right",
                    dangerouslyHTMLString: true
                });
            } else {
                console.error('Ошибка при удалении товара из корзины:', error);
                toast("Ошибка при удалении товара из корзины!", {
                    autoClose: 2000,
                    theme: "auto",
                    type: "error",
                    position: "top-right",
                    dangerouslyHTMLString: true
                });
            }
            throw error;
        }
    };

    const getProducts = async () => {
        try {
            const response = await api.get('cart', {
                headers: {
                    Authorization: `Bearer ${token.value}`
                }
            });
            basketProducts.value = response.data.data.map(item => {
                item.quantity = item.quantity || 1; // Устанавливаем количество, если оно не задано
                return item;
            });
        } catch (error) {
            console.error('Ошибка при получении корзины:', error);
        }
    };

    const updateQuantity = async (productId, quantityChange) => {
        // код хуня:3
        if (quantityChange > 0) {
            for (let i = 0; i < quantityChange; i++) {
                await addToBasket(productId);
            }
        } else if (quantityChange < 0) {
            for (let i = 0; i < Math.abs(quantityChange); i++) {
                await removeFromBasket(productId);
            }
        }
    };

    return { basketProducts, addToBasket, getProducts, removeFromBasket, updateQuantity };
});