<template lang="pug">
    .card
        .card__icon
            img(src="@/assets/uploads/expert-opinion.png")
        .card__title Screencastify
        .card__description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in portitor massa, nec vestibulum magna.
</template>

<script>
export default {
    name: 'CardOrange',
    data: function(){
        return {}
    }
}
</script>

<style lang="scss" scoped>
    .card {
        width: 204px;
        height: 274.04px;
        padding-top: 21px;
        text-align: center;
        border-radius: 6px;
        background: linear-gradient(127.41deg, #FFBC77 6.92%, #FF8284 91.53%);

        &__icon {
            margin: 0 auto 20px auto;
            width: 40px;
            height: 40px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        &__title {
            font-size: 19px;
            font-family: 'SFProDisplay';
font-weight: 700;
            color: #fff;
            text-align: center;
            margin-bottom: 13px;
        }

        &__description {
            font-size: 11px;
            line-height: 17px;
            font-family: 'Roboto';
font-weight: 300;
            color: #fff;
            text-align: center;
            padding: 0 10px;
            margin: 0 auto;
        }
    }
</style>