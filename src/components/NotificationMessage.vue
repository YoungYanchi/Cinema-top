<template>
  <div class="notification">
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NotificationMessage",
  computed: {
    ...mapGetters(["messagePool"])
  },
  watch: {
    messagePool: "showNotification"
  },
  methods: {
    showNotification({ variant, msg, title }) {
      this.$bvToast.toast(msg, {
        title,
        variant,
        solid: true
      });
      console.log(msg)
    }
  }
};
</script>

<style scoped>
.notification {
  z-index: 999;
}
</style>
