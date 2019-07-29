<template lang="pug">
    article.card.card-bg-wave(data-aos="fade-up" :style="{backgroundImage: 'url(\"' + card.background.url + '\")'}")
        .card__content
            .card__avatar(:style="{backgroundImage: 'url(\"' + getAppById(card.field1[0].ID).acf.info.logo.sizes.medium + '\")'}")
            span.card__hash(v-html="getCategoryById(getAppById(card.field1[0].ID).apps_category[0]).name")
            h3.card__title(v-html="getAppById(card.field1[0].ID).title.rendered")
            router-link.card__link(:to="$ml.get('lang_url') + '/apps/' + card.field1[0].post_name + '/'")
                span {{ $ml.get('btns.more_details') }}
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'Card',
    props: {
        card: Object
    },
    computed: {
        ...mapGetters([
            'getAppById',
            'getCategoryById'
        ])
    },
    data: function() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
    .card {
        max-width: 676px;
        width: 100%;
        height: 306px;
        margin-bottom: 50px;
        position: relative;
        border-radius: 6px;
        text-align: center;

        &:before {
            content: '';
            position: absolute;
            z-index: 0;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('../../../assets/img/wave.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }

        &__content {
            position: relative;
            z-index: 2;
            width: 100%;
            height: 100%;
            padding: 37px;
        }

        &__avatar {
            width: 90px;
            height: 90px;
            margin: 0 auto 18px auto;
            border-radius: 50%;
            background-size: cover;
            background-position: center;

            img {
                width: 100%;
                height: 100%;
            }
        }

        &__hash {
            font-family: 'SFProDisplay';
            font-weight: normal;
            font-size: 15px;
            line-height: 22px;
            color: #59DDCD;
            margin-bottom: 5px;
        }

        &__title {
            font-family: 'SFProDisplay';
            font-weight: 600;
            // margin-bottom: 12px;
            font-size: 33px;
            line-height: 36px;
            letter-spacing: -0.6px;
            color: #fff;
        }

        &__link {
            width: 139px;
            height: 40px;
            background: #FFFFFF;
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
            // position: relative;
            position: absolute;
            left: 50%;
            bottom: 38px;
            transform: translateX(-50%);
            transition: opacity .5s ease;

            span {
                position: relative;
                z-index: 2;
            }

            @media screen and (min-width: 1200px) {
                &:hover {
                    opacity: .8;
                }
            }
        }
    }

    @media (max-width: 1200px) {
        .card {
            max-width: 600px;
        }
    }

    @media (max-width: 960px) {
        .card {
            max-width: 100%;
            height: 289px;

            &__content {
                padding: 61px 60px;
            }

            &__avatar {
                margin-bottom: 27px;
            }

            &__title {
                font-size: 30px;
                line-height: 36px;
            }

            &__link {
                display: none;
            }
        }
    }

    @media (max-width: 640px) {
        .card {
            margin-bottom: 31px;
        }
    }

    @media (max-width: 414px) {
        .card {
            &__content {
                padding: 61px 20px;
            }
        }
    }
</style>


