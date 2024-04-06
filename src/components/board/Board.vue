<template>
  <div class="board" @click="tasksStore.currentSideTask = null">
      <Column
          v-for="column in columnStore.columns"
          :key="column.id"
          :column="column"
      />
  </div>
</template>
<script lang="ts" setup>
import { useColumnsStore } from "../../store/columns"
import Column from "../column/Column.vue"
import {useTasksStore} from "../../store/tasks.ts"

const columnStore = useColumnsStore()
const tasksStore = useTasksStore()
</script>

<style lang="sass" scoped>
.board
  display: flex
  column-gap: 20px
  overflow-x: scroll
  min-height: 80vh
</style>
