import Vue from 'vue';
import VueLogger from 'vuejs-logger';
import calendarApp from './components/cal/calendarApp.vue';
import {isProduction} from './config/env';
import VueMoment from 'vue-moment';

const options = {
    isEnabled: true,
    logLevel: isProduction ? 'error' : 'debug',
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: true,
    separator: '|',
    showConsoleColors: true
};
Vue.use(VueLogger, options);
Vue.use(VueMoment);

Vue.component('calendar-app', calendarApp);


let vueInstance = new Vue({
    el: '#app'
});