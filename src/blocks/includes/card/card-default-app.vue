<template lang="pug">
    article.card.card-default(data-aos="fade-up")
        header.card__header(:style="{backgroundImage: 'url(\"' + (card.acf ? card.acf.info.preview.url : '') + '\")'}")
            //- .card__hash(:style="{color: card && getCategoryById(card.apps_category ? card.apps_category[0] : '') ? getCategoryById(card.apps_category ? card.apps_category[0] : '').acf ? getCategoryById(card.apps_category ? card.apps_category[0] : '').acf.color : '#ffffff' : '#ffffff'}" v-html="getCategoryById(card.apps_category ? card.apps_category[0] : '').name")
            .card__hash(:style="{color: card && card.acf ? card.acf.info.color : '#ffffff'}" v-html="getCategoryById(card.apps_category ? card.apps_category[0] : '').name")
            .card__title(v-html="card.title ? getTitle : ''")
            //- template
            //-     .card__trophie(:class="[isWinOrange?'card__trophie_orange':'',isWinBlue?'card__trophie_blue':'']")
            //-         .award
            //-             .award__icon
            //-                 img(src="@/assets/img/trophie_blue.svg")
            .card__head(v-if="award && award.acf && award.acf.color")
                .card__icon(v-if="award && award.acf && award.acf.color" :style="{background: 'linear-gradient(147.83deg, '+ award.acf.color +' 2.55%, '+ darken(award.acf.color, 60) +' 207.56%), #C4C4C4'}")
                    .card__border(:style="{background: darken(award.acf.color, 80)}")
                    img(:src="award ? award.acf.logo.sizes.large : ''")

        .card__body
            p.card__text(v-html="card.acf ? ellipsis(getContent, contentLength) : ''")
            router-link(:to="$ml.get('lang_url') + '/app/' + (card.acf ? card.slug + '/' : '')").card__link {{ $ml.get('btns.more_details') }}
</template>

<script>

    import {mapGetters} from 'vuex';

export default {
    name: 'Card',
    data: function(){
        return {
            title: '',
            titleLength: 25,
            content: '',
            contentLength: 170,
        }
    },
    methods: {
        getQuantitySymbols() {
            if(document.documentElement.clientWidth > 414) {
                this.contentLength = 170;
                this.titleLength = 25;
            } else {
                this.contentLength = 140;
                this.titleLength = 20;
            }
        },
        ellipsis(value, count) {
            if(value.length > count) {
                value = value.substr(0, count);
                return value + '...'
            } else {
                return value;
            }
        },
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
		}
    },
    props: {
        card: Object,
        award: Object
    },
    computed: {
        ...mapGetters([
            'getCategoryById'
        ]),
        getContent() {
            return this.card && this.card.acf ? this.card.acf.info.excerpt : '';
        },
        getTitle() {
            return this.card && this.card.title ? this.card.title.rendered : '';
        }
    },
    mounted(){
        this.getQuantitySymbols();
        window.addEventListener('resize', this.getQuantitySymbols, false);
    },
}
</script>

<style lang="scss" scoped>
    .card {
        height: 405px;
        box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.08);
        border-radius: 6px;
        display: block;
        overflow: hidden;
        // width: 32.02%;
        width: 383px;
        transition: all .5s ease;
        position: relative;

        @media screen and (min-width: 1200px) {
            &:hover {
                box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.13);
            }
        }

        &__header {
            text-align: center;
            height: 178px;
            position: relative;
            // background: url('../../../assets/uploads/card-bg-4.png'), linear-gradient(142.31deg, #FFBC77 6.92%, #FF8284 91.53%);
            background-color: #a1a1a1;
            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;

            // &:before {
            //     content: "";
            //     display: block;
            //     position: absolute;
            //     width: 100%;
            //     height: 100%;
            //     top: 0;
            //     left: 0;
            //     background-color: rgba(0,0,0,.3);
            // }
        }

        &__head {
            position: absolute;
            right: 23px;
            top: 23px;
        }

        &__icon {
            width: 33px;
            height: 33px;
            border-radius: 50%;
            position: relative;
            z-index: 2;
            
            img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                max-width: 13px;
                height: auto;
            }
        }

        &__border{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            position: absolute;
            opacity: 0.23;
            z-index: 1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &__hash {
            font-family: 'SFProDisplay';
            font-weight: normal;
            font-size: 15px;
            line-height: 22px;
            color: #FF6433;
            display: inline-block;
            padding-top: 18px;
            position: relative;
        }

        &__title {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-family: 'SFProDisplay';
            font-weight: 600;
            font-size: 33px;
            line-height: 36px;
            color: #FFFFFF;
        }

        &__body {
            padding: 32px 48px 42px 48px;
            text-align: center;
            // position: relative;
        }

        &__text {
            font-family: 'Roboto';
            font-weight: 300;
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 22px;
            color: #35343E;
            opacity: 0.7;
            margin-bottom: 22px;

            min-height: 86px;
        }

        &__link {
            width: 139px;
            height: 40px;
            background: transparent;
            border: 1px solid rgba(52, 59, 76, 0.2);
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
            transition: border-color .5s ease;
            position: absolute;
            left: 50%;
            bottom: 42px;
            transform: translateX(-50%);

            @media screen and (min-width: 1200px) {
                &:hover {
                    border-color:rgba(52, 59, 76, 0.5);
                }
            }
        }
        &__trophie {
            position: absolute;
            right: -6px;
            top: 24px;
            width: 100px;
            height: 100px;
            &_orange {
                .award {
                    &__icon {
                        background: linear-gradient(135deg, #E8AA6B 0%,#F55A43 100%);
                        &:before {
                            background: linear-gradient(135deg, #FFBC77 0%,#FE6C56 100%);
                        }
                    }
                }
            }
            &_blue {
                .award {
                    &__icon {
                        background: linear-gradient(135deg, #83A5FC 0%,#3182E7 100%);
                        &:before {
                            background-color: #E8F0FF;
                        }
                    }
                }
            }
        }
    }

    .award {
        position: relative;
        display: inline-block;
        margin-bottom: 95px;
        margin-left: 11px;
        &__icon {
            position: relative;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            z-index: 2;
            img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 13px;
                height: 14px;
            }
            &:before {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: calc(100% + 18px);
                height: calc(100% + 18px);
                border-radius: 50%;
                opacity: .23;
            }
        }
    }

    @media (max-width: 1200px) {
        .card {
            width: 290px;

            &__body {
                padding: 32px 30px 42px 30px;
            }

            &__link {
                bottom: 35px;
            }
        }
    }

    @media (max-width: 960px) {
        .card {
            width: 48%;
        }
    }

    @media (max-width: 640px) {
        .card {
            height: 400px;
            width: 100%;

            &__header {
                height: 183px;
            }

            &__hash {
                padding-top: 21px;
            }

            &__title {
                margin-left: 0;
                font-size: 33px;
                line-height: 36px;
                padding-top: 13px;
            }

            &__body {
                padding-top: 30px;
                padding-left: 20px !important;
                padding-right: 20px !important;
            }

            &__text {
                max-width: 287px;
                letter-spacing: -0.2px;
            }
        }
    }
</style>


