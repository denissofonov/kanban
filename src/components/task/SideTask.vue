<template>
  <div class="side-task" v-if="tasksStore.currentSideTask">
    <div class="side-task_dates">
      <span>{{ dates }}</span>
    </div>
    <div class="side-task_title">{{ tasksStore.currentSideTask.name }}</div>
    <div class="side-task_description">{{ tasksStore.currentSideTask.description }}</div>
    <div class="side-task_options">
      <span class="side-task_options_title">
        Параметры
      </span>
      <div class="side-task_options_option">
        <span>Статус:</span>
        <span>{{ tasksStore.currentSideTask.status }}</span>
      </div>
      <div class="side-task_options_option">
        <span>Дедлайн:</span>
          <span>{{ tasksStore.currentSideTask.deadline ? formatDateFromISO(tasksStore.currentSideTask.deadline) : 'Бессрочно'}}</span>
      </div>
      <div class="side-task_options_option">
        <span>Тэги:</span>
        <template v-if="tasksStore.currentSideTask.tags.length">
          <CommonTag v-for="tag in tasksStore.currentSideTask.tags" :tag="tag"/>
        </template>
        <template v-else>
          Отсутствуют
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTasksStore } from "../../store/tasks"
import {formatDateFromISO} from "../../helpers/date"
import {computed} from "vue"
import CommonTag from "../common/CommonTag.vue";

const tasksStore = useTasksStore()

const dates = computed(() => {
  const { createdAt, updatedAt } = tasksStore.currentSideTask
  return `Создано ${ formatDateFromISO(createdAt) } ${ updatedAt ? `Обновлено ${formatDateFromISO(updatedAt)}` : '' }`
});
</script>

<style lang="sass" scoped>
.side-task
  position: absolute
  width: 500px
  right: 20px
  top: 100px
  background-color: #1d1e1f
  border: 1px solid #414243
  height: 80vh
  padding: 12px
  border-radius: 12px
  display: flex
  flex-direction: column
  row-gap: 12px

  &_dates
    font-size: 14px

  &_title
    font-size: 24px
    font-weight: 600

  &_options
    display: flex
    flex-direction: column
    row-gap: 12px
    border-top: 1px solid #979797
    padding: 12px

    &_title
      font-size: 20px
      font-weight: 500

    &_option
      display: flex
      column-gap: 8px

</style>
