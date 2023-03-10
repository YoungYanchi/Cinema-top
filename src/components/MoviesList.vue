<template>
  <div>
    <BContainer>
      <h3 class="list-title">{{ listTitle }}</h3>
      <BRow>
        <template v-if="isExist">
          <BCol cols="3" v-for="(movie, key) in list" :key="key">
            <MovieItem :movie="movie"
                       @mouseover.native="onMouseOver(movie.Poster)"
                       @removeItem="onRemoveItem"
                       @showModal="onShowMovieInfo"
            />
          </BCol>
        </template>
        <template v-else>
          <div>Загрузка...</div>
        </template>
      </BRow>
      <BModal
          body-class="movie-modal-body"
          :id="movieInfoModalID"
          size="xl"
          hide-footer
          hide-header>
        <MovieInfoModal :movie="selectedMovie" @closeModal="onCloseModal"/>
      </BModal>
    </BContainer>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {mapGetters} from "vuex";
import MovieItem from '@/components/MovieItem'
import MovieInfoModal from "@/components/MovieInfoModal";

export default {
  name: 'MoviesList',
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    movieInfoModalID: 'movie-info',
    selectedMovieID: ''
  }),
  components: {
    MovieItem,
    MovieInfoModal
  },
  computed: {
    ...mapGetters('movies', ['isSearch']),
    isExist() {
      return Boolean(Object.keys(this.list).length)
    },
    listTitle() {
      return this.isSearch ? 'Результаты поиска' : 'IMDB Top 250'
    },
    selectedMovie() {
      return this.selectedMovieID ? this.list[this.selectedMovieID] : null
    }
  },
  methods: {
    ...mapActions('movies', ['removeMovie']),
    ...mapActions(['showNotify']),
    onMouseOver(poster) {
      this.$emit('changePoster', poster)
    },
    async onRemoveItem({id, title}) {
      const isConfirmed = await this.$bvModal.msgBoxConfirm(
          `Вы действительно хотите удалить фильм ${title}?`
      )
      if (isConfirmed) {
        this.removeMovie(id)
        this.showNotify({
          msg: "Фильм удалён",
          variant: 'success',
          title: 'Success'
        })
      }
    },
    onShowMovieInfo(id) {
      console.log(id)
      this.selectedMovieID = id
      this.$bvModal.show(this.movieInfoModalID)
    },
    onCloseModal() {
      this.selectedMovieID = null
      this.$bvModal.hide(this.movieInfoModalID)
    }
  }
}
</script>

<style scoped>
.list-title {
  color: #fff;
  font-size: 50px;
  margin-bottom: 30px;
}
</style>

<style>
.movie-modal-body {
  padding: 0 !important;
}
</style>
