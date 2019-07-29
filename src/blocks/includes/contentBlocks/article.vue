<template lang="pug">
    .block(data-aos="fade-up")
        h3.block__title(v-html="title")
        .block__content(v-html="text")
</template>

<script>
    export default {
        name: 'Article',
        data: function(){
            return {

            }
        },
        props: {
            title: {
                type: String
            },
            text: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    .block {
        max-width: 676px;
        margin-bottom: 50px;

        &__title {
            font-family: 'SFProDisplay';
            font-weight: 700;
            font-size: 36px;
            // line-height: 56px;
            line-height: 45px;
            color: #37393E;
            margin-bottom: 10px;
            letter-spacing: -0.5px;
        }

        &__content {
            margin-bottom: 48px;

            /deep/ p {
                font-family: 'Roboto';
                font-weight: 300;
                font-style: normal;
                font-weight: 300;
                font-size: 15px;
                line-height: 25px;
                color: #37393E;
                opacity: 0.7;
                margin-bottom: 25px;
                letter-spacing: -0.1px;
            }
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

            &__title {
                font-size: 32px;
                // line-height: 56px;
                line-height: 45px;
            }
        }
    }

    @media (max-width: 640px) {
        .block {
            // max-width: 344px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 31px;
            
            &__content {
                margin-bottom: 34px;

                /deep/ p {
                    letter-spacing: -0.1px;
                }
            }

            &__title {
                margin-bottom: 5px;
            }
        }
    }
</style>