<template>
    <v-row justify="end">
        <v-dialog
            v-model="dialog"
            width="80%"
            :fullscreen="$vuetify.breakpoint.xsOnly"
            @click:outside="clearForm"
        >
            <v-card class="pa-4">
                <v-form ref="form" v-model="valid">
                    <v-card-title>
                        <span
                            class="headline"
                        >{{ formTitle }}</span>
                    </v-card-title>
                    <v-container>
                        <!-- <v-text-field
                            :color="componentColor"
                            v-model="nameInput"
                            dense
                            label="Schedule Name"
                            outlined
                            :rules="[rules.required, rules.nameCounter, rules.nonWhiteSpaces]"
                            counter="140"
                        >
                        </v-text-field> -->
                        <v-combobox
                        v-model="nameInput"
                        :items="shifts"
                        label="Schedule shift"
                        outlined
                        dense
                        ></v-combobox>

                        <v-combobox
                        v-model="select"
                        :items="items"
                        label="Add employee"
                        multiple
                        outlined
                        dense
                        ></v-combobox>

                    </v-container>
                    <v-card-actions>
                        <color-picker
                            v-model="selectedColor"
                        ></color-picker>
                        <v-spacer></v-spacer>
                        <v-btn 
                            color="primary"
                            text
                            @click="clearForm"
                        >cancel</v-btn>
                        <v-btn 
                            color="primary" 
                            text 
                            :disabled="!valid" 
                            @click="submitForm"
                    >Save</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
    </v-row>
</template>

<script>

import ColorPicker from './event-form/ColorPicker'
import StartAndEndTimePicker from './event-form/StartAndEndTimePicker'

import EventService from '@/services/EventService'
import DateArithmetic from '@/services/DateArithmetic'

import { bus } from '@/main'

