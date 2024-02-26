<template>
  <v-bottom-navigation grow class="d-lg-none" bg-color="info">
    <v-btn
      value="home"
      @click="goToOtherPage('/home')"
      :class="{ active: currentPath === '/home' }"
    >
      <v-icon>mdi-home-account</v-icon>

      <span>Home</span>
    </v-btn>

    <v-btn
      value="market"
      @click="goToOtherPage('/market')"
      :class="{ active: currentPath === '/market' }"
    >
      <v-icon>mdi-finance</v-icon>

      <span>Market</span>
    </v-btn>
    <v-btn
      value="wallet"
      @click="goToOtherPage('/wallet')"
      :class="{ active: currentPath === '/wallet' }"
    >
      <v-icon>mdi-wallet</v-icon>

      <span>Wallet</span>
    </v-btn>

    <v-btn
      value="profile"
      @click="goToOtherPage('/profile')"
      :class="{ active: currentPath === '/profile' }"
    >
      <v-icon>mdi-account</v-icon>

      <span>Profile</span>
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
    };
  },
  watch: {
    $route(to) {
      console.log('aaa-to', to);
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
