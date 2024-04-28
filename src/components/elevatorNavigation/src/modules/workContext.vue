<template>
    <div class="work_context">
        <div v-for="(title, index) in group" class="navigation-group" :key="index" :navigator-name="title">
            <h1>{{ title }}</h1>
            <p v-for="(_, key) in 10 * (index + 1)" :key>大黄蜂号飞机饿哦附件一{{ key }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const group = ref(['大黄蜂系列', '哥斯拉系列', '金刚系列', '封神榜', '坤坤', '打篮球', '唱跳rap']);
</script>