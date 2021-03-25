<template>
  <header class="header">
    <div class="header__container container">
      <filter-list />
    </div>
  </header>
</template>

<script>
  import FilterList from "./FilterList.vue";

  export default {
    name: "Header",

    components: {
      FilterList
    }
  }
</script>

<style lang="scss">
  .header {
    position: relative;
    background-size: cover;
    background-color: $headerBG;
    background-repeat: no-repeat;
    background-image: url("../assets/images/bg-header-mobile.svg");

    @include breakpoint-up(desktop) {
      background-image: url("../assets/images/bg-header-desktop.svg");
    }

    &__container {
      width: 100%;
      height: 155px;

      display: flex;
      align-items: flex-end;
    }
  }
</style>