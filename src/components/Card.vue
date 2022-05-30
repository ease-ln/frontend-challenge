<template>
  <div class="card">
    <img class="card-img" :id="url" :src="url" alt="cat's image" @mouseenter="toggleLike" @mouseleave="toggleLike"/> 
    <label class="container">
      <input type="checkbox" :id="url" :checked="liked">
      <span class="checkmark" @click="likeCard" @mouseenter="toggleLike" @mouseleave="toggleLike" :style="{visibility: visible ? 'visible':'hidden'}"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    url: {
      type: String,
      required: true
    },
    liked: {
      type: Boolean,
      required: true
    },
  },
  data: function () {
    return {
      visible: false,
      isLiked: this.liked,
    }
  },
  methods: {
    toggleLike: function() {
        this.visible = !this.visible;
    },
    likeCard: function() {
        this.isLiked = !this.isLiked;
        if (this.isLiked) {
          this.$store.commit('addImage', this.url)
        } 
        else {
          this.$store.commit('removeImage', this.url)
        }
    }
  }
}
</script>

<style scoped>
.card {
  display: inline-block;
  padding: 15px;
  margin: 0 8px 0 8px;
}
.card:hover {
  box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18);
}
.card-img {
  display: block;
  height: 225px;
  width: 225px;
}
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  bottom: 23px;
  left: 198px;
  height: 37px;
  width: 40px;
  background-image: url('../assets/LikeStates/block.png');
}
.container:hover input ~ .checkmark {
  background-image: url('../assets/LikeStates/hover.png');
}

.container input:checked ~ .checkmark {
  background-image: url('../assets/LikeStates/clicked.png');
}
</style>
