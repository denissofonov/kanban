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
import { formatTimeDifferenceFromNow } from "../../helpers/date";
import CommonTag from "../common/CommonTag.vue";
import {useTasksStore} from "../../store/tasks.ts";

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
  background-color: #333
  border-radius: 10px
  padding: 12px 8px
  cursor: pointer

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
      padding: 2px 4px
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
  box-shadow: 0 0 8px #a5a5a5
</style>
