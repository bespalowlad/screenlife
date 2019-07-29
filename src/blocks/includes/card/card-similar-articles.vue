<template lang="pug">
    article.card.card-articles(data-aos="fade-up")
        header.card__header(:style="{backgroundImage: 'url(\"' + (list[0] ? list[0].acf.preview.sizes['medium_large'] : '') + '\")'}")
            h3.card__title {{ $ml.get('feeds.similar_articles') }}
        .card__body
            router-link.card__article(v-for="(item, index) in list" :key="index" :to="$ml.get('lang_url') + '/feed/' + item.slug + '/'")
                .card__avatar(:style="{backgroundImage: 'url(\"' + item.acf.preview.sizes.thumbnail + '\")'}")
                .card__id
                    span.card__type(v-html="getFeedCategoryById(item.feed_category[0]).name")
                    p.card__name(v-html="ellipsis(item.title.rendered, 50)")
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'CardSimilarArticles',
    props: {
        list: Array
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
    },
    computed: {
        ...mapGetters([
            'getFeedCategoryById'
        ])
    },
    data: function(){
        return {}
    }
}
</script>

<style lang="scss" scoped>
    .card {
        width: 353px;
        // height: 415px;
        box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.08);
        border-radius: 6px;
        display: inline-block;
        overflow: hidden;
        position: relative;
        text-align: center;
        transition: all .5s ease;
        color: #fff;

        @media screen and (min-width: 1200px) {
            &:hover {
                box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.13);
            }
        }

        &__header {
            height: 131px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: relative;
            z-index: 1;

             &:before {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: -1;
                pointer-events: none;
                top: 0;
                left: 0;
                background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.58) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), 
            }
        }

        &__title {
            display: block;
            position: absolute;
            top: calc(50% - 3px);
            left: 50%;
            transform: translate(-50%,-50%);
            font-family: 'SFProDisplay';
            font-weight: 700;
            font-size: 30px;
            line-height: 36px;
            // white-space: nowrap;
            width: 100%;
            padding: 0 10px;
        }

        &__body {
            padding: 26px;
        }

        &__article {
            display: flex;
            // align-items: flex-start;
            align-items: center;
            margin-bottom: 25px;
            padding-bottom: 10px;

            &:last-child {
                margin-bottom: 0;
                padding-bottom: 0;
            }
        }

        &__avatar {
            margin-right: 21px;
            width: 52px;
            height: 52px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            
            background-size: cover;
            background-position: center;
            border-radius: 50%;

            img {
                width: 100%;
                height: 100%;
            }
        }

        &__id {
            color: #37393E;
            text-align: left;
            position: relative;
            bottom: 5px;
        }

        &__type {
            font-family: 'Roboto';
            font-weight: normal;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 23px;
            opacity: 0.43;
        }

        &__name {
            font-family: 'SFProDisplay';
            font-weight: normal;
            font-size: 15px;
            line-height: 19px;
        }
    }

    @media (max-width: 1200px) {
        .card {
            width: 300px;
            // height: 435px;

            &__avatar {
                flex-shrink: 0;
            }
        }
    }

    @media (max-width: 960px) {
        .card {
            // height: 415px;
            width: 47.5%;
        }
    }

    @media (max-width: 640px) {
        .card {
            // height: 453px;

            &__avatar {
                width: 58px;
                height: 58px;
                margin-right: 15px;
            }

            &__body {
                padding-top: 36px;
            }
        }
    }
</style>


