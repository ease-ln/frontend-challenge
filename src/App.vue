<template>
  <div>
    <TheHeader></TheHeader>
  <router-view/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'

export default {
  name: 'Main',
  components: {
    TheHeader
  },
}
</script>
