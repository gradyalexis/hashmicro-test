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
                <div class="text-h4 mb-1">Create an Account</div>
                <div class="text-subtitle-2 mb-4 text-grey">Please enter your registration details</div>
                <v-alert v-if="error" type="error" dense class="mt-4 mb-4">{{ error }}</v-alert>
                <v-form @submit.prevent="handleSignUp">
                  <v-text-field
                    v-model="name"
                    label="Full Name"
                    type="text"
                    required
                    outlined
                    prepend-inner-icon="mdi-account"
                  ></v-text-field>
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
                  <v-text-field
                    v-model="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    required
                    outlined
                    prepend-inner-icon="mdi-lock"
                  ></v-text-field>

                  <v-checkbox
                    v-model="agreeToTerms"
                    label="I agree to the terms and conditions"
                    color="primary"
                    hide-details
                  ></v-checkbox>

                  <v-btn type="submit" color="red" block large class="mt-4">Sign Up</v-btn>

                  <div class="text-center mt-4">
                    <span>Already have an account? </span>
                    <router-link to="/login" class="text-primary">
                      Login
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

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const agreeToTerms = ref(false);
const error = ref('');
const router = useRouter();

const handleSignUp = () => {
  if (
    name.value &&
    email.value &&
    password.value &&
    confirmPassword.value === password.value &&
    agreeToTerms.value
  ) {
    router.push('/');
  } else {
    error.value = 'Please fill out all fields and agree to the terms.';
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

.text-primary {
  color: var(--v-primary-base);
  text-decoration: none;
}

.text-primary:hover {
  text-decoration: underline;
}
</style>