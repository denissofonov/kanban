<template>
  <div class="column_wrapper">
    <div>{{ column.name }}</div>
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
  border: 1px solid dimgrey
  padding: 10px
  width: 260px

  &_column
    padding: 10px
    display: flex
    flex-direction: column
    row-gap: 10px
    height: 90%
</style>
