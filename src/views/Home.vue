<template>
  <v-app class="position-relative">
    <video
      autoplay
      muted
      loop
      style="position: fixed; width: 100%; height: 100%; object-fit: cover;"
    >
      <source src="https://www.hashmicro.com/assets/video/vid.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="position-absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%);">
      <div class="text-center text-white font-weight-bold mb-4 text-h4">Find Example CRUD</div>
      <div class="d-flex ga-10 justify-center">
        <router-link to="/login" class="text-white" style="text-decoration: none;">
          Login
        </router-link>
        <router-link to="/register" class="text-white" style="text-decoration: none;">
          Register
        </router-link>
        <router-link to="/form" class="text-white" style="text-decoration: none;">
          Form
        </router-link>
      </div>
    </div>
  </v-app>
</template>

<script></script>