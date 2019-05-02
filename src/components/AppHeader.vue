<template>
  <nav class="navbar navbar-expand-sm bg-light">
    <div class="navbar-brand"><router-link :to="{ name: 'AllComments' }"><img src="../assets/img/logo.png" class="logo" alt="SpeakUP!" /></router-link></div>
    <ul class="navbar-nav right">
      <li class="nav-item">
        <router-link :to="{ name: 'AllComments' }" class="nav-link">All Comments</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'AddComment' }" class="nav-link">Add a Comment</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  
}
</script>

