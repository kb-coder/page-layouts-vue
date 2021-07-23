<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/second-layout">Shout Out</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
ul, li {
  list-style: none;
}
</style>
