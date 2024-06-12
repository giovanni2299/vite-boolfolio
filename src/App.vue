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
<h1>{{ message  }}</h1>
<AppMain />
</template>

<style>

</style>
