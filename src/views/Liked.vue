<template>
  <div class="cards-container" >
    <div class="cards">
      <Card v-for="url in $store.getters.allImages" :key="url" :liked="true" :url="url" />
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  name: 'Liked',
  components: {
    Card
  }
  }
</script>

<style>
.cards-container {
  width: 1700px;
  margin: auto;
  display: flex;
  justify-content: center;
}
.cards {
  margin: 60px 42px;
}
@media only screen and (max-width: 1920px) {
.cards-container {
  width: 1440px;
  margin: auto;
  display: flex;
  justify-content: center;
}
}
@media only screen and (max-width: 1366px) {
  .cards-container {
  width: 905px;
  margin: auto;
  display: flex;
  justify-content: center;
  }

}
@media only screen and (max-width: 834px) {
.cards-container {
  width: 634px;
  margin: auto;
  display: flex;
  justify-content: center;
  }
}
@media only screen and (max-width: 375px) {
.cards-container {
  width: 368px;
  margin: auto;
  display: flex;
  justify-content: center;
  }
}
</style>

