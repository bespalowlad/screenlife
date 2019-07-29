<template lang="pug">
    .best-of-the-week
        .wrapper
            .best-of-the-week__title(data-aos="fade-up" v-html="page.feed ? page.feed.title : ''")
            .best-of-the-week__header(data-aos="fade-up" data-aos-delay="200")
                .best-of-the-week__subtitle(v-html="page.feed ? page.feed.description : ''")
                router-link(:to="$ml.get('lang_url') + '/apps/'").best-of-the-week__all {{ $ml.get('apps.see_all') }}
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.07087 9L4.78516 5L1.07087 1" stroke="#357FDB" stroke-width="1.6"/>
                    </svg>
            .best-of-the-week__list
                div(v-masonry item-selector=".card" gutter=".gutter-item" column-width="#test" transition-duration="0s")
                    .gutter-item
                    #test
                    //- card-bg-middle.card(v-masonry-tile data-aos="fade-up")
                    //- card-selection.card(v-masonry-tile data-aos="fade-up")
                    //- card-selection-header.card(v-masonry-tile data-aos="fade-up")
                    //- card-default.card(v-masonry-tile :bgImage="orangeBg" data-aos="fade-up")
                    //- card-bg-small.card(v-masonry-tile data-aos="fade-up")
                    //- card-bg-large.card(v-masonry-tile data-aos="fade-up")

                    template(v-for="item in feeds")
                        card-default.card(
                            data-aos="fade-up"
                            v-if="item.acf.settings.feed_card_type == '1'"
                            v-masonry-tile
                            :card="item"
                        )

                        card-bg-small.card(
                            data-aos="fade-up"
                            v-if="item.acf.settings.feed_card_type == '2'"
                            v-masonry-tile
                            :card="item"
                        )

                        card-bg-middle.card(
                            data-aos="fade-up"
                            v-if="item.acf.settings.feed_card_type == '3'"
                            v-masonry-tile
                            :card="item"
                        )

                        card-bg-large.card(
                            data-aos="fade-up"
                            v-if="item.acf.settings.feed_card_type == '4'" 
                            :card="item"
                            v-masonry-tile
                        )

                        card-selection-header.card(
                            data-aos="fade-up"
                            v-if="item.acf.settings.feed_card_type == '5'"
                            v-masonry-tile
                            :card="item"
                        )

                        card-selection.card(
                            data-aos="fade-up"
                            v-if="item.acf.settings.feed_card_type == '6'"
                            v-masonry-tile
                            :card="item"
                        )
</template>

<script>
import CardBgLarge from '../includes/card/card-bg-large.vue';
import CardBgMiddle from '../includes/card/card-bg-middle.vue';
import CardBgSmall from '../includes/card/card-bg-small.vue';
import CardDefault from '../includes/card/card-default.vue';
import CardSelection from '../includes/card/card-selection.vue';
import CardSelectionHeader from '../includes/card/card-selection-header.vue';

import CardDefaultBg from '@/assets/img/_temp_cat-card1.png';

export default {
    name:'best-of-the-week',
    data: function(){
        return {
            orangeBg: CardDefaultBg
        }
    },
    props: {
        feeds: {
            type: Array
        },
        page: Object
    },
    components: {
        'card-bg-large': CardBgLarge,
        'card-bg-middle': CardBgMiddle,
        'card-bg-small': CardBgSmall,
        'card-selection': CardSelection,
        'card-selection-header': CardSelectionHeader,
        'card-default': CardDefault,
    },
}
</script>

<style lang="scss" scoped>
    .gutter-item {
        width: 23px;    
    }

    #test {
        width: 383px;
    }

    .card {
        margin-bottom: 23px;
    }

    .best-of-the-week {

        &__title {
            font-family: 'SFProDisplay';
            font-weight: 700;
            font-size: 36px;
            line-height: 56px;
            color: #37393E;
            margin-bottom: 5px;
            letter-spacing: -0.5px;
        }

        &__header {
            display: flex;
            align-items: flex-start;
            margin-bottom: 53px;
        }

        &__subtitle {
            font-family: 'Roboto';
            font-weight: 300;
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 25px;
            color: #37393E;
            opacity: 0.7;
            display: inline-block;
            max-width: 463px;
        }

        &__all {
            position: relative;
            bottom: 14px;
            font-size: 14px;
            font-family: 'SFProDisplay';
            font-weight: 600;
            line-height: 19px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #357FDB;
            margin-left: auto;
            transition: .3s all ease;

            &:hover {
                color: #EF3044;

                svg {
                    path {
                        stroke: #EF3044;
                    }
                }
            }
            
            svg {
                margin-left: 7px;

                path {
                    transition: .3s all ease;
                }
            }
        }

        &__list {

        }
    }

    @media (max-width: 1200px) {
        .best-of-the-week {
            
        }

        .gutter-item {
            width: 15px;    
        }

        #test {
            width: 290px;
        }
    }

    @media (max-width: 960px) {
        .best-of-the-week {
            padding-top: 100px;

            &__title {
                text-align: center;
            }

            &__header {
                flex-direction: column;
            }

            &__subtitle {
                max-width: 344px;
                margin: 0 auto;
                text-align: center;
            }

            &__all {
                bottom: 0;
                margin: 25px auto 0 auto;
            }
        }

        .gutter-item {
            width: 4%;    
        }

        #test {
            width: 48%;
        }
    }

    @media (max-width: 640px) {
        .card {
            margin-bottom: 20px;
        }

        .best-of-the-week {
            padding-top: 90px;

            &__title {
                font-size: 32px;
                line-height: 56px;
            }

            &__all {
                margin-top: 15px;
            }

            &__header {
                margin-bottom: 38px;
            }
        }
    }
</style>

