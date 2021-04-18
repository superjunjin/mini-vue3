import { ref } from "./core/index.js";

export const App = {
    render(context) {
        const div = document.createElement("div");
        div.textContent = "hei hei mini-vue  -> " + context.a.value;
        const p = document.createElement("p");
        p.textContent = "ppp";
        div.append(p);
        return div;
    },
    setup() {
        const a = ref(10);
        window.a = a;
        return {
            a,
        }
    }
}