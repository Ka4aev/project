import { fio } from './RegisterView.vue';

const submit = handleSubmit((values) => {
console.log(values); /** Выведет { email: 'введенный_email', password: 'введенный_пароль' } */

const __VLS_componentsOption = {};

let __VLS_name!: 'RegisterView';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'label'?: boolean; } &
{ 'main'?: boolean; } &
{ 'login'?: boolean; } &
{ 'login'?: boolean; } &
{ 'login'?: boolean; } &
{ 'login'?: boolean; } &
{ 'signup'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input;
__VLS_intrinsicElements.form; __VLS_intrinsicElements.form; __VLS_intrinsicElements.form; __VLS_intrinsicElements.form;
__VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label;
__VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p;
__VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("m-0 p-0 justify-center items-center min-h-svh overflow-hidden flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("m-0 p-0 justify-center items-center min-h-svh overflow-hidden flex"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("main overflow-hidden rounded-xl drop-shadow-2xl"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("main overflow-hidden rounded-xl drop-shadow-2xl"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["input"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, id: ("chk"), class: ("hidden"), type: ("checkbox"), "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, id: ("chk"), class: ("hidden"), type: ("checkbox"), "aria-hidden": ("true"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
{
const __VLS_15 = __VLS_intrinsicElements["div"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, class: ("relative w-full h-full"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("relative w-full h-full"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = __VLS_intrinsicElements["form"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{ onSubmit: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{ onSubmit: {} as any, }, });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
let __VLS_25 = { 'submit': __VLS_pickEvent(__VLS_24['submit'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_22>).onSubmit) };
__VLS_25 = { submit: (__VLS_ctx.submit) };
{
const __VLS_26 = __VLS_intrinsicElements["label"];
const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
const __VLS_28 = __VLS_27({ ...{}, class: ("label"), for: ("chk"), "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> & Record<string, unknown>) => void)({ ...{}, class: ("label"), for: ("chk"), "aria-hidden": ("true"), });
const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29.emit>;
(__VLS_29.slots!).default;
}
{
const __VLS_31 = __VLS_intrinsicElements["input"];
const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
const __VLS_33 = __VLS_32({ ...{}, value: ((__VLS_ctx.fio)), type: ("text"), name: ("txt"), placeholder: ("ФИО"), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{}, value: ((__VLS_ctx.fio)), type: ("text"), name: ("txt"), placeholder: ("ФИО"), required: (true), });
const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
}
{
const __VLS_36 = __VLS_intrinsicElements["input"];
const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
const __VLS_38 = __VLS_37({ ...{}, ...(__VLS_ctx.emailAttrs), type: ("email"), id: ("email"), name: ("email"), placeholder: ("Почта"), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, ...(__VLS_ctx.emailAttrs), type: ("email"), id: ("email"), name: ("email"), placeholder: ("Почта"), required: (true), });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
(__VLS_ctx.email);
}
if (__VLS_ctx.errors.email) {
{
const __VLS_41 = __VLS_intrinsicElements["p"];
const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
const __VLS_43 = __VLS_42({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
(__VLS_ctx.errors.email);
(__VLS_44.slots!).default;
}
// @ts-ignore
[submit, fio, fio, emailAttrs, emailAttrs, email, errors, errors,];
}
{
const __VLS_46 = __VLS_intrinsicElements["input"];
const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
const __VLS_48 = __VLS_47({ ...{}, ...(__VLS_ctx.passwordAttrs), type: ("password"), name: ("password"), id: ("password"), placeholder: ("Пароль"), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, ...(__VLS_ctx.passwordAttrs), type: ("password"), name: ("password"), id: ("password"), placeholder: ("Пароль"), required: (true), });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
(__VLS_ctx.password);
}
if (__VLS_ctx.errors.password) {
{
const __VLS_51 = __VLS_intrinsicElements["p"];
const __VLS_52 = __VLS_elementAsFunctionalComponent(__VLS_51);
const __VLS_53 = __VLS_52({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_52));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_51, typeof __VLS_53> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53)!;
let __VLS_55!: __VLS_NormalizeEmits<typeof __VLS_54.emit>;
(__VLS_ctx.errors.password);
(__VLS_54.slots!).default;
}
// @ts-ignore
[passwordAttrs, passwordAttrs, password, errors, errors,];
}
{
const __VLS_56 = __VLS_intrinsicElements["button"];
const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
const __VLS_58 = __VLS_57({ ...{}, disabled: ((__VLS_ctx.errors.email || __VLS_ctx.errors.password)), type: ("submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_58> & Record<string, unknown>) => void)({ ...{}, disabled: ((__VLS_ctx.errors.email || __VLS_ctx.errors.password)), type: ("submit"), });
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
let __VLS_60!: __VLS_NormalizeEmits<typeof __VLS_59.emit>;
(__VLS_59.slots!).default;
}
(__VLS_23.slots!).default;
}
(__VLS_18.slots!).default;
}
{
const __VLS_61 = __VLS_intrinsicElements["div"];
const __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61);
const __VLS_63 = __VLS_62({ ...{}, class: ("login"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_61, typeof __VLS_63> & Record<string, unknown>) => void)({ ...{}, class: ("login"), });
const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63)!;
let __VLS_65!: __VLS_NormalizeEmits<typeof __VLS_64.emit>;
{
const __VLS_66 = __VLS_intrinsicElements["form"];
const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
const __VLS_68 = __VLS_67({ ...{ onSubmit: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_66, typeof __VLS_68> & Record<string, unknown>) => void)({ ...{ onSubmit: {} as any, }, });
const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68)!;
let __VLS_70!: __VLS_NormalizeEmits<typeof __VLS_69.emit>;
let __VLS_71 = { 'submit': __VLS_pickEvent(__VLS_70['submit'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_67, typeof __VLS_68>).onSubmit) };
__VLS_71 = { submit: () => { } };
{
const __VLS_72 = __VLS_intrinsicElements["label"];
const __VLS_73 = __VLS_elementAsFunctionalComponent(__VLS_72);
const __VLS_74 = __VLS_73({ ...{}, class: ("label"), for: ("chk"), "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_72, typeof __VLS_74> & Record<string, unknown>) => void)({ ...{}, class: ("label"), for: ("chk"), "aria-hidden": ("true"), });
const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74)!;
let __VLS_76!: __VLS_NormalizeEmits<typeof __VLS_75.emit>;
(__VLS_75.slots!).default;
}
{
const __VLS_77 = __VLS_intrinsicElements["input"];
const __VLS_78 = __VLS_elementAsFunctionalComponent(__VLS_77);
const __VLS_79 = __VLS_78({ ...{}, type: ("email"), name: ("email"), placeholder: ("Почта"), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_78));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_77, typeof __VLS_79> & Record<string, unknown>) => void)({ ...{}, type: ("email"), name: ("email"), placeholder: ("Почта"), required: (true), });
const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_77, __VLS_79)!;
let __VLS_81!: __VLS_NormalizeEmits<typeof __VLS_80.emit>;
}
{
const __VLS_82 = __VLS_intrinsicElements["input"];
const __VLS_83 = __VLS_elementAsFunctionalComponent(__VLS_82);
const __VLS_84 = __VLS_83({ ...{}, type: ("password"), name: ("pswd"), placeholder: ("Пароль"), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_83));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_82, typeof __VLS_84> & Record<string, unknown>) => void)({ ...{}, type: ("password"), name: ("pswd"), placeholder: ("Пароль"), required: (true), });
const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84)!;
let __VLS_86!: __VLS_NormalizeEmits<typeof __VLS_85.emit>;
}
{
const __VLS_87 = __VLS_intrinsicElements["button"];
const __VLS_88 = __VLS_elementAsFunctionalComponent(__VLS_87);
const __VLS_89 = __VLS_88({ ...{}, type: ("submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_88));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_87, typeof __VLS_89> & Record<string, unknown>) => void)({ ...{}, type: ("submit"), });
const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_87, __VLS_89)!;
let __VLS_91!: __VLS_NormalizeEmits<typeof __VLS_90.emit>;
(__VLS_90.slots!).default;
}
(__VLS_69.slots!).default;
}
(__VLS_64.slots!).default;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["m-0"];
__VLS_styleScopedClasses["p-0"];
__VLS_styleScopedClasses["justify-center"];
__VLS_styleScopedClasses["items-center"];
__VLS_styleScopedClasses["min-h-svh"];
__VLS_styleScopedClasses["overflow-hidden"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["main"];
__VLS_styleScopedClasses["overflow-hidden"];
__VLS_styleScopedClasses["rounded-xl"];
__VLS_styleScopedClasses["drop-shadow-2xl"];
__VLS_styleScopedClasses["hidden"];
__VLS_styleScopedClasses["relative"];
__VLS_styleScopedClasses["w-full"];
__VLS_styleScopedClasses["h-full"];
__VLS_styleScopedClasses["label"];
__VLS_styleScopedClasses["login"];
__VLS_styleScopedClasses["label"];
}
var __VLS_slots!: {};
// @ts-ignore
[errors, errors, errors, errors,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
fio: fio as typeof fio,
errors: errors as typeof errors,
email: email as typeof email,
emailAttrs: emailAttrs as typeof emailAttrs,
password: password as typeof password,
passwordAttrs: passwordAttrs as typeof passwordAttrs,
submit: submit as typeof submit,
};
},
});
export default (await import('vue')).defineComponent({
setup() {
return {};
},
});
});
