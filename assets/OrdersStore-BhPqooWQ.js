import{O as a,r as n,s as c,u as d,P as t,t as u}from"./index-VvR4aVGE.js";const h=a("ordersStore",()=>{const e=n([]),{token:o}=c(d()),s=async()=>{try{const r=await t.get("order",{headers:{Authorization:`Bearer ${o.value}`}});e.value=r.data.data}catch(r){console.error("Ошибка при получении заказов:",r)}};return{ordersProducts:e,getOrders:s,addToOrders:async()=>{try{const r=await t.post("order",null,{headers:{Authorization:`Bearer ${o.value}`}});return u("Товары добавлены в заказ!","success"),await s(),r.data}catch(r){console.log(r)}}}});export{h as u};
