## 电梯导航
### 提供快速实现电梯导航hooks、vue3 demo组件、开箱即用

### hooks
```ts
function defineWorkContext(navigatorClassName: string);
function createIntersectionObserver(target: Element, callback: (enter: IntersectionObserverEntry) => void, options: IntersectionObserverInit = {});
function defineNavigation(
    workContextRef: DefineContext['navigatorElementList'],
    scrollIntoViewOptions?: ScrollIntoViewOptions,
    intersectionObserverInitOptions?: ObserverInit,
    navigatorOptions?: NavigatorOptions,
);

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
         <div class="work_context">
            <div class="navigation-group" navigator-name="大黄蜂系列">
                <h1>h1 大黄蜂系列</h1>
                <p v-for="(_, key) in 10" :key>大黄蜂号飞机饿哦附件一{{ key }}</p>
            </div>
            <!-- ············ -->
            <div class="navigation-group" navigator-name="哥斯拉系列">
                <h1>h1 哥斯拉系列</h1>
                <p v-for="(_, key) in 20" :key>哥斯拉饿哦附件一{{ key }}</p>

            </div>
            <div class="navigation-group" navigator-name="金刚系列">
                <h1>h1 金刚系列</h1>
                <p v-for="(_, key) in 30" :key>金刚饿哦附件一{{ key }}</p>
            </div>
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
import { ElevatorNavigation, hooks } from 'elevator-navigation';
import 'elevator-navigation/dist/style.css';
const { defineWorkContext, defineNavigation } = hooks;

const { workContextRef, navigatorElementList } = defineWorkContext("navigation-group");
const { navigatorList } = defineNavigation(navigatorElementList);

</script>
```