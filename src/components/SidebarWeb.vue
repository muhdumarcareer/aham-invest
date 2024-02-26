<template>
  <v-navigation-drawer expand-on-hover rail mobile-breakpoint="lg" class="d-none d-md-block">
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/1.jpg"
      title="Muhammad Umar"
    ></v-list-item>
    <v-divider />
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home-account"
        title="Home"
        value="home"
        @click="goToOtherPage('/home')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-finance"
        title="Market"
        value="market"
        @click="goToOtherPage('/market')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-wallet"
        title="Wallet"
        value="wallet"
        @click="goToOtherPage('/wallet')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account"
        title="Profile"
        value="profile"
        @click="goToOtherPage('/profile')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account"
        title="Profile2"
        value="profile2"
        @click="goToOtherPage('/profile2')"
      ></v-list-item>
      <v-divider />
      <v-list-item
        prepend-icon="mdi-logout"
        title="Logout"
        value="logout"
        @click="goToOtherPage('/')"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  methods: {
    goToOtherPage(data) {
      this.$router.push(data);
    },
  },
};
</script>