export default {
    components: {
       ColorPicker,
       StartAndEndTimePicker
    },

    data: () => ({
        componentColor: 'primary',

        editOptionSelected: 'Only this event',
        editOptions: [
        'Only this event',
        'This and all sibling events',
        'This and all following sibling events'
        ],

        originalEditedEvent: {},

        formTitle: 'Add a New Schedule',
        select: ['Hamish'],
        shifts: ['Morning Shift', 'Evening Shift'],
        items: ['Hamish', 'Bev', 'Arly', 'Wally', 'Evelina', 'Mercedes', 'Neille'],
        nameInput: '',
        detailsInput: '',

        selectedDate: '',
        startDate: '',
        endDate: '',

        dates:{
            start: '',
            end: ''
        },

        times: {
            start: null,
            end: null
        },

        startTime: '',
        endTime: '',

        selectedColor: '#F07F1D',

        id: undefined,

        editDialog: false,
        dialog: false,
        
        valid: false,
        rules: {
            required: v => !!v || 'Required',
            nameCounter: v => v.length <= 140 || 'Max 100 Characters',
            descriptionCounter: v => v.length <= 500 || 'Max 500 Characters',
            nonWhiteSpaces: v => { 
                const regEx = /\S+/ //any non white space character
                return regEx.test(v) || 'Invalid, Please enter more than just spaces.'
            },

        }
    }),
    methods : {
        addscheduledemployee(){
            scheduledEmployees.push({
                name:"lil",
            });
        },
        removescheduledemployee(){
            scheduledEmployees.push({
                name:"lil",
            });
        },

        submitForm(){
            if(this.isEditing){
                EventService.addOrUpdate(this.currEvent)
                this.sendEditedEventNotification(`Successfully edited event "${this.currEvent.name}!"`)
            } else {    
                EventService.addOne(this.currEvent)
                this.sendAddedEventNotification(`Successfully added event "${this.currEvent.name}"!`)
            }
            this.clearForm()
            bus.$emit('refreshEvents') 
        },
        openEditDialog(){
            this.editDialog = true
        },
        editEvent(){
            this.formTitle = `Edit Event "${this.currEvent.name}"`
            this.originalEditedEvent = this.currEvent
            this.dialog = true
        },
        setColor(colorObject){
            this.color = colorObject.hex
        },
        clearForm(){
            this.dialog = false

            this.formTitle = "Add a New Schedule"

            this.id = undefined
            this.selectedColor = '#F07F1D'

            this.resetTextInputFields()
            this.resetTimePickers()
            this.$refs.form.resetValidation()
        },

        resetTextInputFields(){
            this.nameInput = ''
            this.detailsInput = ''
        },
        resetTimePickers(){
            this.times = {
                start: '',
                end: ''
            }
        },
        setToday(){
            const today = new Date().toISOString().substr(0,10)
            this.dates.start = today
            this.dates.end = today
            this.selectedDate = today
        },
        setStartTime(time){
            this.times.start = time
        },
        sendAddedEventNotification(message){
            bus.$emit('success', {
                message,
                timeout: 7000
            })
        },
        sendEditedEventNotification(message){
            bus.$emit('success', {
                message,
                timeout: 7000
            })
        },
        sendErrorMessage(message){
            bus.$emit('sucess', {
                message,
                timeout:7000
            })
        },
        setDurationToOneDay(){
            this.dates = {
                ...this.dates,
                end: this.dates.start   
            }
        },
    },
    created(){
        this.setToday()

        bus.$on('sendSelectedDate', date => {
           this.selectedDate = date
           this.dates = {
               start:date,
               end:date
           }
        })
        bus.$on('sendPickedDates', (dates) => {
            this.dates.start = dates[0]
            this.dates.end = dates[1]
        })
        bus.$on('openForm', () => this.dialog = true)
        bus.$on('sendStartTime', time => {
                this.times = {
                    start: time,
                    end: ''
                }
        })
        bus.$on('editEvent', event => {
            this.currEvent = event
            this.editEvent()
        })

    },
    computed: {
        isLongerThanOneDay(){
            return this.dates.start !== this.dates.end
        },
        isEditing(){
            return !!this.currEvent.id
        },
        startTimeAutocomplete(){
            if(!this.times.start && this.times.end){
                return " 00:00"
            } else if(!this.times.start && !this.times.end){
                return ''
            } else {
                return ' ' + this.times.start
            }
        },
        endTimeAutocomplete(){

            if(this.times.start && !this.times.end){
                return " 23:59"
            } else if(!this.times.start && !this.times.end){
                return ''
            }else{
                return ' ' + this.times.end
            }
        },
        eventStartInWords(){
            return DateArithmetic.getDateInWords(this.currEvent.start)
        },
        startDateAndTime:{
            get(){
                return this.dates.start + this.startTimeAutocomplete
            },
            set(newDateAndTime){
                const [date,time] = newDateAndTime.split(' ')
                this.dates = {
                    ...this.dates,
                    start: date
                }
                if(time) {
                    this.times = {
                        ...this.times,
                        start: time
                    }
                }
            }
        },
        endDateAndTime:{
            get(){
                    return this.dates.end + this.endTimeAutocomplete
            },
            set(newDateAndTime){
                const [date,time] = newDateAndTime.split(' ')
                this.dates = {
                    ...this.dates,
                    end: date
                }
                if(time){
                    this.times = {
                        ...this.times,
                        end: time
                    }
                } 
            }
        },
        currEvent:{
            get(){
                    const event = {
                        name: this.nameInput,
                        details: this.detailsInput,
                        start: this.startDateAndTime,
                        end: this.endDateAndTime,
                        id: this.id,
                        color: this.selectedColor,
                    }
                    return event
            },
            set(newEvent){
                this.nameInput = newEvent.name
                this.detailsInput = newEvent.details
                this.startDateAndTime = newEvent.start
                this.endDateAndTime = newEvent.end
                this.id = newEvent.id
                this.selectedColor = newEvent.color
            }
        },
    }

}
</script>
