<script >
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppMain
  },
  data() {
    return {
      message: 'Ciao mondo'
    }
  }
}
</script>

<template>
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <div>
      <RouterLink to="/">Go to Home</RouterLink>

    </div>
    <div>

      <RouterLink to="/portfolio">Go to Portfolio</RouterLink>
    </div>
    <div>
      <RouterLink to="/contact">Go to contact</RouterLink>

    </div>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style>

</style>
