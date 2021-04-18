// 目标 mini-vue
// 响应式
// effect -> ?
// watch watchEffect computed -> effect (这些都是从effect来的，effect主要做依赖收集，和触发依赖)
import { ref, reactive, effect } from "./node_modules/@vue/reactivity/dist/reactivity.esm-browser.js";
// ----------------------------- 响应式数据实例 -----------------------------
// // 依赖收集和触发依赖
// // 执行结果：20 30
// // 1，通过ref创建响应式数据
// const a = ref(10);

// let b;

// // 2，当a.value，执行了get方法，把effect内的匿名函数fn作为依赖收集到a自己的依赖函数收集空间中
// effect(() => {
//     b = a.value + 10;
//     console.log(b);
// })
// // 3，a执行set操作，遍历执行之前a收集的所有依赖函数fn
// a.value = 20;

//-------------------------------- 把b换成view ----------------------------------
// const a = ref(10);
// window.a = a;
// const view = () => {
//     // vue 最核心的点 update
//     document.querySelector("#app").textContent = '';
//     const div = document.createElement("div")
//     div.textContent = "heihei mini-vue -> " + a.value;
//     document.querySelector("#app").append(div);
// }

// effect(() => {
//     view();
// })

// ------------------------------- 换成组件APP的更新 ----------------------------
// const App = {
//     // template -> render
//     render(context) {
//         effect(() => {
//             // 1.性能问题 -> diff
//             // 2.公共流程 -> 抽离出去
//             document.querySelector("#app").textContent = '';
//             const div = document.createElement("div");
//             div.textContent = "heihei mini-vue -> " + context.a.value;
//             const p = document.createElement("p");
//             p.textContent = "ppp";
//             div.append(p);
//             document.querySelector("#app").append(div);
//         })
//     },
//     setup() {
//         const a = ref(10);
//         window.a = a;
//         return {
//             a,
//         }
//     }
// }

// App.render(App.setup());

// ---------------------- 创建mini-vue3 抽离createApp方法-------------------------------
import { createApp } from "./core/index.js";
import { App } from "./App.js";

createApp(App).mount(document.querySelector("#app"));