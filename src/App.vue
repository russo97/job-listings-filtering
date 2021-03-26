<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
  import methods from "@utils/methods";

  import Header from "@components/Header.vue";

  export default {
    name: 'App',

    created () {
      const { loadData } = this;

      loadData();
    },

    methods: {
      ...methods
    },

    components: {
      Header
    }
  }
</script>

<style lang="scss">
</style>
