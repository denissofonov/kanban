<template>
  <div class="column_wrapper">
    <div class="column_wrapper_header">
      <span class="column_wrapper_header_name">{{ column.name }}</span>
      <el-popover popper-class="test">
        <template #reference>
          <div class="column_wrapper_header_dots">
            <div
                v-for="dot in 3"
                :key="dot"
                class="column_wrapper_header_dots_dot"
            />
          </div>
        </template>
        <div class="column_wrapper_popover">
          <div class="column_wrapper_popover_link">
            <CommonButton font-size="14px">Редактировать</CommonButton>
          </div>
          <div class="column_wrapper_popover_link">
            <CommonButton font-size="14px">Удалить</CommonButton>
          </div>
        </div>
      </el-popover>
    </div>
    <draggable
        class="column_wrapper_column"
        :list="tasks"
        group="tasks"
        :itemKey="column.name"
        @change="draggableHandler"
    >
      <template #item="{ element }">
        <Task
            :task="element"
            :statusColor="column.statusColor"
            :statusIcon="column.statusIcon"
        />
      </template>
    </draggable>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, PropType } from 'vue'
import { useTasksStore } from "../../store/tasks"
import { getSortedTasksByStatus } from "../../helpers"
import draggable from 'vuedraggable'
import Task from "../task/Task.vue"
import { IColumn } from "../../types/column"
import { ITask } from "../../types/task";
import {useColumnsStore} from "../../store/columns"
import CommonButton from "../common/CommonButton.vue";

const props = defineProps({
  column: {
    type: Object as PropType<IColumn>,
    required: true
  }
})

const tasksStore = useTasksStore()
const columnsStore = useColumnsStore()

const tasks = computed(() => {
  return tasksStore.formattedTasks?.find(i => i.status === props.column?.name)?.tasks || []
})

const draggableHandler = (event: any) => {
  if ('added' in event) {
    const task = event.added.element as ITask
    const updateDate = new Date().toISOString()
    task.updatedStatusAt = updateDate
    task.updatedAt = updateDate
  }
  tasksStore.tasks = tasksStore.formattedTasks?.reduce((acc, item) => {
    return acc.concat(item.tasks.map((task: ITask) => ({ ...task, status: item.status })))
  }, [])
}

onMounted(() => {
  tasksStore.formattedTasks = getSortedTasksByStatus(tasksStore.tasks, columnsStore.columns)
})
</script>

<style lang="sass" scoped>
.column_wrapper
  border-radius: 10px
  border: 1px solid #4C4D4F
  padding: 8px 12px
  width: 260px

  &_header
    display: flex
    justify-content: space-between
    align-items: center

    &_dots
      display: flex
      align-items: center
      justify-content: center
      column-gap: 2px
      cursor: pointer

      &_dot
        border-radius: 50%
        height: 4px
        width: 4px
        background-color: #CFD3DC

  &_popover
    background-color: #1d1e1f
    border-radius: 8px
    display: flex
    flex-direction: column
    row-gap: 8px

  &_column
    padding: 16px 4px
    display: flex
    flex-direction: column
    row-gap: 10px

.test
  padding: 0
</style>
