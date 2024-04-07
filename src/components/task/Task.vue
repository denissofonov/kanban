<template>
  <div class="task" @click.stop="taskClick">
    <div class="task_title">{{ task.name }}</div>
    <div class="task_content">
      <div class="task_content_description">{{ task.description }}</div>
      <div
          class="task_content_status"
          :style="{ '--status-color': statusColor }"
      >
        <Icon/>
        <span>{{ `${ task.status } ${ formatTimeDifferenceFromNow(task.updatedStatusAt || task.createdAt) }` }}</span>
      </div>
      <div
          v-if="task.tags.length"
          class="task_content_tags"
      >
        <span>Тэги:</span>
        <CommonTag
            v-for="tag in task.tags"
            :key="tag"
            :tag="tag"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, PropType } from "vue"
import { ITask } from "../../types/task"
import { formatTimeDifferenceFromNow } from "../../helpers/date"
import CommonTag from "../common/CommonTag.vue"
import { useTasksStore } from "../../store/tasks"

const props = defineProps({
  task: {
    type: Object as PropType<ITask>,
    required: true,
  },
  statusColor: {
    type: String,
    required: true,
  },
  statusIcon: {
    type: String,
    required: true,
  }
})

const Icon = defineAsyncComponent(() => import('../../assets/icons/' + props.statusIcon + '.svg'))

const tasksStore = useTasksStore()

const taskClick = () => {
  tasksStore.currentSideTask = props.task
  console.log(props.task)
}
</script>

<style lang="sass" scoped>
.task
  background-color: #1d1e1f
  border: 1px solid #414243
  border-radius: 10px
  padding: 12px 16px
  cursor: pointer
  transition: all 0.3s

  &_title
    font-size: 14px

  &_content
    display: flex
    flex-direction: column
    row-gap: 12px

    &_description
      font-size: 12px

    &_status
      font-size: 12px
      background-color: var(--status-color)
      width: fit-content
      padding: 2px 6px
      border-radius: 10px
      display: flex
      justify-content: center
      align-items: center
      column-gap: 4px

    &_tags
      display: flex
      justify-content: center
      align-items: center
      width: fit-content
      font-size: 12px
      column-gap: 8px

.task:hover
  transform: scale(1.06)
</style>
