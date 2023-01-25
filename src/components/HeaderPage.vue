<template>
  <div class="header">
    <BNavbar type="dark" class="navbar" variant="light">
      <BContainer>
        <BNavbarBrand href="#">MovieDB</BNavbarBrand>
        <BNavForm>
          <BFormInput class="mr-sm-2 search-input"
                      placeholder="Search"
                      v-model="searchValue"
                      debounce="500"
          ></BFormInput>
        </BNavForm>
      </BContainer>
    </BNavbar>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'HeaderPage',
  data: () => ({
    searchValue: ''
  }),
  watch: {
    searchValue: 'onSearchValueChange'
  },
  methods: {
    ...mapActions('movies', ['searchMovie', 'fetchMovies', 'toggleSearchState']),
    onSearchValueChange(value) {
      if (value) {
        this.searchMovie(value)
        this.toggleSearchState(true)
      }  else {
        this.fetchMovies()
        this.toggleSearchState(false)

      }
    }
  }
}
</script>

<style scoped>
.header {
  margin-bottom: 30px;
}

.navbar {
  background-color: rgba(0, 0, 0, 0.7) !important;
}

.search-input {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(0, 0, 0, 0.6);
}

.search-input:focus {
  box-shadow: none;
  color: #000;
  background: rgba(255, 255, 255, 0.8);
  border-color: rgba(0, 0, 0, 0.6);

}
</style>
