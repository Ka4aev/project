import { computed } from "vue";
import 'vue3-toastify/dist/index.css';
import { toast } from "vue3-toastify";

export const buySectionHeight = computed(() => (product) => {
  const baseHeight = 40 // базовая высота
  const extraHeight = Math.ceil(product.description?.length / 10) * 15 // за каждые 10 символов 15px
  return `${baseHeight + extraHeight}px`
})

export const imageUrl = computed(() => (product) => {
  return `${import.meta.env.VITE_API_IMG}${product.image}`
})

export const toastNotification = (text,type) =>{
  toast(text, {
    autoClose: 2000,
    theme: "auto",
    type: type,
    position: "top-right",
    dangerouslyHTMLString: true
  });
}

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};