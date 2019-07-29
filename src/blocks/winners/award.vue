<template lang="pug">
    .awards(:id="award.slug")
        .wrapper
            award-card(:card="award" data-aos="fade")
            h3.awards__title(data-aos="fade" v-html="award.title.rendered" :style="{color: award.acf.color}")
            p.awards__subtitle(data-aos="fade" v-html="award.acf.description")
            .awards__list
                nomination-card(v-for="(item, index) in list" :key="index" :article="item" :color="award.acf.color" :app="getAppByArticle(item.id)" data-aos="fade-up")
</template>

<script>
    import AwardCard from '../includes/smallBlocks/awardCard.vue';
    import NominationCard from '../includes/card/nominationCard.vue';

    import AOS from 'aos';
    import '@/helpers/sass/aos.scss';
    import { mapGetters } from 'vuex';

    export default {
        name: 'Award',
        data: function(){
            return {}
        },
        components: {
            'award-card': AwardCard,
            'nomination-card': NominationCard,
        },
        props: {
            mode: {
                type: String
            },
            list: Array,
            award: Object
        },
        computed: {
            ...mapGetters([
                'getAppByArticle'
            ])
        },
        created(){
            // this.$nextTick(function() {
            //     AOS.init({
            //         once: true,
            //         disabled: 'mobile',
            //         duration: 800,
            //         offset: 0
            //     });
            // });
        },
        mounted(){
            // AOS.init({
            //     once: true,
            //     disabled: 'mobile'
            // });
            this.$nextTick(() => {
				AOS.init({
					once: true,
					disabled: 'mobile',
					duration: 1000
				});
            })
        }
    }
</script>

<style lang="scss" scoped>
    

    .awards {
        padding: 0 0 123px 0;
        background-repeat: no-repeat;
        background-size: 30%;
        background-position: right -20% top 0%;
        position: relative;
        z-index: 2;

        &:before {
            content: url('../../assets/img/winners-bg.png');
            position: absolute;
            z-index: -1;
            right: -20%;
            top: 0;
            opacity: 0.3;
            max-width: 733px;
            max-height: 863px;
        }

        &__title {
            font-family: 'SFProDisplay';
            font-weight: 700;
            font-size: 36px;
            line-height: normal;
            text-align: center;
            color: #FF8284;
            margin-bottom: 13px;
            text-align: center;
        }

        &__subtitle {
            font-family: 'Roboto';
            font-weight: 300;
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 25px;
            text-align: center;
            color: #37393E;
            opacity: 0.7;
            margin: 0 auto 51px auto;
            text-align: center;
            max-width: 549px;
        }

        &__list {
            display: grid;
            grid-column-gap: 23px;
            grid-row-gap: 23px;
            grid-template-columns: repeat(3, 1fr);
        }

        &.application {
            background-position: -10% 0%;
            padding-bottom: 95px;

            &:before {
                    left: -20% !important;
                }

            .awards {
                padding-bottom: 109px;

            }

            .awards__title {
                color: #357FDB;
            }
        }
    }

    @media (max-width: 1200px) {
        .awards {
            &__list {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    }

    @media(max-width: 960px) {
        .awards {
            padding-top: 70px;
            padding-bottom: 100px;
        }
    }

    @media(max-width: 640px) {
        .awards {
            padding-bottom: 39px;
            padding-top: 40px;

            &:before {
                display: none;
            }

            &__title {
                font-size: 32px;
                line-height: normal;
                text-align: center;
                margin-bottom: 5px;
            }

            &__subtitle {
                max-width: 344px;
                margin-right: auto;
                margin-left: auto;
                margin-bottom: 32px;
            }

            &__list {
                grid-template-columns: auto;
                grid-row-gap: 20px;
            }

            &.application {
                padding-bottom: 46px;
            }
        }
    }
</style>


