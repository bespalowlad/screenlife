<template lang="pug">
    .widget(:class="[static ? 'static' : '']")
        .widget__wrapper
            .col.col-1
                card-bg(v-for="(index, item) in 8" :key="index").card
            .col.col-2
                card-orange(v-for="(index, item) in 8" :key="index").card
            .col.col-3
                card-blue(v-for="(index, item) in 8" :key="index").card
</template>

<script>
    import CardBg from './cardBg.vue';
    import CardOrange from './cardOrange.vue';
    import CardBlue from './cardBlue.vue';
    import CardBgSmall from '../../includes/card/card-bg-small.vue';
    import CardDefault from '../../includes/card/card-default.vue';
    import CardSelection from '../../includes/card/card-selection.vue';
    import CardSelectionHeader from '../../includes/card/card-selection-header.vue';

    export default {
        name: 'Widget',
        data: function(){
            return {}
        },
        props: {
            static:{
                type: Boolean,
                default: false
            }
        },
        components: {
            'card-bg-small': CardBgSmall,
            'card-selection': CardSelection,
            'card-selection-header': CardSelectionHeader,
            'card-default': CardDefault,
            'card-bg': CardBg,
            'card-orange': CardOrange,
            'card-blue': CardBlue
        },
    }
</script>

<style lang="scss" scoped>
    .widget {
        position: relative;
        z-index: 1;
        opacity: 0.15;
        overflow: hidden;
        width: 58%;
        height: 100%;
        right: 0;

        &:before {
            content: '';
            position: absolute;
            z-index: 2;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg,transparent 60%, #F8FAFF 100%);
            background: -webkit-gradient(linear, top, bottom, color-stop(60%,rgba(256,256,256,0)), color-stop(100%,#F8FAFF)); /* Safari4+ */
            background: -webkit-gradient(linear, top, bottom, from(rgba(256, 256, 256, 0)), to(white), color-stop(0.8, #fff));
            background: -webkit-linear-gradient(270deg, rgba(256,256,256,0) 60%,#F8FAFF 100%); /* Safari5.1+ */
        }

        &__wrapper {
            display: flex;
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%,-50%) rotate(10deg);
            

            & > * {
                &:not(:last-child) {
                    margin-right: 10px;
                }
            }
        }

        &.static {

            &:before {
                display: none;
            }
            
            .col-1,
            .col-2,
            .col-3 {
                animation-name: none;
            }

            .widget__wrapper {
                transform: scale(0.8) translate(-50%,-50%) rotate(10deg);
            }
        }
    }

    .col {
        position: relative;
        transition: .3s all ease;
        will-change:transform;

        & > * {
            &:not(:last-child) {
                margin-bottom: 10px;
            }
        }

        &-1 {
            bottom: 500px;
            animation-name: col;
            animation-duration: 20s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }

        &-2 {
            bottom: 800px;
            animation: col;
            animation-delay: 0ms;
            animation-duration: 80s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }

        &-3 {
            bottom: 1000px;
            animation: col;
            animation-delay: 0ms;
            animation-duration: 50s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
    }

    @keyframes col {
        from {
            transform: translate3d(0,0,1px);
        }
        to {
            transform: translate3d(0,50%,1px);
        }
    }

    @media (max-width: 1200px) {
        .widget {
            &__wrapper {
                transform: translate(-50%,-50%) scale(0.7) rotate(10deg);
            }
        }
    }

    @media (max-width: 960px) {
        .widget {
            width: 75%;
        }
    }

    @media (max-width: 640px) {
        .widget {
            width: 116%;
            right: -40%;

            &__wrapper {
                transform: translate(-50%, -50%) scale(0.65) rotate(7deg);
            }

            &.static {
                .widget__wrapper {
                    transform: scale(0.65) translate(-50%,-50%) rotate(7deg);
                }
            }
        }
    }

    @media (max-width: 375px) {
        .widget {
            width: 140%;
        }
    }
</style>


