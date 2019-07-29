<template lang="pug">
    .thanks
        .thanks__block
            h2.thanks__title {{ $ml.get('forms.thanks') }}
            p.thanks__text {{ $ml.get('forms.thanks_text') }}
            button.thanks__btn(@click="$emit('hideThanksBlock', false)")
                span {{ $ml.get('forms.thanks_ok') }}
</template>

<script>
export default {
    name: 'Thanks',
    data: function(){
        return {}
    }
}
</script>

<style lang="scss" scoped>
    .thanks {
        position: fixed;
        z-index: 3;
        top: 0;
        left: 0;
        width: 100%;
        // height: 100vh;
        height: 100%;
        background: rgba(247, 248, 250, 0.98);
        transition: 0.3s all ease;
        pointer-events: all;

        &__block {
            background: #FFFFFF;
            box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.05);
            border-radius: 6px;
            max-width: 618px;
            width: 100%;
            margin: 0 auto;
            padding: 107px 0 97px 0;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }

        &__title {
            font-family: 'SFProDisplay';
            font-weight: 600;
            font-size: 36px;
            line-height: 36px;
            text-align: center;
            color: #37393E;
            margin-bottom: 19px;
        }

        &__text {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 25px;
            text-align: center;
            color: rgba(61, 73, 80, 0.7);
            max-width: 379px;
            margin: 0 auto 35px auto;
        }

        &__btn {
            width: 146px;
            height: 43px;
            background: linear-gradient(0deg, #357FDB, #357FDB), linear-gradient(189.87deg, #357FDB -14.01%, #2361AA 109.14%);
            border-radius: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'SFProDisplay';
            font-weight: 600;
            font-size: 11px;
            line-height: 19px;
            text-align: center;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #FFFFFF;
            cursor: pointer;
            margin: 0 auto;
            position: relative;
            transition: .3s all ease;

            span {
                position: relative;
                z-index: 2;
            }

            &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 100px;
                background: linear-gradient(0deg, #145EB9, #145EB9), linear-gradient(189.87deg, #357FDB -14.01%, #2361AA 109.14%);
                transition: .3s all ease;
                opacity: 0;
            }

            &:hover:after {
                opacity: 1;
            }
        }
    }

    @media (max-width: 640px) {
        .thanks {
            &__block {
                width: calc(100% - 40px);
                padding: 50px 10px;
            }

            &__text {
                margin-bottom: 20px;
            }
        }
    }
</style>


