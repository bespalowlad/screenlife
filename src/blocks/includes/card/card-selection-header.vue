<template lang="pug">
    article.card.card-selection-header(data-aos="fade-up")
        header.card__header(:style="{backgroundImage: 'url(\"' + (card.acf ? card.acf.preview.url : '') + '\")'}")
            .card__hash(:style="{color: card.acf ? card.acf.settings.feed_color_label : '#ffffff'}" v-html="card.acf ? card.acf.content.label : ''")
            .card__title(v-html="card.title ? card.title.rendered : ''")
        .card__body
            .card__choose(v-if="card.acf && card.acf.content.apps_2 && card.acf.content.apps_2[0] && getAppById(card.acf.content.apps_2[0].ID)")
                .card__img(:style="{backgroundImage: 'url(\"' + (getAppById(card.acf.content.apps_2[0].ID).acf.info.logo.sizes.thumbnail) + '\")'}")
                .card__text
                    span.card__type(v-html="getCategoryById(getAppById(card.acf.content.apps_2[0].ID).apps_category[0]).name")
                    p.card__name(v-html="card.acf.content.apps_2[0].post_title")
                router-link.card__link(:to="$ml.get('lang_url') + '/app/' + card.acf.content.apps_2[0].post_name + '/'")
                    <svg width="39" height="39" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.4" cx="26.125" cy="26.875" r="25.125" transform="rotate(-90 26.125 26.875)" stroke="#BACFE6" stroke-width="2"/>
                    </svg>
                    <svg class="progress-active" width="39" height="39" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle class="progress-active__circle" opacity="0.4" cx="26.125" cy="26.875" r="25.125" transform="rotate(-90 26.125 26.875)" stroke="#BACFE6" stroke-width="2"/>
                    </svg>
                    <svg class="progress-arrow" width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3.5H0M10 3.5L7.32143 6M10 3.5L7.32143 1" stroke="#35343E" stroke-width="0.75"/>
                    </svg>
            .card__choose(v-if="card.acf && card.acf.content.apps_2 && card.acf.content.apps_2[1]")
                .card__img(:style="{backgroundImage: 'url(\"' + (getAppById(card.acf.content.apps_2[1].ID).acf.info.logo.sizes.thumbnail) + '\")'}")
                .card__text
                    span.card__type(v-html="getCategoryById(getAppById(card.acf.content.apps_2[1].ID).apps_category[0]).name")
                    p.card__name(v-html="card.acf.content.apps_2[1].post_title")
                router-link(:to="$ml.get('lang_url') + '/app/' + card.acf.content.apps_2[1].post_name + '/'").card__link
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
    name: 'Card',
    data: function(){
        return {}
    },
    props: {
        card: Object
    },
    computed: {
        ...mapGetters([
            'getAppById',
            'getCategoryById'
        ])
    }
}
</script>

<style lang="scss" scoped>
    .card {
        height: 405px;
        box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.08);
        border-radius: 6px;
        display: block;
        overflow: hidden;
        // width: 32.02%;
        width: 383px;
        transition: all .5s ease;

        @media screen and (min-width: 1200px) {
            &:hover {
                box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.13);
            }
        }

        &__header {
            text-align: center;
            height: 178px;
            position: relative;
            margin-bottom: 37px;
            background-size: cover;
            background-position: center top;

            // &:before {
            //     content: "";
            //     display: block;
            //     position: absolute;
            //     width: 100%;
            //     height: 100%;
            //     top: 0;
            //     left: 0;
            //     background-color: rgba(0,0,0,.3);
            // }
        }

        &__hash {
            font-family: 'SFProDisplay';
            font-weight: normal;
            font-size: 15px;
            line-height: 22px;
            padding-top: 20px;
            display: inline-block;
            margin-left: 0;
            margin-bottom: 35px;
            color: #59DDCD;
        }

        &__title {
            margin-left: 0;
            margin-bottom: 0;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-family: 'SFProDisplay';
            font-weight: 600;
            font-size: 33px;
            line-height: 36px;
            color: #FFFFFF;
        }

        &__body {
            padding: 0 40px 37px 41px;
        }

        &__choose {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-bottom: 18px;
            padding-bottom: 19px;
            position: relative;

            &:after {
                content: '';
                position: absolute;
                bottom: 0;
                right: 0;
                width: calc(100% - 72px);
                height: 1px;
                background: rgba(206, 219, 231, 0.26);
            }

            &:last-child {
                &:after {
                    display: none;
                }
            }
        }

        &__img {
            flex-shrink: 0;
            margin-right: 15px;
            width: 58px;
            height: 58px;
            border-radius: 50%;
            display: inline-block;
            vertical-align: top;
            background-size: cover;
            background-position: center;
        }

        &__text {
            align-self: center;
        }

        &__type {
            font-family: 'Roboto';
            font-weight: 300;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: normal;
            color: #37393E;
            opacity: 0.43;
            margin-bottom: 8px;
        }

        &__name {
            font-family: 'SFProDisplay';
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            color: #37393E;
        }

        &__link {
            margin-left: auto;
            position: relative;
            cursor: pointer;
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

    @media (max-width: 1200px) {
        .card {
            width: 290px;

            &__body {
                padding-left: 32px;
                padding-right: 32px;
            }

            &__choose {
                &:after {
                    width: calc(100% - 72px);
                }
            }
        }
    }

    @media (max-width: 960px) {
        .card {
            width: 48%;

            &__choose {
                &:after {
                    width: calc(100% - 72px);
                }
            }
        }
    }

    @media (max-width: 640px) {
        .card {
            height: 400px;
            width: 100%;

            &__header {
                height: 182px;
                margin-bottom: 32px;
            }

            &__hash {
                padding-top: 18px;
            }

            &__body {
                padding: 0 33px 32px 33px;
            }

            &__choose {
                margin-bottom: 19px;

                &:after {
                    bottom: -2px;
                    width: calc(100% - 72px);
                }
            }
        }
    }
</style>


