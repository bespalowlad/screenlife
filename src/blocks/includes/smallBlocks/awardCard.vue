<template lang="pug">
    .award(data-aos="fade-up" :style="{backgroundImage: 'url(\"' + card.acf.background.sizes.large + '\")', boxShadow: '0px 4px 30px ' + hexToRGB(card.acf.color, 0.12)}")
        .award__icon(:style="{borderColor: darken(card.acf.color, 80), background: 'linear-gradient(147.83deg, '+ card.acf.color +' 2.55%, '+ darken(card.acf.color, 60) +' 207.56%), #C4C4C4'}")
            img(:src="card.acf.logo.url")
        .award__separator(:style="{background: card.acf.color}")
        span.award__signature {{ $ml.get('awards.award_date') }}
        p.award__date(v-html="card.acf.award_date")
</template>

<script>
export default {
    name: 'AwardCard',
    data: function(){
        return {}
    },
    methods: {
        darken(col, amt) {
            var usePound = false;
            if (col[0] == "#") {
                col = col.slice(1);
                usePound = true;
            }
            var num = parseInt(col, 16);
            var r = (num >> 16) + amt;
            if (r > 255) {
                r = 255;
            } else if (r < 0) {
                r = 0;
            }
            var b = ((num >> 8) & 0x00FF) + amt;
            if (b > 255) {
                b = 255;
            } else if (b < 0) {
                b = 0;
            }
            var g = (num & 0x0000FF) + amt;
            if (g > 255) {
                g = 255;
            } else if (g < 0) {
                g = 0;
            }
            return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
        },
        hexToRGB(hex, alpha) {
            let r = parseInt(hex.slice(1, 3), 16),
                g = parseInt(hex.slice(3, 5), 16),
                b = parseInt(hex.slice(5, 7), 16);

            if (alpha) {
                return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
            } else {
                return "rgb(" + r + ", " + g + ", " + b + ")";
            }
        }
    },
    props: {
        card: Object
    }
}
</script>

<style lang="scss" scoped>
    .award {
        width: 267px;
        height: 153px;
        background-color: #fff;
        box-shadow: 0px 4px 30px rgba(255, 150, 127, 0.12);
        border-radius: 6px;
        position: relative;
        padding-top: 73px;
        text-align: center;
        // background-image: url('../../../assets/img/award-card-bg.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        margin: 0 auto 35px auto;
        -webkit-backface-visibility: hidden;
        overflow: visible !important;

        &__icon {
            width: 88px;
            height: 88px;
            border-radius: 50%;
            border: 15px solid #fff;
            box-sizing: border-box;
            // background: linear-gradient(147.83deg, #FF8284 2.55%, #FFBC77 207.56%), #C4C4C4;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            z-index: 2;
            left: 50%;
            top: -23px;
            transform: translateX(-50%);
            -webkit-backface-visibility: hidden;

            img {
                max-width: 25px;
                max-height: 25px;
            }
        }

        &__separator {
            width: 1px;
            height: 23px;
            background: rgba(255, 130, 132, 0.26);
            margin: 0 auto 0 auto;
        }

        &__signature {
            font-family: 'Roboto';
            font-weight: normal;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 23px;
            text-align: center;
            color: #37393E;
            opacity: 0.43;
            margin-bottom: 6px;
        }

        &__date {
            font-family: 'SFProDisplay';
            font-weight: normal;
            font-size: 15px;
            line-height: 19px;
            text-align: center;
            color: #37393E;
        }

        &.application {
            &.award {
                // box-shadow: 0px 4px 30px rgba(131,165,252,0.12);
                // background-image: url('../../../assets/img/award-card-application-bg.png');
            }

            .award__icon {
                // background: linear-gradient(145.3deg, #83A5FC 2.7%, #3182E7 109.91%), #C4C4C4;
                // border: 15px solid #E8F0FF;
            }

            .award__separator {
                // background: rgba(86, 146, 240, 0.37);
            }
        }
    }

    @media (max-width: 640px) {
        .award {
            width: 174px;
            height: 164px;
            background-color: transparent;
            box-shadow: none !important;
            padding-top: 4px;
            margin-bottom: 3px;

            &__icon {
                position: relative;
                left: 50%;
                transform: translateX(-50%);
                top: auto;
                width: 76px;
                height: 76px;
                border: 13px solid #FADCD9;
            }

            &__separator {
                margin-top: 10px;
            }

            &__date {
                line-height: 13px;
            }

            &.application {
                padding-top: 14px;
                margin-bottom: 15px;
            }
        }
    }
</style>


