import { effect } from "./index.js"

export function createApp(rootComponent){
    return {
        mount(rootContainer) {
            const context = rootComponent.setup();

            effect(() => {
                // reset
                rootContainer.textContent = '';
                const element = rootComponent.render(context);
                rootContainer.append(element)
            })
        }
    }
}