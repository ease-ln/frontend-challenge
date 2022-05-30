<template>
  <div class="cards-container" >
    <div class="cards">
      <Card v-for="image in images" :key="image.id" :liked="false" :url="image.url"/>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import axios from 'axios';

const NUM_OF_IMG_INIT = 15

export default {
  name: 'Main',
  components: {
    Card
  },
  data: function () {
    return {
        images: []
    }
  },
  created(){
    for (let i = 0; i < NUM_OF_IMG_INIT; i++) {
      this.loadNextImage();
    }
  },
  mounted() {
    this.scroll();
  },
  methods:{
    async loadNextImage()
          {
            try{
              axios.defaults.headers.common['x-api-key'] = "7fc8b651-f41e-45bf-ad7d-36816a689b5a"

              let responses = await axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit: 1, size:"full" } } ) // Ask for 1 Image, at full resolution
              for (const response of responses.data) {
                this.images.push(response)
              }
            }catch(err){
              console.log(err)
            }
          },
    scroll () 
          {
            window.onscroll = () => {
              let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        
              if (bottomOfWindow) {
                for (let i = 0; i < NUM_OF_IMG_INIT; i++) {
                  this.loadNextImage();
                }
              }
            }
          },
  }
  }
</script>

<style>
.cards-container {
  width: 1710px;
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
