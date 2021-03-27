<template>
  <div id="app">
    <Header />

    <JobList />
  </div>
</template>

<script>
  import methods from "@utils/methods";

  import Header from "@components/Header.vue";
  import JobList from "@components/JobList.vue";

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
      Header,
      JobList
    }
  }
</script>

<style lang="scss">
</style>
