<template lang="pug">
    .view#view(data-aos="fade")
        .wrapper
            .view__title(v-html="page.apps ? page.apps.title : ''")
            p.view__text(v-html="page.apps ? page.apps.description : ''")
            router-link(:to="$ml.get('lang_url') + '/apps/'").view__link
                span Open
</template>

<script>
export default {
    name: 'block-view',
    props: {
        page: Object
    },
    data: function(){
        return {}
    }
}
</script>

<style lang="scss" scoped>
    .view {
        padding: 72px 0 97px 0;
        text-align: center;

        &__title {
            font-family: 'SFProDisplay';
font-weight: 700;
            font-size: 36px;
            line-height: 1.2;
            color: #37393E;
            margin-bottom: 15px;
            letter-spacing: -0.5px;
        }

        &__text {
            max-width: 400px;
            font-family: 'Roboto';
font-weight: 300;
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 25px;
            color: #35343E;
            opacity: 0.7;
            margin: 0 auto 30px auto;
        }

        &__link {
            width: 146px;
            height: 43px;
            background: linear-gradient(0deg, #EF3044, #EF3044), linear-gradient(189.87deg, #357FDB -14.01%, #2361AA 109.14%);
            border-radius: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'SFProDisplay';
font-weight: 600;
            font-size: 11px;
            line-height: 19px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #FFFFFF;
            cursor: pointer;
            margin: 0 auto;
            transition: .3s all ease;
            position: relative;

            span {
                position: relative;
                z-index: 2;
            }

            &:hover:after {
                opacity: 1;
            }

            &:after {
                content: '';
                width: 100%;
                height: 100%;
                border-radius: 100px;
                border: none;
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0;
                background: linear-gradient(0deg, #C20E21, #C20E21), linear-gradient(189.87deg, #357FDB -14.01%, #2361AA 109.14%);
                transition: .3s all ease;
            }
        }
    }

    @media (max-width: 640px) {
        .view {
            padding: 10px 0 48px 0;

            &__title {
                font-size: 32px;
                // line-height: 56px;
            }

            &__text {
                max-width: 344px;
                letter-spacing: -0.5px;
                margin-bottom: 22px;
            }
        }
    }
</style>


