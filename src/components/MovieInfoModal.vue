<template>
  <div class="movie-info-wrap">
    <header class="movie-info-header">
      <h6 class="movie-header-title">Movie view</h6>
      <BIconX class="close-icon" @click="closeModal"/>
    </header>
    <div class="movie-info-content">
      <BRow>
        <BCol sm="4">
          <div class="movie-poster-wrap">
            <div class="movie-poster" :style="posterStyle"></div>
          </div>
        </BCol>
        <BCol sm="8">
          <h3 class="movie-title">{{ movie.Title }}</h3>
          <BFormRating
              class="movie-ratting"
              v-model="MovieRating"
              readonly
              show-value
              precision="1"
              stars="10"
              show-value-max
              no-border
          />
          <p class="movie-description">{{ movie.Plot }}</p>
          <BBadge
              style="background-color: green;
              margin: 2px"
              class="mr-2">{{ movie.Year }}
          </BBadge>
          <BBadge
              style="background-color: green;
              margin: 2px"
              class="mr-2">{{ movie.Runtime }}
          </BBadge>
          <BBadge
              style="background-color: green;
              margin: 2px"
              class="mr-2">{{ movie.Genre }}
          </BBadge>
          <BBadge
              style="background-color: green;
              margin: 2px"
              class="mr-2">{{ movie.Language }}
          </BBadge>

          <table class="table small">
            <tbody>
            <tr>
              <th>Выпуск в прокат</th>
              <td>{{ movie.DVD }}</td>
            </tr>
            <tr>
              <th>Страна</th>
              <td>{{ movie.Country }}</td>
            </tr>
            <tr>
              <th>Режиссёр</th>
              <td>{{ movie.Director }}</td>
            </tr>
            <tr>
              <th>Сценарист</th>
              <td>{{ movie.Writer }}</td>
            </tr>
            <tr>
              <th>Актеры</th>
              <td>{{ movie.Actors }}</td>
            </tr>
            <tr>
              <th>Awards</th>
              <td>{{ movie.Awards }}</td>
            </tr>
            </tbody>
          </table>
        </BCol>
      </BRow>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieInfoModal",
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    defaultPosterBg:
        'linear-gradient(45deg, rgb(0, 3, 38) 0%,rgb(82, 15, 117) 100%)',
  }),
  computed: {
    MovieRating() {
      return this.movie.imdbRating
    },
    posterStyle() {
      return {
        'background-image': this.posterBg
      }
    },
    posterBg() {
      return this.movie ? `url(${this.movie.Poster})` : this.defaultPosterBg
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  }
}
</script>

<style scoped>
.movie-info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%);
  color: #fff;
}

.movie-header-title {
  margin-bottom: 0;
  line-height: 1.5;
  font-size: 1.25rem;
}

.movie-info-content {
  padding: 1rem;
  border-color: #fff;
}

.movie-poster-wrap {
  position: relative;
  padding-bottom: 150%;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.movie-poster {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
}

.movie-title {
  font-family: "Roboto", sans-serif;
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.movie-ratting {
  padding: 0;
}

.movie-ratting:focus {
  box-shadow: none;
}

.movie-ratting >>> .b-rating-star,
.movie-ratting >>> .b-rating-value {
  justify-content: flex-start;
  flex-grow: 0 !important;
  font-size: 1.3rem;
  font-weight: 300;
  padding: 0;
}

.movie-ratting >>> .b-rating-star + .b-rating-star {
  margin-left: 4px;
}

.movie-ratting >>> .b-rating-value {
  margin-left: 10px;
}

.movie-ratting >>> .b-rating-star {
  color: #ffc107;
}

.movie-description {
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
}

.close-icon {
  font-size: 24px;
  cursor: pointer;
}
</style>