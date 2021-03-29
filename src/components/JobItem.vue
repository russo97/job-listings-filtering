<template>
  <article class="joblist">
    <div class="joblist__container" :class="{ featured }">
      <img :src="companyLogo" class="joblist__logo" alt="company logo" />

      <div class="joblist__company">
        <div class="joblist__company__info">
          <b class="joblist__company__info__name">{{ company }}</b>
          <div class="joblist__company__info__new" v-if="isNew">NEW!</div>
          <div class="joblist__company__info__featured" v-if="featured">FEATURED</div>
        </div>

        <h3 class="joblist__company__position">{{ position }}</h3>

        <p class="joblist__company__details">
          {{ details }}
        </p>
      </div>

      <div class="joblist__divider"></div>

      <div class="joblist__skills">
        <a
          href="#"
          :key="require"
          class="joblist__skills__skill"
          @click.prevent="includeFilter(require)"
          :class="{ active: filterAlreadyExists(require) }"
          v-for="require in requires">
          {{ require }}
        </a>
      </div>
    </div>
  </article>
</template>

<script>
  import methods from "@utils/methods";
  import getters from "@utils/getters";

  export default {
    name: "JobItem",

    props: {
      isNew: {
        type: Boolean,
        required: true
      },

      logo: {
        type: String,
        require: true
      },

      role: {
        type: String,
        required: true
      },

      level: {
        type: String,
        required: true
      },

      tools: {
        type: Array,
        required: true
      },

      company: {
        type: String,
        required: true
      },

      postedAt: {
        type: String,
        required: true
      },

      featured: {
        type: Boolean,
        required: true
      },

      contract: {
        type: String,
        required: true
      },

      location: {
        type: String,
        required: true
      },

      position: {
        type: String,
        required: true
      },

      languages: {
        type: Array,
        required: true
      }
    },

    methods: {
      ...methods,

      includeFilter (filter) {
        const { addFilter, filterAlreadyExists } = this;

        if ( !filterAlreadyExists(filter) ) {
          addFilter(filter);
        }
      },

      filterAlreadyExists (filter) {
        return this.filters.indexOf(filter) > -1;
      }
    },

    computed: {
      ...getters,

      companyLogo () {
        return require(`@/assets/images/${this.logo}`);
      },

      details () {
        const { postedAt, contract, location } = this;

        return [postedAt, contract, location].join(' • ');
      },

      requires () {
        const { role, level, languages } = this;

        return languages.concat(role, level);
      }
    }
  }
</script>

<style lang="scss">
  .joblist {
    width: 90%;
    margin-bottom: 2.1875rem;

    &__container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      padding: 0 1.25rem;
      position: relative;
      border-radius: .3125rem;
      background-color: $white;
      box-shadow: 0 .625rem 1.875rem -.9375rem $darkGrayishCyan;

      &.featured {
        border-left: .3125rem solid $headerBG;
      }

      @include breakpoint-up (desktop) {
        align-items: center;
        flex-direction: row;
        padding: 1.875rem 1.25rem;
      }
    }

    &__logo {
      top: -1.5rem;
      width: 3rem;
      height: 3rem;
      position: absolute;

      @include breakpoint-up (desktop) {
        top: unset;
        width: 5.625rem;
        height: 5.625rem;
        position: relative;
      }
    }

    &__company {
      flex: 2 100%;
      display: flex;
      position: relative;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      margin-top: 2.1875rem;

      @include breakpoint-up (desktop) {
        margin-top: 0rem;
        margin-left: 1.7rem;
        justify-content: space-around;
      }

      &__info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: $spartanFamily;

        &__name {
          font-size: .8125rem;
          margin-right: 1.25rem;
          color: hsl(180, 29%, 50%);
        }

        &__new,
        &__featured {
          color: $white;
          font-weight: 700;
          font-size: .625rem;
          border-radius: 1.5625rem;
        }

        &__new {
          margin-right: .3125rem;
          background-color: $headerBG;
          padding: .375rem .4375rem .25rem;
        }

        &__featured {
          padding: .375rem .4375rem .3125rem;
          background-color: $veryDarkGrayishCyan;
        }
      }

      &__position {
        font-size: 1rem;
        margin-top: .875rem;
        color: $veryDarkGrayishCyan;
        font-family: $spartanFamily;
        transition: color .2s ease-in-out;

        &:hover {
          color: $headerBG;
        }
      }

      &__details {
        font-size: .75rem;
        margin-top: .875rem;
        color: $darkGrayishCyan;
        font-family: $spartanFamily;
      }
    }

    &__divider {
      width: 100%;
      height: .0625rem;
      margin: .625rem 0;
      background-color: $lightGrayishCyan2;

      @include breakpoint-up (desktop) {
        display: none;
      }
    }

    &__skills {
      flex: 3 100%;
      display: flex;
      align-items: center;
      flex-flow: row wrap;
      justify-content: flex-start;
      margin-bottom: .9375rem;

      @include breakpoint-up (desktop) {
        margin-bottom: 0rem;
        align-items: center;
        justify-content: flex-end;
      }

      &__skill {
        padding: .5rem;
        color: $headerBG;
        font-weight: 700;
        font-size: .75rem;
        border-radius: .25rem;
        margin: 0 1rem .5rem 0;
        font-family: $spartanFamily;
        transition: all .2s ease-in-out;
        background-color: $lightGrayishCyan2;

        &:hover,
        &.active {
          color: $white;
          background-color: $headerBG;
        }
      }
    }
  }
</style>