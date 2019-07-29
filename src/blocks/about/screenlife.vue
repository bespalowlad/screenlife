<template lang="pug">
    .screenlife
        .wrapper
            .screenlife__body
                .screenlife__picture(data-aos="fade")
                    img(:src="page.screen ? page.screen.sizes.large : ''").screenlife__img
                    //- img(src="@/assets/uploads/main-slide-1.png").screenlife__img--small
                .screenlife__content
                    h3.screenlife__title(data-aos="fade-up" v-html="page.info ? page.info.title : ''")
                    .screenlife__text(data-aos="fade-up" v-html="page.info ? page.info.description : ''")
</template>

<script>
export default {
    name: 'Screenlife',
    data: function(){
        return {}
    },
    props: {
        page: Object
    }
}
</script>

<style lang="scss" scoped>
    .screenlife {
        padding: 84px 0 76px 0;
        background: #EFF0FE;
        margin-left: 10px;
        margin-right: 10px;

        &__picture {
            display: inline-block;
            width: 44.56%;
            position: relative;
            margin-right: 100px;
        }

        &__body {
            display: flex;
            align-items: flex-start;
        }

        &__img {
            width: 100%;
            height: 100%;
            z-index: 1;
            max-width: 100%;
            height: auto;
            position: relative;
            top: 0;
            left: 0;

            &--small {
                position: absolute;
                z-index: 2;
                right: 0;
                bottom: -20px;
                width: 212px;
                height: 150px;
                box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.19);
                border-radius: 6px;
            }
        }

        &__content {
            display: inline-block;
            max-width: 476px;
            padding-top: 12px;
            vertical-align: top;
        }

        &__title {
            font-family: 'SFProDisplay';
font-weight: 700;
            font-size: 33px;
            line-height: 46px;
            color: #3D4950;
            margin-bottom: 28px;
            letter-spacing: -0.5px;
            
            /deep/ span {
                color: #357FDB;
            }
        }

        &__text {
            font-family: 'Roboto';
font-weight: 300;
            font-style: normal;
            font-weight: 300;
            color: #37393E;
            opacity: 0.7;

            /deep/ p {
                margin-bottom: 23px;
                font-size: 15px;
                line-height: 25px;
            }
        }
    }

    @media (max-width: 1200px) {
        .screenlife {
            &__picture {
                margin-right: 50px;
                width: 40%;
            }

            &__img {
                &--small {
                    right: -20px;
                }
            }
        }
    }

    @media (max-width: 960px) {
        .screenlife {
            &__body {
                flex-direction: column;
            }

            &__picture {
                order: 2;
                width: 100%;
                text-align: center;
            }

            &__img {
                &--small {
                    right: 0;
                    // bottom: 0;
                }
            }

            &__content {
                order: 1;
                max-width: 100%;
            }
        }
    }

    @media (max-width: 640px) {
        .screenlife {
            padding-top: 30px;
            padding-bottom: 54px;

            &__body {
                padding-left: 11px;
            }

            &__title {
                font-size: 23px;
                line-height: 34px;
                margin-bottom: 17px;
                max-width: 329px;
                letter-spacing: -0.3px;
            }

            &__text {
                max-width: 334px;
            }

            &__picture {
                margin-top: 10px;
                text-align: left;
            }

            &__img {
                // max-width: 289px;
                height: auto;

                &--small {
                    max-width: 170px;
                    height: 120px;
                    right: 11px;
                    bottom: -14px;
                }
            }
        }
    }
</style>


