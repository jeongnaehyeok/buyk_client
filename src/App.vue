<template>
  <div id="app">
    <div class="app-top-contain">
      <router-view name='header' />
      <router-view />
    </div>
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
