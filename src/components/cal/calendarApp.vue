<template>
    <div>
        <event-list :events="orderedEvents" :calendars="cals"></event-list>
    </div>
</template>

<script>
    import {churchToolsQuery} from './../../lib/proxyConnection';
    import {
        FN_CHURCHCAL_GETCALENDAREVENTS,
        FN_CHURCHCAL_GETMASTERDATA,
        MODULE_CHURCHCAL
    } from "../../config/churchtools";
    import EventList from './event/eventList.vue';

    export default {

        props: {
            from: {
                default: 0
            },
            to: {
                default: 10
            },

            limit: {
                default: 50
            }
        },

        data() {
            return {
                cals: [],
                events: []
            }
        },

        computed: {
            calIds() {
                return this.cals.map((obj) => {
                    return obj.id;
                })
            },
            orderedEvents() {
                return this.events.sort((e1, e2) => {
                    return e1.startdate > e2.startdate;
                });
            }
        },

        created() {

            churchToolsQuery(MODULE_CHURCHCAL, FN_CHURCHCAL_GETMASTERDATA).then((data) => {

                let cals = [];

                for (let i in data.category) {
                    cals.push(data.category[i]);
                }

                this.cals = cals;

            }).then(() => {
                this.updateCalendarEvents();
            });

        },

        methods: {
            updateCalendarEvents() {
                const data = {
                    category_ids: this.calIds,
                    from: this.from,
                    to: this.to
                };

                churchToolsQuery(MODULE_CHURCHCAL, FN_CHURCHCAL_GETCALENDAREVENTS, data)
                    .then((data) => {
                        this.events = data.slice(0, this.limit);
                    }).catch(() => {
                    this.events = [];
                });
            },

        },

        components: {
            EventList
        }

    }
</script>

<style scoped>

</style>