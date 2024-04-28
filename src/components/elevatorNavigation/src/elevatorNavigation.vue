<template>
  <div class="elevator_navigation">
    <div class="work_context" ref="workContextRef">
      <WorkContext></WorkContext>
    </div>

    <div class="navigation-container">
      <div class="navigation">
        <p v-for="(el, key) in navigatorList" :key v-bind="el.bind.value">{{ el.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WorkContext from './modules/workContext.vue';
import { defineWorkContext, defineNavigation } from '@/hooks';
import { elevatorNavigationProps } from './elevatorNavigation';

const props = defineProps(elevatorNavigationProps);
const { workContextRef, navigatorElementList } = defineWorkContext(props.navigatorClassName);
const { navigatorList } = defineNavigation(navigatorElementList);


</script>
<style lang="scss" scoped>
@import url('../style/index.scss');
</style>