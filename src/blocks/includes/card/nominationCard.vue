<template lang="pug">
    .card(data-aos="fade-up")
        span.card__hash {{ $ml.get('awards.nomination') }}
        .card__title(v-html="article.acf.info.nomination")
        .card__content
            .card__avatar(:style="{backgroundImage: 'url(\"' + (app ? app.acf.info.logo.sizes.thumbnail : '') + '\")'}")
            .card__description
                p.card__name(v-html="app ? app.title.rendered : ''" :style="{color: color}")
                p.card__text(v-html="app ? ellipsis(app.acf.info.excerpt, 100) : ''")
        router-link.card__link(:to="$ml.get('lang_url') + '/awards/' + article.slug + '/'") {{ $ml.get('btns.open_more') }}
</template>

<script>
export default {
    name: 'NominationCard',
    data: function(){
        return {}
    },
    props: {
        app: Object,
        article: Object,
        color: String
    },
    methods: {
        ellipsis(value, count) {
            if (!value) return '';
            if(value.length > count) {
                value = value.substr(0,count);
                return value + '...'
            } else {
                return value;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        display: block;
        // width: 383px;
        // max-width: 383px;
        height: 307px;
        background: #FFFFFF;
        box-shadow: 0px 4px 33px rgba(52, 59, 76, 0.09);
        border-radius: 6px;
        padding: 25px 33px 34px 33px;
        position: relative;
        transition: all .5s ease;

        @media screen and (min-width: 1200px) {
            &:hover {
                box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.13);
            }
        }

        &__hash {
            font-family: 'Roboto';
            font-weight: normal;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 23px;
            text-align: center;
            color: #37393E;
            opacity: 0.43;
            display: block;
            margin: 0 auto -12px auto;
            text-align: center;
        }

        &__title {
            font-family: 'SFProDisplay';
            font-weight: 600;
            font-size: 23px;
            line-height: 48px;
            text-align: center;
            color: #37393E;
            margin: 0 auto 15px auto;
            letter-spacing: -0.5px;
        }

        &__content {
            border-top: 1px solid rgba(206, 219, 231, 0.26);
            padding-top: 24px;
            display: flex;
        }

        &__description {
            // margin-top: -14px;
        }

        &__name {
            font-family: 'SFProDisplay';
            font-weight: 600;
            font-size: 16px;
            // line-height: 48px;
            line-height: normal;
            color: #FF8284;
            letter-spacing: -0.5px;
            // margin-bottom: -7px;
            margin-bottom: 10px;
        }

        &__text {
            font-family: 'Roboto';
            font-weight: 300;
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 20px;
            color: #35343E;
            opacity: 0.7;
        }

        &__avatar {
            margin-right: 20px;
            width: 72px;
            height: 72px;
            flex-shrink: 0;
            overflow: hidden;
            border-radius: 50%;
            background-size: cover;
            background-position: center;

            // img {
            //     width: 100%;
            //     height: 100%;
            //     border-radius: 50%;
            // }
        }

        &__link {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 34px;
            width: 139px;
            height: 40px;
            border: 1px solid rgba(52, 59, 76, 0.2);
            box-sizing: border-box;
            border-radius: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'SFProDisplay';
font-weight: 600;
            font-size: 10px;
            line-height: 19px;
            text-align: center;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #37393E;
            transition: border-color .5s ease;

            @media screen and (min-width: 1200px) {
                &:hover {
                    border-color: rgba(52, 59, 76, 0.5);
                }
            }
        }

        &.application {
            .card__name {
                color: #357FDB;
            }
        }
    }

    @media (max-width: 1200px) {
        .card {
            // width: 304px;
            padding: 25px 33px;

            &__title {
                margin-bottom: 0;
            }

            &__link {
                bottom: 25px;
            }
        }
    }

    @media (max-width: 960px) {
        .card {
            width: 100%;
        }
    }

    @media (max-width: 640px) {
        .card {
            width: 100%;
            padding: 25px 27px;

            &__title {
                margin-bottom: 15px;
            }

            &__link {
                bottom: 34px;
            }
        }
    }

    @media (max-width: 375px) {
        .card {
            padding: 25px 20px;
        }
    }
</style>


