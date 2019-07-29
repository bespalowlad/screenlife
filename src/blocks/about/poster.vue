<template lang='pug'>
    .poster(data-aos="fade")
        .wrapper
            .poster__title(v-html="page.poster ? page.poster.info.title : ''")
            .poster__gallery.gallery
                .gallery__item(:style="{backgroundImage: 'url(\"' + (page.poster ? page.poster.photos[0].sizes.large : '') + '\")'}" data-aos="fade-up")
                .gallery__item.offset(:style="{backgroundImage: 'url(\"' + (page.poster ? page.poster.photos[1].sizes.large : '') + '\")'}" data-aos="fade-up")
                .gallery__item(:style="{backgroundImage: 'url(\"' + (page.poster ? page.poster.photos[2].sizes.large : '') + '\")'}" data-aos="fade-up")
            //- carousel(:slides="slides ? slides : []")
            .swiper-outer
                swiper(v-if="getWindowWidth <= 960 && page.poster && page.poster.photos.length" ref="mySwiper" :options="swiperOption")
                    swiper-slide
                        .slide(:style="{backgroundImage: 'url(\"' + (page.poster ? page.poster.photos[0].sizes.large : '') + '\")'}")
                    swiper-slide
                        .slide(:style="{backgroundImage: 'url(\"' + (page.poster ? page.poster.photos[1].sizes.large : '') + '\")'}")
                    swiper-slide
                        .slide(:style="{backgroundImage: 'url(\"' + (page.poster ? page.poster.photos[2].sizes.large : '') + '\")'}")
                .swiper-pagination(v-if="getWindowWidth <= 960 && page.poster && page.poster.photos.length")
            block-text(:text="page.poster ? page.poster.info.description : ''")
</template>

<script>
    import BlockText from '../includes/contentBlocks/blockText.vue';
    import Carousel from '../../components/carousel.vue';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';

    export default {
        name: 'Poster',
        data: function(){
            return {
                swiperOption: {
                    effect: 'fade',
                    slidesPerView: 1,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    },
                    paginationClickable :true,
                    loop: true,
                    simulateTouch : false,
                },
                getWindowWidth: document.documentElement.clientWidth
            }
        },
        props: {
            page: Object
        },
        components: {
            'block-text': BlockText,
            'carousel': Carousel,
            // 'slick': Slick,
            swiper,
            swiperSlide
        },
        mounted(){
            window.addEventListener('resize', () => {
				this.getWindowWidth = document.documentElement.clientWidth;
			});
        }
    }
</script>

