<template lang="pug">
    .poster(:style="{backgroundImage: 'url(\"' + (page.acf ? page.acf.preview.url : '') + '\")'}" data-aos="fade")
        .wrapper
            .poster__content
                h1.poster__title(data-aos="fade-up" v-html="page.title ? page.title.rendered : ''")
                p.poster__desc(data-aos="fade-up" data-aos-delay="200" v-html="page.acf ? page.acf.content.excerpt : ''")
            //- card-app(light = true)
            .poster__application(v-if="page.acf && page.acf.content.apps_1.length === 1")
                .poster__avatar(:style="{backgroundImage: 'url(\"' + (getAppById(page.acf.content.apps_1[0].ID).acf.info.preview.sizes.thumbnail) + '\")'}")
                .poster__id
                    span.poster__type(v-html="getCategoryById(getAppById(page.acf.content.apps_1[0].ID).apps_category[0]).name")
                    p.poster__name(v-html="getAppById(page.acf.content.apps_1[0].ID).title.rendered")
                router-link.poster__link(:to="$ml.get('lang_url') + '/app/' + page.acf.content.apps_1[0].post_name + '/'")
                    <svg class="progress" width="39" height="39" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.4" cx="26.125" cy="26.875" r="25.125" transform="rotate(-90 26.125 26.875)" stroke="#BACFE6" stroke-width="2"/>
                    </svg>
                    <svg class="progress-active" width="39" height="39" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle class="progress-active__circle" opacity="0.4" cx="26.125" cy="26.875" r="25.125" transform="rotate(-90 26.125 26.875)" stroke="#BACFE6" stroke-width="2"/>
                    </svg>
                    <svg class="progress-arrow" width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3.5H0M10 3.5L7.32143 6M10 3.5L7.32143 1" stroke="#35343E" stroke-width="0.75"/>
                    </svg>
        social-block(
            :light="true"
            :fb="'https://www.facebook.com/sharer/sharer.php?u=' + getCurrentUrl + '&t=' + (page.title ? page.title.rendered : '')"
            :tw="'https://twitter.com/share?url=' + getCurrentUrl + '&text=' + (page.title ? page.title.rendered : '')"
            :vk="'http://vk.com/share.php?url=' + getCurrentUrl + '&title=' + (page.title ? page.title.rendered : '') + '&image=' + (page.acf ? page.acf.preview.sizes.large : '')"
            :url="getCurrentUrl"
        )
</template>



<script>
    import CardApp from '../includes/smallBlocks/cardApp.vue';
    import SocialBlock from '../includes/smallBlocks/socialBlock.vue';
    import { mapGetters } from 'vuex';

    export default {
        name: 'Poster',
        data: function(){
            return {}
        },
        props: {
            page: Object,
            app: Object
        },
        components: {
            'card-app': CardApp,
            'social-block': SocialBlock
        },
        computed: {
            ...mapGetters([
                'getAppById',
                'getCategoryById'
            ]),
            getCurrentUrl() {
                return encodeURI(window.location.href);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .poster {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
        z-index: 1;
        // margin: 10px 10px 0 10px;
        width: calc(100% - 20px);
        margin-left: 10px;
        margin-right: 0;
        margin-top: 10px;
        border-radius: 8px 8px 0 0 ;
        padding: 157px 0 33px 0;
        overflow: hidden;

        &:before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: -1;
            pointer-events: none;
            top: 0;
            left: 0;
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 2.63%, rgba(0, 0, 0, 0) 69.97%), linear-gradient(0deg, rgba(0, 0, 0, 0.13), rgba(0, 0, 0, 0.13));
        }

        &__content {
            max-width: 407px;
            color: #FFFFFF;
            padding-bottom: 40px;
            position: relative;

            // &:after {
            //     content: '';
            //     position: absolute;
            //     left: 0;
            //     bottom: 0;
            //     width: 82.3%;
            //     height: 1px;
            //     background: rgba(255, 255, 255, 0.06);
            // }
        }

        &__title {
            font-family: 'SFProDisplay';
            font-weight: 700;
            font-size: 45px;
            line-height: 59px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #FFFFFF;
            margin-bottom: 17px;
        }

        &__desc {
            font-family: 'Roboto';
            font-weight: 300;
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 25px;
            letter-spacing: -0.1px;
        }

        &__application {
            display: flex;
            align-items: center;
            max-width: 331px;
            // margin-top: 33px;
            padding-top: 33px;
            margin-bottom: 78px;
            position: relative;

            &:after {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 82.3%;
                height: 1px;
                background: rgba(255, 255, 255, 0.06);
            }
        }

        &__avatar {
            width: 58px;
            height: 58px;
            border-radius: 50%;
            background-size: cover;
            background-position: center;
            overflow: hidden;
            margin-right: 15px;
        }

        &__id {
            margin-bottom: 5px;
        }

        &__type {
            display: inline-block;
            font-family: 'Roboto';
            font-weight: normal;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 23px;
            color: #FFFFFF;
            opacity: 0.43;
        }

        &__name {
            font-family: 'SFProDisplay';
            font-weight: normal;
            font-size: 15px;
            line-height: 19px;
            color: #FFFFFF;
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

            .progress circle {
                stroke: #fff;
                opacity: 0.23;
            }

            .progress-active .progress-active__circle {
                stroke: #fff;
                opacity: 0.6;
            }

            .progress-arrow path {
                stroke: #fff;
            }
        }
    }

    .social-block {
        justify-content: flex-end;
        margin-right: 72px;
    }

    @media (max-width: 960px) {
        .poster {
            padding-top: 132px;

            &:before {
                background: rgba(0, 0, 0, .3);
            }

            &__content {
                margin-left: auto;
                margin-right: auto;

                &:after {
                    width: 100%;
                }
            }

            &__title {
                font-family: 'SFProDisplay';
                font-weight: 700;
                font-size: 36px;
                line-height: 43px;
                text-align: center;
                margin-bottom: 30px;
            }

            &__desc {
                font-size: 15px;
                line-height: 25px;
                text-align: center;
            }
            
            &__application {
                max-width: 407px;
                margin-left: auto;
                margin-right: auto;
            }
        }

        .social-block {
            justify-content: center;
            margin-right: 0;
        }
    }

    @media (max-width: 640px) {
        .poster {
            padding-top: 122px;
            padding-bottom: 24px;

            &__content {
                padding-bottom: 26px;
            }
            
            &__title {
                max-width: 304px;
                margin: 0 auto 18px auto;
            }

            &__desc {
                max-width: 343px;
                margin-left: auto;
                margin-right: auto;
            }

            &__application {
                max-width: 311px;
                margin-bottom: 76px;
                margin-top: 35px;
            }
        }

        .social-block {
            display: flex;
            flex-direction: column;
            justify-content: center;

            &__share {
                
            }
        }
    }
</style>


