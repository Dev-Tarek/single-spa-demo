<template>
  <div class="bg-orange text-white">
    <h4>{{ title }}</h4>
    <p>
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => "",
    },
  },
};
</script>
