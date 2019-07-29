<template lang="pug">
    .block(data-aos="fade-up")
        .block__list
            card-app(v-for="(item, index) in list" :key="index" :app="getAppById(item.ID) || {}")
</template>

<script>
    import CardApp from '../smallBlocks/cardApp.vue';
import { mapGetters } from 'vuex';

    export default {
        name: 'BlockList',
        props: {
            list: Array
        },
        data: function(){
            return {}
        },
        computed: {
            ...mapGetters([
                'getAppById'
            ])
        },
        components: {
            'card-app': CardApp
        }
    }
</script>

<style lang="scss" scoped>
    .block {
        display: inline-block;
        max-width: 640px;
        width: 100%;
        margin-bottom: 40px;

        &__list {
            width: 100%;
            background: #FFFFFF;
            border: 1px solid rgba(0, 0, 0, 0.02);
            box-sizing: border-box;
            box-shadow: 0px 4px 29px rgba(52, 59, 76, 0.05);
            border-radius: 6px;
            padding: 27px 35px 0 35px;
        }
    }

    .app {
        margin-bottom: 14px;
        padding-bottom: 23px;

        &:after {
            bottom: 4px;
        }
    }

    .social-block {
        margin-top: 26px;    
    }

    @media (max-width: 1200px) {
        .block {
            max-width: 600px;
        }
    }

    @media (max-width: 960px) {
        .block {
            max-width: 100%;
        }

        .social-block {
            justify-content: center;
        }
    }

    @media (max-width: 640px) {
        .block {

            &__list {
                padding: 31px 30px 0 31px;
            }
        }

        .social-block {
            margin-top: 14px;
            justify-content: center;

            &__share {
                margin-bottom: 0 !important;
                margin-right: 20px !important;
            }
        }
    }
</style>