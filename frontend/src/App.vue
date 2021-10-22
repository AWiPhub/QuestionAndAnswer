<template>
  <a-layout>
    <a-layout-header :style="{ height: '10vh' }">
      <Header />
    </a-layout-header>
    <a-layout-content :style="{ minHeight: '85vh', background: '#fff' }">
      <router-view />
    </a-layout-content>
    <a-layout-footer :style="{ height: '5vh' }">
      <Footer />
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Footer,
  },
});
</script>

<style></style>
