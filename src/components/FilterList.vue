<template>
  <div class="filter" :class="{ hide: !filterExist }" ref="filt">
    <div class="filter__container">
      <transition-group tag="div" name="fade" mode="out-in" class="filter__pills">
        <filter-pill
          :key="filter"
          :label="filter"
          v-for="filter in filters" />
      </transition-group>
      <a href="#" class="filter__clear" title="Clear all filters" @click.prevent="removeAllFilters">
        Clear
      </a>
    </div>
  </div>
</template>

<script>
  import methods from "@utils/methods";
  import getters from "@utils/getters";

  import FilterPill from "./FilterPill.vue";

  export default {
    name: "FilterList",

    methods: {
      ...methods,

      changeHeight () {
        setTimeout(() => {
          const { changeFilterHeight } = this;

          changeFilterHeight(this.$refs.filt.clientHeight);
        }, 500);
      }
    },

    computed: {
      ...getters
    },

    components: {
      FilterPill
    },

    mounted () {
      this.changeHeight();

      window.onresize = this.changeHeight;
    },

    watch: {
      filtersCount () {
        this.changeHeight();
      }
    }
  }
</script>

<style lang="scss">
  .filter {
    z-index: 2;
    width: 90%;
    margin: 0 auto;
    transition: all .4s ease-in-out;
    transform: translateY(calc(100% - 2.1875rem));

    &.hide {
      opacity: 0;
      visibility: hidden;
      transition-delay: .4s;
      transform: translateY(-3.125rem);
    }

    &__container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      background: $white;
      align-items: center;
      border-radius: .3125rem;
      padding: 1rem 1.5625rem;
      font-family: $spartanFamily;
      box-shadow: 0 .625rem 31.8750rem -.9375rem $darkGrayishCyan;
    }

    &__pills {
      display: flex;
      flex-flow: row wrap;

      & .fade-enter,
      & .fade-leave-to {
        opacity: 0;
        transform: scale(0);
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