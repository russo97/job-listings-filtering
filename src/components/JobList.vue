<template>
  <main class="main">
    <transition-group tag="div" name="fade" mode="in-out" class="main__container container" :style="translate">
      <JobItem
        :key="id"
        :isNew="isNew"
        :logo="logo"
        :role="role"
        :level="level"
        :tools="tools"
        :company="company"
        :postedAt="postedAt"
        :location="location"
        :contract="contract"
        :featured="featured"
        :position="position"
        :languages="languages"
        v-for="({
          id,
          new: isNew,
          logo,
          role,
          level,
          tools,
          company,
          postedAt,
          featured,
          contract,
          location,
          position,
          languages
        }) in filteredJobList"
      />
    </transition-group>
  </main>
</template>

<script>
  import methods from "@utils/methods";
  import getters from "@utils/getters";

  import { mapState } from "vuex";

  import JobItem from "./JobItem";

  export default {
    name: "JobList",

    methods: {
      ...methods,
    },

    computed: {
      ...getters,

      ...mapState(["jobList"]),

      translate() {
        return {
          transform: `translateY(${this.filterHeight})`
        };
      },

      filteredJobList () {
        const { filterExist, jobList, filters } = this;

        return filterExist
          ? jobList.filter(job => {
            const { role, level, languages } = job;

            return filters.every( filter => [role, level, ...languages].includes(filter) );
          })
          : jobList;
      }
    },

    components: {
      JobItem,
    },
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

      padding: .625rem 0;
      margin-top: 1.5rem;
      transform: translateY(1.625rem);
      transition: all 0.4s ease-in-out;

      & .fade-enter,
      & .fade-leave-to {
        opacity: 0;
      }

      & .fade-enter {
        transform: translateY(30%);
      }

      & .fade-leave-to {
        transform: translateY(30%);
      }

      & .fade-enter-active,
      & .fade-leave-active {
        transition: all .4s;
      }

      & .fade-move {
        transition: all .4s;
      }
    }
  }
</style>