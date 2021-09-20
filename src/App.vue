<template>
  <el-menu mode="horizontal" :router="true" :default-active="activeIndex">
    <el-menu-item index="/">
      Home
    </el-menu-item>
    <el-menu-item index="/about">
      About
    </el-menu-item>
    <el-menu-item index="/test">
      Test form
    </el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, inject } from 'vue';

export default defineComponent({
  name: 'App',
  setup () {
    const activeIndex = ref('/');

    const http: any = inject('http') // inject apiClient

    onMounted(async () => {
      const result = await http.get('//users');
      console.log(result);
    });

    return {
      activeIndex,
    }
  },
});

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
