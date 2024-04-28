<template>
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
</template>

<script setup lang="ts">
</script>