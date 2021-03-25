<template>
  <header class="header">

  </header>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  .header {
    width: 100%;
    height: 155px;
    background-size: cover;
    background-color: $headerBG;
    background-repeat: no-repeat;
    background-image: url("../assets/images/bg-header-mobile.svg");

    @include breakpoint-up(desktop) {
      background-image: url("../assets/images/bg-header-desktop.svg");
    }
  }
</style>