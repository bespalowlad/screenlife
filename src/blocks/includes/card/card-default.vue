<template lang="pug">
    article.card.card-default(data-aos="fade-up")
        header.card__header(:class="{'card__header_no-label': !card.acf || !card.acf.content.label}" :style="{backgroundImage: 'url(\"' + (card.acf ? card.acf.preview.url : '') + '\")'}")
            .card__hash(:style="{color: card.acf ? card.acf.settings.feed_color_label : '#ffffff'}" v-html="card.acf ? card.acf.content.label : ''")
            .card__title(v-html="card.title ? getTitle : ''")
            //- template(v-if="isWinOrange || isWinBlue")
            //-     .card__trophie(:class="[isWinOrange?'card__trophie_orange':'',isWinBlue?'card__trophie_blue':'']")
            //-         .award
            //-             .award__icon
            //-                 img(src="@/assets/img/trophie_blue.svg")
        .card__body
            p.card__text(v-html="card.acf ? ellipsis(getContent, contentLength) : ''")
            router-link(:to="$ml.get('lang_url') + '/app/' + (card.acf ? card.acf.content.apps_1[0].post_name + '/' : '')").card__link {{ $ml.get('btns.more_details') }}
</template>

<script>
export default {
    name: 'Card',
    data: function(){
        return {
            title: '',
            titleLength: 25,
            content: '',
            contentLength: 170,
        }
    },
    props: {
        card: Object
    },
    computed: {
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
            if(document.documentElement.clientWidth > 375) {
                this.contentLength = 170;
                this.titleLength = 25;
            } else {
                this.contentLength = 130;
                this.titleLength = 20;
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
        height: 405px;
        box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.08);
        border-radius: 6px;
        display: block;
        overflow: hidden;
        // width: 32.02%;
        width: 383px;
        transition: all .5s ease;
        position: relative;
        font-size: 0;

        @media screen and (min-width: 1200px) {
            &:hover {
                box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.13);
            }
        }

        &__header {
            text-align: center;
            height: 178px;
            position: relative;
            // background: url('../../../assets/uploads/card-bg-4.png'), linear-gradient(142.31deg, #FFBC77 6.92%, #FF8284 91.53%);
            background-color: #a1a1a1;
            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;
            padding: 0 32px;
            padding-top: 22px;

            &_no-label {
                padding-top: 0;
            }

            &:before {
                content: "";
                display: inline-block;
                vertical-align: middle;
                height: 100%;
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
        }

        &__hash {
            font-family: 'SFProDisplay';
            font-weight: normal;
            font-size: 15px;
            line-height: 22px;
            color: #FF6433;
            display: inline-block;
            position: absolute;
            width: 100%;
            left: 0;
            text-align: center;
            top: 19px;
        }

        &__title {
            display: inline-block;
            vertical-align: middle;
            font-family: 'SFProDisplay';
            font-weight: 600;
            // font-size: 33px;
            // line-height: 36px;
            color: #FFFFFF;
            width: 100%;
            font-size: 23px;
            line-height: 1;
        }

        &__body {
            padding: 32px 48px 42px 48px;
            text-align: center;
            // position: relative;
        }

        &__text {
            font-family: 'Roboto';
            font-weight: 300;
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 22px;
            color: #35343E;
            opacity: 0.7;
            margin-bottom: 22px;

            min-height: 86px;
        }

        &__link {
            width: 139px;
            height: 40px;
            background: transparent;
            border: 1px solid rgba(52, 59, 76, 0.2);
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
            color: #37393E;
            cursor: pointer;
            margin: 0 auto;
            transition: border-color .5s ease;
            position: absolute;
            left: 50%;
            bottom: 42px;
            transform: translateX(-50%);

            @media screen and (min-width: 1200px) {
                &:hover {
                    border-color: rgba(52, 59, 76, 0.5);
                }
            }
        }
        &__trophie {
            position: absolute;
            right: -6px;
            top: 24px;
            width: 100px;
            height: 100px;
            &_orange {
                .award {
                    &__icon {
                        background: linear-gradient(135deg, #E8AA6B 0%,#F55A43 100%);
                        &:before {
                            background: linear-gradient(135deg, #FFBC77 0%,#FE6C56 100%);
                        }
                    }
                }
            }
            &_blue {
                .award {
                    &__icon {
                        background: linear-gradient(135deg, #83A5FC 0%,#3182E7 100%);
                        &:before {
                            background-color: #E8F0FF;
                        }
                    }
                }
            }
        }
    }

    .award {
        position: relative;
        display: inline-block;
        margin-bottom: 95px;
        margin-left: 11px;
        &__icon {
            position: relative;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            z-index: 2;
            img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 13px;
                height: 14px;
            }
            &:before {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: calc(100% + 18px);
                height: calc(100% + 18px);
                border-radius: 50%;
                opacity: .23;
            }
        }
    }

    @media (max-width: 1200px) {
        .card {
            width: 290px;

            &__body {
                padding: 32px 30px 42px 30px;
            }

            &__link {
                bottom: 35px;
            }

            &__header {
                padding-left: 20px;
                padding-right: 20px;
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

            &__header {
                height: 183px;
            }

            &__title {
                // margin-left: 0;
                // font-size: 33px;
                // line-height: 36px;
                // padding-top: 13px;
            }

            &__body {
                padding-top: 30px;
                padding-left: 20px !important;
                padding-right: 20px !important;
            }

            &__text {
                max-width: 287px;
                margin-left: auto;
                margin-right: auto; 
                letter-spacing: -0.2px;
            }
        }
    }

    @media screen and (max-width: 350px) {
        .card {
            &__header {
                padding-left: 15px;
                padding-right: 15px;
            }
        }
    }
</style>