<style lang="scss" scoped>

    .block.text {
        margin-top: 77px;
    }

    .poster {
        padding-top: 141px;
        padding-bottom: 33px;
        background: url('../../assets/img/main-bg-pattern.png'),
                    linear-gradient(180deg, #EAF1FC -4.24%, #F8FAFF 86.01%);
        background-repeat: no-repeat;
        background-size: 30%, 100%;
        background-position: right top, center;
        position: relative;
        margin: 10px 10px 0 10px;
        border-radius: 8px 8px 0 0 ;
        overflow: hidden;

        &:before {
            content: '';
            width: 347px;
            height: 347px;
            background: #9E7DFD;
            mix-blend-mode: overlay;
            filter: blur(150px);
            position: absolute;
            left: 10.7%;
            top: -146px;
        }

        &__title {
            font-family: 'SFProDisplay';
            font-weight: 700;
            font-size: 45px;
            line-height: 59px;
            text-align: center;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #3D4950;
            max-width: 659px;
            margin: 0 auto 133px auto;
            position: relative;

            /deep/ span {
                color: #357FDB;
                position: relative;
                z-index: 2;
                display: inline-block;

                &:after {
                    content: '';
                    position: absolute;
                    z-index: -1;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 23px;
                    background: #F8FAFE;
                    opacity: 0.8;
                    border-radius: 3px;
                }
            }
        }
    }

    .gallery {

        white-space: nowrap;

        & > * {
            &:not(:last-child) {
                margin-right: 23px;
            }
        }

        &__item {
            display: inline-block;
            width: 32%;
            position: relative;
            padding-bottom: 41%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

            &.offset {
                position: relative;
                bottom: 30px;
            }

            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
    }

    .block {
        margin-left: auto;
        margin-right: auto;
        margin-top: 84px;
    }

    @media (max-width: 1200px) {
        .poster {

        }

        .gallery {
            & > * {
                &:not(:last-child) {
                    // margin-right: 18px;
                }
            }
        }
    }

    @media (max-width: 960px) {

        /deep/ .swiper-container {
            margin-bottom: 50px;
            width: 100%;
        }

        .slider {
            width: 100%;
        }

        .gallery {
            display: none;
        }

        .poster {
            &__title {
                margin-bottom: 80px;
                font-size: 40px;
                max-width: 500px;
                margin-left: auto;
                margin-right: auto;
            }
        }

        .block.text {
            margin-top: 90px;
        }

        /deep/ .swiper-slide {
            overflow: visible;
            height: 450px;
        }

        .swiper-outer {
            position: relative;
        }

        .slide {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border-radius: 6px;
            transition: opacity .2s ease, transform .2s ease;
            background-size: cover;
            background-position: center;
        }

        /deep/ .swiper-slide-prev {
            // transform: translate3d(-20px, 0, 1px) !important;
            left: 0 !important;
            opacity: 1 !important;
            // left: 0 !important;

            .slide {
                transform: translate3d(-55px, 0, 1px) scale(.9);
                opacity: .3;
            }
        }

        /deep/ .swiper-slide-next {
            // transform: translate3d(20px, 0, 1px) !important;
            left: 0 !important;
            // left: 0 !important;
            // transform: scale(.8) !important;
            opacity: 1 !important;

            .slide {
                transform: translate3d(55px, 0, 1px) scale(.9);
                opacity: .3;
            }
        }

        /deep/ .swiper-slide-active {
            z-index: 1;
            left: 0 !important;

            .slide {
                transform: translate3d(0, 0, 1px) scale(1);
                opacity: 1;
            }
        }

        /deep/ .swiper-container {
            overflow: visible;
        }

        .swiper-pagination {
            width: 100%;
            bottom: -33px;

            /deep/ .swiper-pagination-bullet {
                margin: 0 6px;
                width: 6px;
                height: 6px;
                background-color: #90B8EA;
                opacity: 1;
                transition: opacity .3s ease;
                position: relative;
                outline: none;
                opacity: .7;

                &:before {
                    content: "";
                    width: 14px;
                    height: 14px;
                    border-radius: 50%;
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: rgba(#90B8EA, .25);
                    opacity: 0;
                    transition: opacity .3s ease;
                }
            }

            /deep/ .swiper-pagination-bullet-active {
                // background-color: #618DC5;
                opacity: 1;

                &:before {
                    opacity: 1;
                }
            }
        }
    }

    @media (max-width: 640px) {
        .carousel {
            width: 96%;
            height: 230px;
        }

        .block.text {
            margin-top: 68px;
            max-width: 344px;
        }

        .poster {
            padding-top: 109px;
            padding-bottom: 10px;

            &__title {
                max-width: 304px;
                margin-left: auto;
                margin-right: auto;
                font-size: 36px;
                line-height: 43px;
                margin-bottom: 55px;
            }
        }

        .wrapper {
            padding: 0 26px;
        }

        /deep/ .swiper-slide {
            height: 230px;
        }

        /deep/ .swiper-slide-prev {
            .slide {
                transform: translate3d(-38px, 0, 1px) scale(.85);
                opacity: .3;
            }
        }

        /deep/ .swiper-slide-next {
            .slide {
                transform: translate3d(38px, 0, 1px) scale(.85);
                opacity: .3;
            }
        }
    }
</style>


