<template>
  <main class="main">
    <div class="main__container container" :style="translate">
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
        }) in jobList"
      />
    </div>
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
      transition: all 0.4s ease-in-out;
    }
  }
</style>