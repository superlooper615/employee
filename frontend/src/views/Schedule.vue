<template>
<div  v-if="role=='Captain'">
    <calendar2></calendar2>

</div>

<div  v-else-if="role=='Manager'">
    <calendar></calendar>
    <event-form></event-form>
    <notifications></notifications>
</div>
<div v-else>
    <landing></landing>
</div>

</template>

<script>
import Landing from '@/views/Landing'
import Calendar from '@/components/Calendar'
import Calendar2 from '@/components/Calendar2'
import EventForm from '@/components/EventForm'
import Notifications from '@/components/Notifications'
import { mapGetters } from 'vuex';

export default {
    name: 'schedule',

    components: {
      Landing,
        Calendar,
        Calendar2,
        EventForm,
        Notifications    
    },

    data: () => ({

    }),
    computed: {
    ...mapGetters({
      role: 'authStore/getRole',
    }),
  },
};
</script>
