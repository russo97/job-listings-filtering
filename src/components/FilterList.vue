<template>
  <div class="filter">
    <div class="filter__container">
      <div class="filter__pills">
        <filter-pill
          :key="l"
          :label="l"
          v-for="l in ['Frontend', 'CSS', 'JavaScript']" />
      </div>
      <a href="#" class="filter__clear">
        Clear
      </a>
    </div>
  </div>
</template>

<script>
  import FilterPill from "./FilterPill.vue";

  export default {
    name: "FilterList",

    components: {
      FilterPill
    }
  }
</script>

<style lang="scss">
  .filter {
    width: 90%;
    margin: 0 auto;
    transform: translateY(calc(100% - 2.1875rem));

    &__container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      background: $white;
      align-items: center;
      border-radius: .3125rem;
      padding: 1rem 1.5625rem;
      font-family: $spartanFamily;
    }

    &__pills {
      display: flex;
      flex-flow: row wrap;
    }

    &__clear {
      color: $headerBG;
      font-size: .75rem;
      color: $veryDarkGrayishCyan;

      &:visited {
        color: $headerBG;
      }

      &:hover {
        border-bottom: .0625rem dotted $headerBG;
      }
    }
  }
</style>