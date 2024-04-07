<template>
  <div
      class="common-tag"
      :style="{ '--background-color': getBackgroundColor() }"
  >
    <span>{{ tag }}</span>
  </div>
</template>

<script lang="ts" setup>
import { useCommonStore } from "../../store/common"
import { ITag } from "../../types"

const props = defineProps({
  tag: {
    type: String,
    required: true
  }
})

const commonStore = useCommonStore()

const getBackgroundColor = () => {
  return commonStore.tags.find((tag: ITag) => tag.name === props.tag).color
}
</script>

<style lang="sass" scoped>
.common-tag
  padding: 4px 8px
  font-size: 12px
  background-color: var(--background-color)
  width: fit-content
  border-radius: 20px
</style>
