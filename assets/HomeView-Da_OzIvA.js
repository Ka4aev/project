import{u as m,_ as w}from"./CardStore-DJktZm4T.js";import{_,s as h,u as k,t as y,o as c,c as l,a as t,b as s,i as v,d as f,e as i,n as x,f as b,r as B,g as S,h as C,F as T,j,k as E,l as p}from"./index-VvR4aVGE.js";import{u as H,l as V}from"./lodash-CEzvQp6Y.js";import"./_commonjsHelpers-Cpj98o6Y.js";const I={class:"card"},L=["src"],N={class:"info mt-6 flex justify-between tracking-wide"},P={class:"text-green-600 pl-2"},z={class:"info mt-4 flex justify-between tracking-wide"},A={class:"text-green-600 pl-2"},F={class:"card-text"},U={__name:"ProductCard",props:{card:{type:Object,required:!0}},setup(e){const o=e,{isAuthenticated:d}=h(k()),{addToBasket:u}=H(),n=V.debounce(()=>{y("Товар добавлен в корзину!","success"),u(o.card.id)},200);return(g,a)=>(c(),l("article",I,[t("img",{class:"card-img h-48 -z-10 mt-2",src:s(v)(o.card),alt:"Product Image"},null,8,L),s(d)?(c(),l("button",{key:0,class:"buy-button",onClick:a[0]||(a[0]=(...r)=>s(n)&&s(n)(...r))}," в корзину ")):f("",!0),t("div",N,[t("p",null,i(e.card.name),1),t("span",P,"₽"+i(e.card.price),1)]),t("div",{class:"buy-section",style:x({height:s(b)(o.card)})},[t("div",z,[t("p",null,i(e.card.name),1),t("span",A,"₽"+i(e.card.price),1)]),t("p",F,i(e.card.description),1)],4)]))}},$=_(U,[["__scopeId","data-v-397aa155"]]),q={class:"catalog-section"},D={__name:"HomeView",setup(e){const o=B(!1),d=m(),{getCards:u}=m(),n=()=>{o.value=window.scrollY>window.innerHeight*.3};return S(async()=>{await u(),window.addEventListener("scroll",n)}),C(()=>{window.removeEventListener("scroll",n)}),(g,a)=>(c(),l("div",null,[a[1]||(a[1]=t("div",{class:"catalog"},[t("span",{class:"text-white"},"каталог")],-1)),t("section",q,[(c(!0),l(T,null,j(s(d).cards,r=>(c(),E($,{key:r.id,card:r},null,8,["card"]))),128)),o.value?(c(),l("img",{key:0,class:"scroll-up",src:w,alt:"arrow-up",onClick:a[0]||(a[0]=(...r)=>s(p)&&s(p)(...r))})):f("",!0)])]))}},G=_(D,[["__scopeId","data-v-5ea6ea60"]]);export{G as default};
