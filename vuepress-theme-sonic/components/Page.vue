<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <SideNav
      key="sidebar-new"
      :fixed="true"
      :items="sidebarItems"
    />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import SideNav from '@theme/components/SideNav.vue'

export default {
  components: { PageEdit, PageNav, SideNav },
  props: ['sidebarItems'],
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

  .theme-default-content
    p
      text-align justify
</style>
