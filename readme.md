## effect
watch watchEffect computed，这些都是从effect来实现的，effect主要做依赖收集，和触发依赖。

## 一，响应式数据实例

1. 通过ref创建响应式数据

```
const a = ref(10);
```

2. 当a.value，执行了get方法，把effect内的匿名函数fn作为依赖收集到a自己的依赖函数收集空间中

```
let b;
effect(() => {
    b = a.value + 10;
    console.log(b);
})
```

3. a执行set操作，遍历执行之前a收集的所有依赖函数fn

```
a.value = 20;
```

## 二，把b换成视图，实现数据变化，视图同步变化
```
const a = ref(10);
window.a = a;
const view = () => {
    // vue 最核心的点 update
    document.querySelector("#app").textContent = '';
    const div = document.createElement("div")
    div.textContent = "heihei mini-vue -> " + a.value;
    document.querySelector("#app").append(div);
}

effect(() => {
    view();
})
```
此时在浏览器执行a.value++时，view的值也会相应变化

## 三，实现App组件的更新

产生两个问题

1. 性能问题（这里值变化时，整个的app的view都会一起替换成新的view，而不是只变化值变化的view）
解决：所以要考虑diff算法去解决

2. 公共流程 ——> 抽离出去

## 四，创建mini-vue3，抽离createApp方法
- createApp中有挂载方法mount。分别传入要挂载的组件，和挂载到的容器。
- App组件中主要是渲染方法render和设置相应数据方法setup
