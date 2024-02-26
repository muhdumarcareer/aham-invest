<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center mx-1">
      <v-card variant="tonal" class="py-4 border" color="blue">
        <v-img height="100" src="@/assets/logo.svg" />

        <div class="text-h5 text-md-h3 font-weight-bold">Login</div>
        <v-sheet width="70vw" class="mx-auto">
          <v-form v-model="valid" @submit.prevent>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field v-model="password" :rules="passwordRules" type="password" label="Password"
                    required></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-btn type="submit" block class="mt-2" color="blue" @click="goToHomePage">
                    <p class="text-h5">Submit</p>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-sheet>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
    emailRules: [
      value => {
        if (value) return true
        return 'You must enter email'
      },
    ],
    passwordRules: [
      value => {
        if (value) return true
        return 'You must enter password'
      },
    ],
  }),
  methods: {
    goToHomePage() {
      this.$router.push('/home');
    },
  },
}
</script>