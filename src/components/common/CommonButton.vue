<template>
  <button
      class="common-button"
      :style="{
        '--text-color': textColor,
        '--font-size': fontSize,
      }"
  >
    <slot/>
  </button>
</template>

<script lang="ts" setup>
defineProps({
  textColor: {
    type: String,
    default: '#ffffffdd'
  },
  fontSize: {
    type: String,
    default: '14'
  },
})
</script>

<style lang="sass" scoped>
.common-button
  padding: 0
  border: none
  font: inherit
  background-color: transparent
  transition: all 0.3s
  outline: none
  color: var(--text-color)
  font-size: var(--font-size)

  &:hover
    color: #409eff
</style>
