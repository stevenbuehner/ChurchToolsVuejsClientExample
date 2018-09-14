<template>
    <li>
        <time datetime="startdate"
              :style="{backgroundColor : color}">
            <span class="day">{{startdate | moment("D")}}</span>
            <span class="month">{{startdate | moment("MMM")}}</span>
            <!--
            <span class="year">{{startdate | moment("YYYY")}}</span>
            <span class="time">{{startdate | moment("hh:mm")}}</span>
            -->
        </time>
        <!-- <img alt="Independence Day" src="https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg"/> -->
        <div class="info">
            <h2 class="title">{{title}}</h2>
            <p class="desc">{{ort}}</p>
        </div>
    </li>
</template>

<script>

    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            ort: {
                type: String,
                required: false,
                default: null
            },
            link: {
                type: String,
                required: false,
                default: null
            },
            enddate: {
                type: String,
                required: true,
            },
            startdate: {
                type: String,
                required: true,
            },
            color: {
                type: String,
                required: true
            }
        },

        computed: {
            start() {

            }
        }
    }
</script>

<style scoped>
    @import url("http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,400italic");

    li {
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 0px 5px rgb(51, 51, 51);
        box-shadow: 0px 0px 5px rgba(51, 51, 51, 0.7);
        padding: 0px;
        margin: 0px 0px 20px;
        overflow: hidden;
    }

    time {
        display: inline-block;
        width: 100%;
        color: rgb(255, 255, 255);
        padding: 5px;
        text-align: center;
        text-transform: uppercase;
    }

    li > time > .day {
        display: block;
        font-size: 56pt;
        font-weight: 100;
        line-height: 1;
    }

    li time > .month {
        display: block;
        font-size: 24pt;
        font-weight: 900;
        line-height: 1;
    }

    li > img {
        width: 100%;
    }

    li > .info {
        padding-top: 5px;
        text-align: center;
    }

    li > .info > .title {
        font-size: 24pt;
        font-weight: 700;
        margin: 0px;
    }

    li > .info > .desc {
        font-size: 13pt;
        font-weight: 300;
        margin: 0px;
    }

    li > .info > ul,
    li > .info > ul > li {
        display: table-cell;
        cursor: pointer;
        color: rgb(30, 30, 30);
        font-size: 11pt;
        font-weight: 300;
        padding: 3px 0px;
    }

    li > .info > ul > li > a {
        display: block;
        width: 100%;
        color: rgb(30, 30, 30);
        text-decoration: none;
    }

    li > .info > ul > li:hover {
        color: rgb(30, 30, 30);
        background-color: rgb(200, 200, 200);
    }

    @media (min-width: 768px) {
        li {
            position: relative;
            display: block;
            width: 100%;
            height: 120px;
            padding: 0px;
        }

        li > time,
        li > img {
            display: inline-block;
        }

        li > time,
        li > img {
            width: 120px;
            float: left;
        }

        li > .info {
            background-color: rgb(245, 245, 245);
            overflow: hidden;
        }

        li > time,
        li > img {
            width: 120px;
            height: 120px;
            padding: 0px;
            margin: 0px;
        }

        li > .info {
            position: relative;
            height: 120px;
            text-align: left;
            padding-right: 40px;
        }

        li > .info > .title,
        li > .info > .desc {
            padding: 0px 10px;
        }

        li > .info > ul {
            position: absolute;
            left: 0px;
            bottom: 0px;
        }

    }
</style>