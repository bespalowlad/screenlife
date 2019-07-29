<template lang="pug">
    .app
        .app__avatar(:style="{backgroundImage: 'url(\"' + (app && app.acf ? app.acf.info.logo.sizes.thumbnail : '') + '\")'}")
        .app__id(:class="[light ? 'light': '']")
            span.app__type(v-if="app && getCategoryById(app.apps_category ? app.apps_category[0].name : '')" v-html="getCategoryById(app.apps_category ? app.apps_category[0] : '').name")
            p.app__name(v-html="app && app.title ? app.title.rendered : ''")
        router-link.app__link(:to="$ml.get('lang_url') + '/app/' + app.slug + '/'")
            <svg width="39" height="39" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.4" cx="26.125" cy="26.875" r="25.125" transform="rotate(-90 26.125 26.875)" stroke="#BACFE6" stroke-width="2"/>
            </svg>
            <svg class="progress-active" width="39" height="39" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle class="progress-active__circle" opacity="0.4" cx="26.125" cy="26.875" r="25.125" transform="rotate(-90 26.125 26.875)" stroke="#BACFE6" stroke-width="2"/>
            </svg>
            <svg class="progress-arrow" width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3.5H0M10 3.5L7.32143 6M10 3.5L7.32143 1" stroke="#35343E" stroke-width="0.75"/>
            </svg>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'CardApp',
    data: function(){
        return {}
    },
    props: {
        app: {
            type: Object,
            default: () => {
                return {}
            }
        },
        light: {
            type: Boolean
        }
    },
    computed: {
        ...mapGetters([
            'getCategoryById'
        ])
    }
}
</script>

<style lang="scss" scoped>
    .app {
        display: flex;
        align-items: center;
        // max-width: 331px;
        // margin-top: 33px;
        // margin-bottom: 90px;
        position: relative;
        padding-bottom: 18px;

        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 87%;
            height: 1px;
            background: rgba(206, 219, 231, 0.26);
        }

        &:last-child {
            &:after {
                display: none;
            }
        }

        &__avatar {
            flex-shrink: 0;
            width: 58px;
            height: 58px;
            border-radius: 50%;
            background-size: cover;
            background-position: center;
            overflow: hidden;
            margin-right: 15px;
        }

        &__id {
            color:#37393E;

            &.light {
                color: #fff;
            }
        }

        &__type {
            display: inline-block;
            font-family: 'Roboto';
font-weight: normal;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 23px;
            opacity: 0.43;
        }

        &__name {
            font-family: 'SFProDisplay';
font-weight: normal;
            font-size: 15px;
            line-height: 19px;
        }

        &__link {
            margin-left: auto;
            position: relative;
            width: 39px;
            height: 39px;

            @media screen and (min-width: 1200px) {

                &:hover {
                    .progress-active {
                        opacity: 1;

                        &__circle {
                            stroke: #7FA3CA;
                            stroke-dasharray: 200;
                            animation: progress-btn .5s ease;
                        }
                    }
                }
            }
        }
    }
</style>


