<template>
  <div id="app">
    <h1>Сервис авторизации.</h1>
        <router-link v-if="loggedIn" to="/logout">Выйти</router-link>
    <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import auth from '../auth'

export default {
  data () {
    return {
      loggedIn: auth.loggedIn()
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  }
}
</script>
