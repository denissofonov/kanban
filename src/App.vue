<template>
  <div class="app">
    <Header/>
    <CommonWrapper>
      <router-view class="app_content"/>
    </CommonWrapper>
    <transition name="slide-right">
      <SideTask v-if="tasksStore.currentSideTask"/>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import Header from "./components/header/Header.vue"
import CommonWrapper from "./components/common/CommonWrapper.vue"
import SideTask from "./components/task/SideTask.vue"
import {useTasksStore} from "./store/tasks.ts"

const tasksStore = useTasksStore()
</script>

<style scoped lang="sass">
.app
  min-height: 90vh
  width: 100vw

  &_content
    margin: 80px 10px 40px

.slide-right-enter-active, .slide-right-leave-active
  transition: opacity 0.3s ease, transform 0.3s ease

.slide-right-enter-from, .slide-right-leave-to
  opacity: 0
  transform: translateX(100%)
  transition: opacity 0.3s ease, transform 0.3s ease
</style>
