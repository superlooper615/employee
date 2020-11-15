<template>
<nav>
    <v-app-bar
      color="primary"
      dense
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer">
        <h1><span class="font-weight-light">WORK</span><span class="font-weight-regular grey--text text--darken-4">SCHEDULE</span></h1>     
      </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
    <v-menu
      bottom
      right
      transition="scale-transition"
      origin="top left"
    >
        <template v-slot:activator="{ on }">   
        <v-chip
          class="ma-2"
          color="primary"
          text-color="white"
          to="/user"
          v-if="!isLoggedIn"
        >
          <v-avatar left>
            <v-icon>mdi-account-circle</v-icon>
          </v-avatar>
          Login
        </v-chip>

          <v-chip
          v-else
            class="ma-2"
            color="primary"
            text-color="white"
            v-on="on"    
          >
            <v-avatar left>
              <v-icon>mdi-account-circle</v-icon>
            </v-avatar>
            {{ nameOfUser }}
          </v-chip>
        </template>
        <v-card width="150" >
          <v-list>
            <v-list-item @click="logoutClicked()">
              <v-list-item-action>
                <v-icon>mdi-account-arrow-right-outline</v-icon>
              </v-list-item-action>
              <v-list-item-subtitle>Logout</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
    </v-menu>

    </v-app-bar> 

    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="primary"
        >
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</nav>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      appTitle: 'Work Schedule',
      sidebar: false,
      drawer: false,
      group: null,
      menuItems: [
          { title: 'Home', path: '/', icon: 'mdi-home'},
          { title: 'Boat', path: '/boat', icon:'mdi-sail-boat'},
          { title: 'Employee', path: '/employee', icon:'mdi-human-queue'},
          { title: 'Schedule', path: '/schedule', icon: 'mdi-calendar'},
          { title: 'Report', path: '/report', icon: 'mdi-tooltip-text-outline'},

     ],
    }
  },

  // methods: {
  //   loginClicked() {
  //     this.$router.push('/user');
  //   },
  // },
  computed: {
    nameOfUser() {
      return this.$store.getters['authStore/getFirstName'];
    },
    ...mapGetters({
      isLoggedIn: 'authStore/getIsLoggedIn',
    }),
  },
  methods: {
    async logoutClicked() {
    try {
        console.log("test");
        const data = await this.$store.dispatch('authStore/logout');

      console.log("success");
      this.$router.push('/');
    } catch (err) {
      console.log(err, "fail here");
      }
    }
  },
}
</script>

<style>
</style>