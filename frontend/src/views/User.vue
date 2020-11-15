<template>
  <user-account @login="loggedIn()" @register="Registered()"></user-account>
</template>

<script>
import UserAccount from '@/components/UserAccount.vue';

export default {
  name: 'Login',
  components: {
    UserAccount,
  },
  methods: {
    loggedIn() {
      // once logged in.
      this.$router.push('/schedule');
    },

    Registered() {
      // once registered
      this.$router.push('/');
    },
  },
};
</script>
