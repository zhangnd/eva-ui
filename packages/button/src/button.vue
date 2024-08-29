<template>
  <button class="el-button">
    <span><slot v-if="$slots.default" /></span>
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  methods: {

  }
};
</script>
