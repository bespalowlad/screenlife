<template lang="pug">
    .block(data-aos="fade-up")
        h3.block__title {{card.field1}}
        .block__content
            div(v-html="card.field2")
            blockquote.block__blockquote
                div(v-html="card.field3")
            footer.block__footer
                cite.block__cite
                    .block__avatar(:style="{backgroundImage: 'url(\"' + (card.field4.photo ? card.field4.photo.sizes.thumbnail : '') + '\")'}")
                        //- img(src="")
                    .block__id
                        .block__name(v-html="card.field4.name")
                        span.block__position(v-html="card.field4.position")
</template>

<script>
    export default {
        name: 'ExpertOpinion',
        data: function(){
            return {}
        },
        props: {
            card: Object
        }
    }
</script>

<style lang="scss" scoped>
    .block {
        width: 676px;
        // height: 400px;
        background: #FFFFFF;
        box-shadow: 0px 4px 30px rgba(78, 142, 238, 0.07);
        border-radius: 6px;
        padding: 26px 47px 43px 54px;
        position: relative;
        margin-bottom: 56px;

        &__title {
            font-family: 'SFProDisplay';
            font-weight: 700;
            font-size: 30px;
            line-height: 56px;
            color: #357FDB;
            margin-bottom: 9px;
        }

        &__content {
            /deep/ div p {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 300;
                font-size: 15px;
                line-height: 25px;
                color: rgba(55,57,62, 0.7);
                // opacity: 0.7;
                margin-bottom: 12px;
            }

            /deep/ p img {
                width: 100%;
                height: auto;
            }
        }

        &__blockquote {
            margin-top: 21px;
            display: block;
            position: relative;
            
            & > * {
                font-family: 'Roboto';
                font-weight: 500;
                font-style: normal;
                font-weight: 500;
                font-size: 15px;
                line-height: 24px;
                color: #37393E;
                padding-left: 15px;
                position: relative;
                letter-spacing: 0.1px;

                &:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 2px;
                    height: 100%;
                    background: linear-gradient(172.85deg, #4F91E2 6.49%, #3579CE 113.92%), #357FDB;
                    border-radius: 10px;
                }
            }
        }

        &__footer {
            // padding-top: 10px;
            margin-top: 24px;
        }

        &__cite {
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }

        &__avatar {
            width: 58px;
            height: 58px;
            margin-right: 19px;
            background-size: cover;
            background-position: center;
            border-radius: 50%;

            img {
                width: 100%;
                height: 100%;
            }
        }

        &__id {

        }

        &__name {
            font-family: 'SFProDisplay';
            font-weight: normal;
            font-size: 15px;
            line-height: 19px;
            color: #357FDB;
            font-style: normal;
        }

        &__position {
            font-family: 'Roboto';
            font-weight: normal;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 23px;
            color: #37393E;
            opacity: 0.43;
        }
    }

    @media (max-width: 1200px) {
        .block {
            max-width: 600px;
        }
    }

    @media (max-width: 960px) {
        .block {
            max-width: 100%;
            width: 100%;
            padding: 30px 32px 36px 32px;
            margin-bottom: 40px;

            &__title {
                font-size: 23px;
                line-height: 56px;
            }
        }
    }

    @media (max-width: 640px) {
        .block {
            padding-top: 16px;

            &__title {
                letter-spacing: -0.3px;
                margin-bottom: 0;
            }

            &__content {
                p {
                    margin-bottom: 16px;
                }
            }
        }
    }
</style>


