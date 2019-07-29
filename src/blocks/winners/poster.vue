<template lang="pug">
    .poster(data-aos="fade")
        widget
        .wrapper
            h1.poster__title(data-aos="fade-up" v-html="page.title")
            .poster__subtitle(data-aos="fade-up" data-aos-delay="200" v-html="page.description")
            .poster__links
                button.poster__link(v-for="(card, index) in list" :key="index" v-html="card.title.rendered" @click="scrollTo(card.slug)")
                //- router-link.poster__link(to="#application") Application of the week
                //- router-link.poster__link(to="#recorders") Top Recorders 2019
</template>

<script>
    import Widget from '../includes/widget/widget.vue';

    export default {
        name: 'Poster',
        props: {
            list: Array,
            page: Object
        },
        data: function(){
            return {}
        },
        methods: {
            scrollTo(slug) {
                let el = document.getElementById(slug);
                var rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                let top = rect.top + scrollTop - 30;
                window.scrollTo({
                    top: top,
                    behavior: "smooth"
                });
            }
        },
        components: {
            'widget': Widget,
        },
    }
</script>

<style lang="scss" scoped>
    .widget {
        widows: 58%;
        height: 85%;
        position: absolute;
        z-index: -1;
        right: -12.5%;
        top: 0;
    }
    .poster {
        background: linear-gradient(180deg, #EAF1FC -4.24%, #F8FAFF 86.01%), url('../../assets/img/application-poster-bg.png');
        position: relative;
        z-index: 2;
        margin: 10px 10px 0 10px;
        border-radius: 8px 8px 0 0;
        padding: 157px 0 88px 0;
        overflow-x: hidden;
        // overflow-y: visible;

        &__title {
            font-family: 'SFProDisplay';
            font-weight: 700;
            font-size: 45px;
            line-height: 59px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #3D4950;
            max-width: 411px;
            margin-bottom: 16px;
            letter-spacing: 0.9px;
            padding-left: 9px;

            /deep/ span {
                color: rgba(53, 127, 219, 1);
                position: relative;
                z-index: 2;
                display: inline-block;

                &:after {
                    content: '';
                    position: absolute;
                    z-index: -1;
                    bottom: 3px;
                    left: 0;
                    width: 100%;
                    height: 16px;
                    background: #F8FAFE;
                    opacity: 0.8;
                    border-radius: 3px;
                }
            }
        }

        &__subtitle {
            font-family: 'Roboto';
            font-weight: 300;
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 25px;
            color: #3D4950;
            opacity: 0.7;
            max-width: 402px;
            margin-bottom: 84px;
            padding-left: 5px;
            // letter-spacing: -0.3px;
        }

        &__links {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 9px;
        }

        &__link {
            font-family: 'SFProDisplay';
            font-weight: normal;
            font-size: 15px;
            line-height: 19px;
            color: #3D4950;
            margin-right: 36px;
            opacity: 0.45;
            transition: .3s all ease;
            position: relative;
            padding-bottom: 3px;

            &:hover {
                opacity: .8;

                // &:after {
                //     opacity: 1;
                // }
            }

            // &:after {
            //     content: '';
            //     width: 100%;
            //     height: 1px;
            //     position: absolute;
            //     z-index: 1;
            //     bottom: 0;
            //     left: 0;
            //     background: rgba(53, 127, 219, 0.16);
            //     opacity: 0;
            //     transition: .3s all ease;
            // }

            &:before {
                content: '';
                width: 0;
                height: 1px;
                position: absolute;
                z-index: 1;
                bottom: 0;
                left: 0;
                background: rgba(53, 127, 219, 0.47);
                transition: 0.5s all ease;
                opacity: 0;
            }

            &.active:hover:before {
                width: 100%;
                opacity: 1;
            }
        }
    }

    @media (max-width: 960px) {
        .poster {
            padding: 110px 0 0 0;

            &__title {
                text-align: center;
                margin-left: auto;
                margin-right: auto;
            }

            &__subtitle {
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 45px;
            }

            &__links {
                display: none;
            }
        }

        .widget {
            height: 100%;
        }
    }

    @media (max-width: 640px) {
        .poster {
            padding-top: 108px;
            // padding-bottom: 36px;
            padding-bottom: 0;

            &__title {
                font-size: 36px;
                line-height: 43px;
                margin-bottom: 18px;
            }

            &__subtitle {
                margin-bottom: 37px;
            }
        }

        .widget {
            right: -40%;
        }
    }
</style>


