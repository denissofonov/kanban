<template>
  <div class="header">
    <common-wrapper>
        <div class="header_content">
          <span class="header_content_title">
            Канбан
          </span>
          <div class="header_content_links">
            <button>Доска</button>
          </div>
        </div>
    </common-wrapper>
  </div>
</template>

<script lang="ts" setup>
import CommonWrapper from "../common/CommonWrapper.vue";
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 10px 0;
  background-color: #333;

  &_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
