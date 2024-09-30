import {defineStore, storeToRefs} from "pinia";
import { useAuthStore } from "./AuthStore.js";
import {api} from "@/shared/index.js";
import {ref} from "vue";

export const useBasketStore = defineStore('BasketStore', () => {
    const basketProducts = ref([]);
    const { token } = storeToRefs(useAuthStore());

    const addToBasket = async (productId) => {
        try {
            const response = await api.post(`cart/${productId}`, null, {
                headers: {
                    Authorization: `Bearer ${token.value}`
                }
            });
            await getProducts(); // Обновляем корзину после изменения
            return response.data;
        } catch (error) {
            console.log(error)
        }
    };

    const removeFromBasket = async (productId) => {

        try {
             await api.delete(`cart/${productId}`,  {
                headers: {
                    Authorization: `Bearer ${token.value}`
                }
            });

            await getProducts(); // Обновляем корзину после изменения
        } catch (error) {
            console.log(error)
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
        quantityChange > 0 ?
            (await addToBasket(productId))
            : (await removeFromBasket(productId));
    };

    return { basketProducts, addToBasket, getProducts, removeFromBasket, updateQuantity };
});