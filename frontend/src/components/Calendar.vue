<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar
          flat
        >
          <v-btn
            outlined
            class="mr-4"
            color="grey darken-2"
            @click="setToday"
          >
            Today
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="prev"
          >
            <v-icon small>
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="next"
          >
            <v-icon small>
              mdi-chevron-right
            </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu
            bottom
            right
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                outlined
                color="grey darken-2"
                v-bind="attrs"
                v-on="on"
              >
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>
                  mdi-menu-down
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
        <v-divider></v-divider>
        <v-sheet height="86vh">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            :events="events"
            :event-color="getEventColor"
            :event-margin-bottom="15"
            :now="today"
            :type="type"
            :short-intervals=true
            :interval-count=12
            :interval-minutes=120

            @moved="sendDate"
            @click:day="openFormAndSendDay"
            @click:event="showEvent"
            @click:more="viewDayOrOpenForm"
            @click:date="viewDayOrOpenForm"
            @click:interval="sendDateAndTime"
            @click:time="sendDateAndTime"
            @change="updateRange"
          >
          </v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card
              min-width="350px"
              flat
            >
              <v-toolbar
                :color="selectedEvent.color"
                dark
              >
                <v-btn
                icon
                @click="editEvent(selectedEvent)"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn 
                  icon
                  @click="deleteDialog = true"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>

                <v-dialog
                  v-model="deleteDialog"
                  width="70%"
                >
                  <v-card >
                    <v-card-title>Delete {{selectedEvent.name}} ?</v-card-title>
                    <v-card-text>Are you sure you want to delete?</v-card-text>
                    <v-card flat class="d-flex ma-0 pa-3">
                      <v-btn
                        @click="deleteDialog = false"
                        text
                        color="primary"
                      >
                        Close
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn
                        @click="deleteSelectedEvent(selectedEvent)"
                        text
                        color="primary"
                      >
                        Delete
                      </v-btn>
                    </v-card>
                  </v-card>
                </v-dialog>

              </v-toolbar>
              <v-card-text>
                <v-list>
    <v-list-item
    v-for="employee in scheduledEmployees"
    :key="employee"
    >    
        <v-list-item-avatar>
          <v-icon
            class="grey lighten-1"
            dark
          >
            mdi-account
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
        <v-list-item-title v-text="employee"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
    </v-list-item>
</v-list>  
                <span v-html="selectedEvent.details"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="primary"
                  @click="selectedOpen = false"
                >
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
</template>

<script>

import EventService from '@/services/EventService'

import { bus } from '@/main'

  export default {
    data: () => ({
      scheduledEmployees: ['Hamish', 'Bev', 'Arly', 'Wally', 'Evelina', 'Mercedes', 'Neille'],
      deleteDialog: false,
      today: new Date().toISOString().substr(0,10),
      focus: new Date().toISOString().substr(0,10),
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
      },
      start: null,
      end: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
    }),
    computed: {

      monthFormatter () {
        return this.$refs.calendar.getFormatter({
          timeZone: 'UTC',
          month: 'long',
        })
      },
    },
    mounted () {
      this.$refs.calendar.checkChange()
      this.$refs.calendar.move(1)
      this.$refs.calendar.move(0)
    },
    methods: {
      openFormAndSendDay(day){

        this.sendDate(day)
        bus.$emit('openForm')
      },
      deleteSelectedEvent(event){
        EventService.deleteEvent(event,'id')
        bus.$emit('success', {
          message: `Successfully deleted event "${event.name}"`,
          timeout: 5000
        })
        this.deleteDialog = false
        this.selectedOpen = false
        this.refreshEvents()
      },

      editEvent(event){
        bus.$emit('editEvent', event)
      },
      sendDateAndTime(dayAndTime){
        this.sendDate(dayAndTime)
        const startTimeFullHour = `${String(dayAndTime.hour).padStart(2,'0')}:00`
        bus.$emit('sendStartTime', startTimeFullHour)
        bus.$emit('openForm')
      },
      sendDate( dayAndTime ){
        bus.$emit('sendSelectedDate', dayAndTime.date )
      },
      refreshEvents(){
        this.events = EventService.getAll()
      },
      viewDayOrOpenForm( dayAndTime ) {
        this.focus = dayAndTime.date
        bus.$emit('sendSelectedDate', dayAndTime.date )
        if(this.type === 'day'){
          bus.$emit('openForm')
        }
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = this.today
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => this.selectedOpen = true, 10)
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      updateRange ({ start, end }) {
        this.start = start
        this.end = end
      },
      nth (d) {
        return d > 3 && d < 21
          ? 'th'
          : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
      },
    },
    created(){
        this.refreshEvents()
        bus.$on('refreshEvents', () => this.refreshEvents())
    },
    watch: {
        focus(){

           bus.$emit('sendSelectedDate', this.focus)
        },
    }
  }
</script>