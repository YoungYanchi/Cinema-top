<template>
  <div class="poster-page-bg" :style="posterStyle"></div>
</template>

<script>
export default {
  name: 'PosterBg',
  props: {
    poster: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    defaultPosterBg: 'background-image: linear-gradient(45deg, rgb(0, 3, 38) 0%,rgb(82, 15, 117) 100%)'
  }),
  computed: {
    posterStyle() {
      return {
        'background-image': this.posterBg
      }
    },
    posterBg() {
      return this.poster ? `url(${this.poster})` : this.defaultPosterBg
    }
  }
}
</script>

<style scoped>
.poster-page-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  transition: all 0.4s ease;
  height: 100vw;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}

.poster-page-bg:before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.8;
  background-image: linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%);
}
</style>
