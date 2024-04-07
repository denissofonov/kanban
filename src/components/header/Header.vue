<template>
  <div class="header">
    <common-wrapper>
        <div class="header_content">
          <span class="header_content_title">
            Канбан
          </span>
          <div class="header_content_links">
            <div
                v-for="link in links"
                :key="link.url"
                @click="router.push('/' + link.url)"
                class="header_content_links_link"
            >
              {{ link.text }}
            </div>
          </div>
        </div>
    </common-wrapper>
  </div>
</template>

<script lang="ts" setup>
import CommonWrapper from '../common/CommonWrapper.vue'
import { useRoute, useRouter } from 'vue-router'

interface ILink {
  url: string,
  text: string,
}

const router = useRouter()
const route = useRoute()

const links: ILink[] = [
  { url: '', text: 'Главная' },
  { url: 'board', text: 'Доска' },
]
</script>

<style lang="sass" scoped>
.header
  position: fixed
  width: 100%
  top: 0
  left: 0
  padding: 20px 0
  border-bottom: 1px solid #4C4D4F
  z-index: 99999

  &_content
    display: flex
    justify-content: space-between
    align-items: center

    &_links
      display: flex
      column-gap: 12px

      &_link
        cursor: pointer
        font-size: 16px
        transition: all 0.3s

        &:hover
          color: #409eff
</style>
