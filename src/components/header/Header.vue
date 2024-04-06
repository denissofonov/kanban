<template>
  <div class="header">
    <common-wrapper>
        <div class="header_content">
          <span class="header_content_title">
            Канбан
          </span>
          <div class="header_content_links">
            <button @click="router.push('/board')">Доска</button>
          </div>
        </div>
    </common-wrapper>
  </div>
</template>

<script lang="ts" setup>
import CommonWrapper from "../common/CommonWrapper.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style lang="sass" scoped>
.header
  position: fixed
  width: 100%
  top: 0
  left: 0
  padding: 10px 0
  background-color: #333
  z-index: 99999

  &_content
    display: flex
    justify-content: space-between
    align-items: center
</style>
