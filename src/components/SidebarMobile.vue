<template>
  <v-bottom-navigation grow class="d-lg-none" bg-color="info">
    <v-btn
      v-for="item in routes"
      :key="item.path"
      :value="item.path"
      @click="goToOtherPage(`/${item.path}`)"
    >
      <v-icon :class="{ active: currentPath === `/${item.path}` }">{{
        item.icon
      }}</v-icon>
      <span :class="{ active: currentPath === `/${item.path}` }">{{
        item.label
      }}</span>
    </v-btn>
    <v-btn value="logout" @click="goToOtherPage('/')">
      <v-icon>mdi-logout</v-icon>

      <span>Logout</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      currentPath: this.$route.path,
      routes: [
        {
          path: "home",
          icon: "mdi-home-account",
          label: "Home",
        },
        {
          path: "market",
          icon: "mdi-finance",
          label: "Market",
        },
      ],
    };
  },
  watch: {
    $route(to) {
      // Update currentPath when the route changes
      this.currentPath = to.path;
    },
  },
  methods: {
    goToOtherPage(data) {
      this.$router.push(data);
    },
  },
};
</script>

<style>
.active {
  color: black;
}
</style>
