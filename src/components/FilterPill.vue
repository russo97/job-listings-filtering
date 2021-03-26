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
    }    

    &__label {
      color: $headerBG;
      font-weight: 700;
      font-size: .75rem;
      padding: .25rem .375rem;
    }

    &__close {
      color: $white;
      cursor: pointer;
      padding: .1875rem .5rem;
      background-color: $headerBG;
      transition: background-color .1s ease-in-out;

      &:hover {
        background-color: $veryDarkGrayishCyan;
      }
    }
  }
</style>