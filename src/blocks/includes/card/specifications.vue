<template lang="pug">
    article.card.specifications(data-aos="fade-up")
        h3.card__title {{ $ml.get('apps.specifications') }}
        .card__field(v-for="(item, index) in items || []" :key="index")
            span.card__paragraph(v-html="item.label")
            p.card__category(v-html="item.value")
</template>

<script>
export default {
    name: 'Specifications',
    data: function(){
        return {}
    },
    props: {
        items: Array
    },
    mounted() {
        console.log('items ', this.items)
    }
}
</script>

<style lang="scss" scoped>
    .card {
        // height: 450px;
        height: auto;
        width: 353px;
        background: #FFFFFF;
        box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.05);
        border-radius: 6px;
        padding: 16px 34px 32px 34px;
        transition: all .5s ease;
        overflow: hidden;

        @media screen and (min-width: 1200px) {
            &:hover {
                box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.13);
            }
        }

        &__title {
            font-family: 'SFProDisplay';
            font-weight: 700;
            font-size: 23px;
            line-height: 48px;
            color: #37393E;
            margin-bottom: 13px;
            letter-spacing: -0.5px;
        }

        &__field {
            padding-bottom: 17px;
            margin-bottom: 12px;
            position: relative;

            &:after {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 1px;
                background: rgba(206, 219, 231, 0.26);
            }

            &:last-child:after {
                display: none;
            }
        }

        &__paragraph {
            display: inline-block;
            font-family: 'Roboto';
            font-weight: normal;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 23px;
            color: #37393E;
            opacity: 0.43;
            margin-bottom: 1px;
        }

        &__category {
            font-family: 'SFProDisplay';
            font-weight: normal;
            font-size: 15px;
            line-height: 19px;
            color: #37393E;
        }
    }

    @media (max-width: 1200px) {
        .card {
            width: 300px;
        }
    }

    @media (max-width: 960px) {
        .card {
            width: 47.5%;
            // height: 415px;
            height: auto;
            margin-left: 0;
            margin-right: auto;
        }
    }

    @media (max-width: 640px) {
        .card {
            width: 100%;
        }
    }
</style>


