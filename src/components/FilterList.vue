<template>
  <div class="filter">
    <div class="filter__container">
      <transition-group tag="div" name="fade" class="filter__pills">
        <filter-pill
          :key="filter"
          :label="filter"
          v-for="filter in filters" />
      </transition-group>
      <a href="#" class="filter__clear" title="Clear all filters" @click="clearFilters">
        Clear
      </a>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import methods from "@utils/methods";

  import FilterPill from "./FilterPill.vue";

  export default {
    name: "FilterList",

    methods: {
      ...methods,

      clearFilters ($event) {
        $event.preventDefault();

        this.removeAllFilters();
      }
    },

    computed: {
      ...mapState([
        'filters'
      ])
    },

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

      & .fade-enter,
      & .fade-leave-to {
        opacity: 0;
      }

      & .fade-enter {
        transform: translateY(50px);
      }

      & .fade-leave-to {
        transform: scale(0);
      }

      & .fade-leave-active {
        position: absolute;
      }
    }

    &__clear {
      font-size: .75rem;
      color: $darkGrayishCyan;

      &:visited {
        color: $darkGrayishCyan;
      }

      &:hover {
        color: $headerBG;
        border-bottom: .0625rem dotted $headerBG;
      }
    }
  }
</style>