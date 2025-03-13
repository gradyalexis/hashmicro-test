<template>
  <v-app>
    <v-main>
      <v-container fluid class="fill-height pa-0">
        <v-row no-gutters class="fill-height">
          <v-col cols="12" md="7" class="position relative hidden-sm-and-down pa-2 ">
            <video
              autoplay
              muted
              loop
              class="fill-height rounded-lg"
              style="width: 100%; object-fit: cover;"
            >
              <source src="https://www.hashmicro.com/assets/video/vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img
              src="@/assets/logo.webp"
              alt="Logo"
              class="position-absolute"
              style="width: 150px; top: 20px; left: 20px"
            />
          </v-col>

          <v-col cols="12" md="5" class="d-flex align-center justify-center">
            <v-card variant="flat" width="100%" max-width="400">
              <div class="w-100 d-flex mb-4">
                <img src="@/assets/logo-red.png" alt="Logo" class="mx-auto" style="width: 250px" />
              </div>
              <v-card-text class="pa-6">
                <div class="text-h4 mb-1">Welcome Back</div>
                <div class="text-subtitle-2 mb-4 text-grey">Please enter your login details</div>
                <v-alert v-if="error" type="error" dense class="mt-4 mb-4">{{ error }}</v-alert>
                <v-form @submit.prevent="handleLogin">
                  <v-text-field
                    v-model="email"
                    label="Email"
                    type="email"
                    required
                    outlined
                    prepend-inner-icon="mdi-email"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                    required
                    outlined
                    prepend-inner-icon="mdi-lock"
                  ></v-text-field>
                  <v-row align="center" justify="space-between">
                    <v-col cols="auto">
                      <v-checkbox
                        v-model="rememberMe"
                        label="Remember Me"
                        color="primary"
                        hide-details
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="auto">
                      <a href="#" class="text-primary">Forgot Password?</a>
                    </v-col>
                  </v-row>
                  <v-btn type="submit" color="red" block large>Login</v-btn>
                  <div class="text-center mt-4">
                    Don't have an account?
                    <router-link to="/register" class="text-primary">
                      Sign Up
                    </router-link>
                  </div>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();
const rememberMe = ref(false);

const handleLogin = () => {
  if (email.value === 'user@example.com' && password.value === 'password') {
    router.push('/');
  } else {
    error.value = 'Invalid email or password';
  }
};
</script>

<style scoped>
.fill-height {
  height: 100vh;
}

video {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.d-flex.align-center.justify-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>