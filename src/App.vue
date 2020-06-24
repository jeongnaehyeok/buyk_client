<template>
  <div id="app">
    <router-view name='header' />
    <router-view />
    <router-view name='footer' />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import '@/style/index.scss';
  @import '@/style/base.scss';
</style>
