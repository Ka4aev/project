import {defineStore, storeToRefs} from "pinia";
import { ref } from "vue";
import { api } from "@/shared/index.js";
import {useAuthStore} from "@/stores/AuthStore.js";
import {toastNotification} from "@/shared/functions.js";


export const useOrdersStore = defineStore("ordersStore", () => {
    const ordersProducts = ref([]);
    const { token } = storeToRefs(useAuthStore());

    const getOrders = async () => {
        try {
            const response = await api.get('order', {
                headers: {
                    Authorization: `Bearer ${token.value}`
                }
            });
            ordersProducts.value = response.data.data
        } catch (error) {
            console.error('Ошибка при получении заказов:', error);
        }
    };

    const addToOrders = async () => {
        try {
            const response = await api.post(`order`, null, {
                headers: {
                    Authorization: `Bearer ${token.value}`
                }
            });
            toastNotification("Товары добавлены в заказ!","success")
            await getOrders(); // Обновляем корзину после изменения
            return response.data;
        } catch (error) {
            console.log(error)
        }
    };

    return {
        ordersProducts,
        getOrders,
        addToOrders,
    };
});


