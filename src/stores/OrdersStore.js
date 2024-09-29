import {defineStore, storeToRefs} from "pinia";
import { ref } from "vue";
import { api } from "@/shared/index.js";
import {useAuthStore} from "@/stores/AuthStore.js";
import {toast} from "vue3-toastify";

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
            console.log(ordersProducts.value)
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
            console.log(response)
            toast("Товары добавлены в заказ!", {
                autoClose: 2000,
                theme: "auto",
                type: "success",
                position: "top-right",
                dangerouslyHTMLString: true
            });
            await getOrders(); // Обновляем корзину после изменения
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 404) {
                toast("Заказ не найден!", {
                    autoClose: 2000,
                    theme: "auto",
                    type: "error",
                    position: "top-right",
                    dangerouslyHTMLString: true
                });
            } else {
                console.error('Ошибка при добавлении заказа:', error);
                toast("Ошибка при добавлении заказа", {
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

    return {
        ordersProducts,
        getOrders,
        addToOrders,
    };
});


