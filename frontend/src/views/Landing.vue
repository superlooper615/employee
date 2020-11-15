<template>
  <section id="hero">
    <v-parallax dark src="@/assets/bruce-warrington-unsplash.jpg" height="500">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4">Diversitechnologies</h1>
              <h1 class="font-weight-light">
                Scheduling and Boat status logging system <br />
                To get started Please login in to the application<br />
              </h1>
              <v-btn
                rounded
                outlined
                large
                dark
                @click="$vuetify.goTo('#features')"
                class="mt-5"
              >
                Login now
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>

    </v-parallax>
  <About />
  </section>
</template>
<script>
import About from "@/views/About.vue";
export default {
   name: "Landing",
    components: {
    About
  },
};
</script>