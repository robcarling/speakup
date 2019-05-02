<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav right">
        <li class="nav-item">
          <router-link :to="{ name: 'AllComments' }" class="nav-link"
            >All Comments</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'AddComment' }" class="nav-link"
            >Add Comment</router-link
          >
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <div class="gap container">
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.gap {
  margin-top: 50px;
}
</style>
