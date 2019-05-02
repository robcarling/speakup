<template>
  <div id="app">
    <app-header></app-header>

    <transition name="fade">
      <div class="gap container">
        <router-view></router-view>
      </div>
    </transition>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
   'app-header': AppHeader,
   'app-footer': AppFooter
  }
};
</script>
