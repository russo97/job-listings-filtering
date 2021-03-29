<template>
  <div class="pill">
    <div class="pill__container">
      <div class="pill__label"> {{ label }} </div>
      <div class="pill__close" @click="removeFilter(label)">
        &#10006;
      </div>
    </div>
  </div>
</template>

<script>
  import methods from "@utils/methods";

  export default {
    name: "FilterPill",

    methods: methods,

    props: {
      label: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .pill {
    margin: .3125rem;
    overflow: hidden;
    border-radius: .25rem;
    display: inline-block;
    transition: all .4s ease-in-out;

    &__container {
      display: flex;
      align-items: center;
    }

    &__label,
    &__close {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0 .5rem;
      height: 1.6875rem;
    }    

    &__label {
      flex: 1 100%;
      color: $headerBG;
      font-weight: 700;
      font-size: .75rem;
      background-color: $lightGrayishCyan;
    }

    &__close {
      color: $white;
      cursor: pointer;
      padding-bottom: .125rem;
      background-color: $headerBG;
      transition: background-color .1s ease-in-out;

      &:hover {
        background-color: $veryDarkGrayishCyan;
      }
    }
  }
</style>