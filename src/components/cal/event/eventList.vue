<template>
    <div class="event-list-wrapper">
        <ul class="event-list">
            <event v-for="(e, index) in events"
                   :key="index + e.bezeichnung"
                   :title="e.bezeichnung"
                   :ort="e.ort"
                   :startdate="(e.startdate)"
                   :enddate="(e.enddate)"
                   :link="e.link"
                   :color="getEventColor(e)"
            ></event>
        </ul>

    </div>
</template>

<script>
    import Event from './event.vue';

    export default {
        props: {
            events: {
                type: Array,
                required: true
            },
            calendars: {
                type: Array,
                required: true
            }
        },

        methods: {
            getEventColor(event) {

                const cal = this.calendars.find((cal) => {
                    return cal.id === event.category_id;
                });

                if (cal && cal.color) {
                    return cal.color;
                } else {
                    return '#ffffff';
                }

            }
        },


        components: {
            Event

        }
    }
</script>

<style scoped>
    .event-list {
        list-style: none;
        font-family: 'Lato', sans-serif;
        margin: 0px;
        padding: 0px;
    }
</style>