import { onMounted, ref, shallowRef, } from "vue";

export function defineWorkContext(navigatorClassName: string) {
    const workContextRef = shallowRef();
    const navigatorElementList = ref<NodeListOf<HTMLElement> | []>([]);
    function update() {
        const el: HTMLElement = workContextRef.value?.$e ?? workContextRef.value;
        if (!el) {
            navigatorElementList.value = [];
            return [];
        }
        navigatorElementList.value = el.querySelectorAll(navigatorClassName);
    }
    onMounted(update);

    return {
        workContextRef,
        navigatorElementList,
        update,
    }
}

export type DefineContext = ReturnType<typeof defineWorkContext>;