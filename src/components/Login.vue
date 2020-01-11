<template>
  <div>
    <h2>Вход</h2>
    <p v-if="$route.query.redirect">
     Сначала зарегистрируйтесь!
    </p>
    <form @submit.prevent="login">
      <label><input v-model="text" placeholder="test"></label>
      <button type="submit">test</button>
      <p v-if="error" class="error">Введите слово "test"!!</p>
    </form>
  </div>
</template>

<script>
import auth from '../auth'

export default {
  data () {
    return {
      text: '',
      error: false
    }
  },
  methods: {
    login () {
      auth.login(this.text, loggedIn => {
        if (!loggedIn) {
          this.error = true
          this.text = ''
        } else {
          this.$router.replace(this.$route.query.redirect || '/main')
        }
      })
    }
  }
}
</script>

<style>
.error {
  color: red;
}
</style>
