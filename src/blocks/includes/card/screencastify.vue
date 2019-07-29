<template lang="pug">
    .screencastify(data-aos="fade-up")
        h2.screencastify__title Learn to have fun.<br> Use <span class="line-through">Screencastify</span>!
        router-link(to="/").screencastify__btn
            span {{ $ml.get('btns.download') }}
</template>

<script>
    export default {
        name: 'Screencastify',
        data: function(){
            return {}
        }
    }
</script>

<style lang='scss' scoped>
    .screencastify {
        width: 100%;
        height: 324px;
        padding-top: 80px;
        border-radius: 6px;
        text-align: center;
        position: relative;
        background: linear-gradient(165.23deg, #FFBC77 6.92%, #FF8284 91.53%);

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 6px;
            background-image: url('../../../assets/img/screencastify-bg-right.png'),url('../../../assets/img/screencastify-bg.png');
            background-repeat: no-repeat;
            background-position: center right -30px, center left;
            background-size: 47%, 47%;
        }

        &__title {
            font-family: 'SFProDisplay';
font-weight: 700;
            font-size: 40px;
            line-height: 46px;
            text-align: center;
            color: #FFFFFF;
            letter-spacing: -1px;
        }

        .line-through {
            display: inline-block;
            position: relative;
            padding-bottom: 1px;

            &:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background: #FFFFFF;
                opacity: 0.5;
            }
        }

        &__btn {
            position: absolute;
            bottom: 77px;
            left: 50%;
            transform: translateX(-50%);
            width: 139px;
            height: 40px;
            background: #FFFFFF;
            // border: 1px solid rgba(255, 255, 255, 0.09);
            box-sizing: border-box;
            border-radius: 100px;
            font-family: 'SFProDisplay';
font-weight: 600;
            font-size: 10px;
            line-height: 19px;
            text-align: center;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #37393E;
            // transition: .3s all ease;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity .5s ease

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

    @media (max-width: 960px) {
        .screencastify {
            height: 337px;
            padding-top: 95px;
            margin-bottom: 20px;

            &__title {
                font-size: 33px;
                line-height: 40px;
            }

            &_btn {
                bottom: 95px;
            }
        }
    }
</style>


