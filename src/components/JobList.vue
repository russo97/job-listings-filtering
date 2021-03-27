<template>
  <main class="main">
    <div class="main__container container" :style="translate">
      main container
    </div>
  </main>
</template>

<script>
  import methods from "@utils/methods";
  import getters from "@utils/getters";

  export default {
    name: "JobList",

    methods: {
      ...methods
    },

    computed: {
      ...getters,

      translate () {
        return {
          'transform': `translateY(${this.filterHeight})`
        }
      }
    }
  }
</script>

<style lang="scss">
  .main {
    position: relative;

    &__container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      padding: 10px 0;
      background-color: red;
      transition: all .4s ease-in-out;
    }
  }
</style>