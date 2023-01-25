<template>
  <div id="app">
    <PreLoader />
    <NotificationMessage/>
    <PosterBg :poster="posterBg" />
    <HeaderPage/>
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
    <MoviesPagination
      :current-page="currentPage"
      :per-page="moviesPerPage"
      :total="moviesLength"
      @pageChanged="onPageChanged"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MoviesList from '@/components/MoviesList'
import PosterBg from '@/components/PosterBg'
import MoviesPagination from '@/components/MoviesPagination'
import PreLoader from '@/components/PreLoader'
import HeaderPage from "@/components/HeaderPage";
import NotificationMessage from "@/components/NotificationMessage";

export default {
  name: 'App',
  components: {
    MoviesList,
    PosterBg,
    MoviesPagination,
    PreLoader,
    HeaderPage,
    NotificationMessage
  },
  data: () => ({
    posterBg: ''
  }),
  computed: {
    ...mapGetters('movies', ['moviesList', 'currentPage', 'moviesPerPage', 'moviesLength'])
  },
  watch: {
    '$route.query': {
      handler: 'onChangeQueryChange',
      immediate: true,
      deep: true
    }
  },
  methods: {
    ...mapActions('movies', ['changeCurrentPage']),
    onChangeQueryChange({ page = 1 } = {}) {
      this.changeCurrentPage(Number(page))
    },
    onChangePoster(poster) {
      this.posterBg = poster
    },
    onPageChanged(page) {
      this.$router.push({ query: { page } })
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
