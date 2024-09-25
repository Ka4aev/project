import { defineStore } from "pinia";
import { ref} from "vue";
import {api} from "@/shared/index.js";

export const useCardStore = defineStore("cardStore", () => {
    const cards = ref([]);

    const getCards = async () => {
        const response = (await api(`products`)).data
        cards.value = response.data;
        console.log(cards.value)
    };

    return {
        cards,
        getCards,
    };
});


