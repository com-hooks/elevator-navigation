## 电梯导航
### 提供快速实现电梯导航hooks、vue3 demo组件、开箱即用

### hooks
```ts
type DefineContext = {
    workContextRef: ShallowRef<any>;
    navigatorElementList: Ref<[] | {
        [x: number]: HTMLElement;
        item: (index: number) => HTMLElement;
        forEach: (callbackfn: (value: HTMLElement, key: number, parent: NodeListOf<HTMLElement>) => void, thisArg?: any) => void;
    }>;
    update: () => never[] | undefined;
}
function defineWorkContext(navigatorClassName: string): DefineContext;

type CreateIntersectionObserver = {
    observer: IntersectionObserver;
}
function createIntersectionObserver(target: Element, callback: (enter: IntersectionObserverEntry) => void, options: IntersectionObserverInit = {}): CreateIntersectionObserver;

type DefineNavigation = {
    navigatorList: ShallowRef<{
        text: string;
        bind: ComputedRef;
    }[]>;
    stopWatch: WatchStopHandle;
    updateIndex: (index: number) => void;
}
function defineNavigation(
    workContextRef: DefineContext['navigatorElementList'],
    scrollIntoViewOptions?: ScrollIntoViewOptions,
    intersectionObserverInitOptions?: ObserverInit,
    navigatorOptions?: NavigatorOptions,
): DefineNavigation;

```

### 内置组件 demo 使用

```vue
<template>
    <ElevatorNavigation></ElevatorNavigation>
</template>

<script setup lang="ts">
import { ElevatorNavigation } from 'elevator-navigation';
import 'elevator-navigation/dist/style.css';
</script>
```
## 使用hooks定制电梯导航
### 参考ElevatorNavigation 组件内部实现

```vue
<template>
  <div class="elevator_navigation">
    <div class="work_context" ref="workContextRef">
        <div v-for="(title, index) in group" class="navigation-group" :key="index" :navigator-name="title">
            <h1>{{ title }}</h1>
            <p v-for="(_, key) in 10 * (index + 1)" :key>大黄蜂号飞机饿哦附件一{{ key }}</p>
        </div>
    </div>
    <div class="navigation-container">
        <div class="navigation">
            <p v-for="(el, key) in navigatorList" :key v-bind="el.bind.value">{{ el.text }}</p>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { hooks } from 'elevator-navigation';
import 'elevator-navigation/dist/style.css';

const { defineWorkContext, defineNavigation } = hooks;
const { workContextRef, navigatorElementList } = defineWorkContext("navigation-group");
const { navigatorList } = defineNavigation(navigatorElementList);
const group = ref(['大黄蜂系列', '哥斯拉系列', '金刚系列', '封神榜', '坤坤', '打篮球', '唱跳rap']);

</script>
```