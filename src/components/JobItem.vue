<template>
  <article class="joblist">
    <div class="joblist__container">
      joblist
    </div>
  </article>
</template>

<script>
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

      languages: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .joblist {
    width: 90%;
    margin-bottom: 20px;

    &__container {
      background: red;
    }
  }
</style>