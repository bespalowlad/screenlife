<template lang="pug">
    article.card.card-bg-small(data-aos="fade-up" :style="{backgroundImage: 'url(\"' + (card.acf ? card.acf.preview.url : '') + '\")'}")
        .card__hash(:style="{color: card.acf ? card.acf.settings.feed_color_label : '#FFFFFF'}" v-html="card.acf ? card.acf.content.label : ''")
        .card__content
            h3.card__title(v-html="card.title ? getTitle : ''")
            p.card__desc(v-html="card.acf ? ellipsis(getContent, contentLength) : ''")
            router-link.card__link(:to="$ml.get('lang_url') + '/feed/' + card.slug + '/'") {{ $ml.get('btns.more_details') }}
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'Card',
    data: function() {
        return {
            title: '',
            titleLength: 18,
            content: '',
            contentLength: 50,
        }
    },
    props: {
        card: Object
    },
    computed: {
        ...mapGetters([
            'getFeedCategoryById'
        ]),
        getContent() {
            return this.card.acf.content.excerpt;
        },
        getTitle() {
            return this.card.title.rendered;
        }
    },
    mounted(){
        this.getQuantitySymbols();
        window.addEventListener('resize', this.getQuantitySymbols);
    },
    methods: {
        getQuantitySymbols() {
            if(document.documentElement.clientWidth > 960) {
                this.contentLength = 50;
                this.titleLength = 18;
            } else {
                this.contentLength = 74;
                this.titleLength = 18;
            }
        },
        ellipsis(value, count) {
            if(value.length > count) {
                value = value.substr(0, count);
                return value + '...'
            } else {
                return value;
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    .card {
        background-repeat: no-repeat;
        background-position: center top;
        background-size: cover;
        height: 405px;
        box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.08);
        border-radius: 6px;
        display: block;
        overflow: hidden;
        // margin-bottom: 23px;
        position: relative;
        // width: 32.02%;
        width: 383px;
        padding: 0 32px 0 32px;
        text-align: center;
        transition: all .5s ease;
        font-size: 0;

        @media screen and (min-width: 1200px) {
            &:hover {
                box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.13);
            }
        }

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

        &:before {
            content: "";
            display: inline-block;
            vertical-align: middle;
            height: 100%;
        }

        &__hash {
            font-family: 'SFProDisplay';
            font-weight: normal;
            font-size: 15px;
            line-height: 22px;
            position: absolute;
            left: 0;
            width: 100%;
            text-align: center;
            top: 19px;
        }

        &__content {
            color: #FFFFFF;
            max-width: 100%;
            position: relative;
            display: inline-block;
            vertical-align: middle;
        }

        &__title {
            font-family: 'SFProDisplay';
            font-weight: 600;
            margin-bottom: 12px;
            font-size: 26px;
            line-height: 1.2;
            letter-spacing: -0.6px;
        }

        &__desc {
            font-family: 'Roboto';
            font-weight: normal;
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 22px;
            margin-bottom: 25px;
        }

        &__link {
            width: 139px;
            height: 40px;
            box-sizing: border-box;
            border-radius: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-transform: uppercase;
            font-family: 'SFProDisplay';
            font-weight: 600;
            font-size: 10px;
            line-height: 19px;
            letter-spacing: 1px;
            cursor: pointer;
            margin-left: auto;
            margin-right: auto;
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.51);
            color: #fff;
            transition: border-color .5s ease;
            // position: absolute;
            // left: 50%;
            // bottom: 88px;
            // transform: translateX(-50%);

            @media screen and (min-width: 1200px) {
                &:hover {
                    border-color: #FFFBFB;
                }
            }
        }
    }

    @media (max-width: 1200px) {
        .card {
            width: 290px;
        }
    }

    @media screen and (max-width: 1024px) {
        .card {
            padding: 0 24px;

            &__title {
                margin-bottom: 10px;
            }

            &__desc {
				margin-bottom: 15px;
			}
        }
    }

    @media (max-width: 960px) {
        .card {
            width: 48%;
        }
    }

    @media (max-width: 640px) {
        .card {
            height: 400px;
            width: 100%;
            padding: 0 20px 0 20px;

            &__content {
                max-width: 100%;
                margin-right: auto;
                margin-left: auto;
            }
        }
    }

    @media (max-width: 375px) {
        // .card {
        //     padding: 0 20px 0 20px;
        // }
    }

    @media screen and (max-width: 350px) {
        .card {
            padding-left: 15px;
            padding-right: 15px;
        }
    }
</style>


