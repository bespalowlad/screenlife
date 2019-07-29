<template lang="pug">
    .block.text(v-html="text" data-aos="fade-up")
</template>

<script>
    export default {
        name: 'BlockText',
        data: function(){
            return {}
        },
        props: {
            text: String
        }
    }
</script>

<style lang="scss" scoped>
    .block {
        max-width: 676px;
        margin-bottom: 50px;

        & > * {
            &:not(:last-child) {
                margin-bottom: 0;
            }
        }

        /deep/ ol, /deep/ ul {
            margin: 0;
            padding-left: 20px;
        }

        /deep/ strong {
            display: block;
            font-family: 'Roboto';
            font-weight: 500;
            letter-spacing: 0px;
            margin-bottom: 19px;
            font-weight: 500;
            font-size: 15px;
            line-height: 26px;
            color: #37393E;
        }

        /deep/ h2 {
            padding: 16px 0 0 0;
            font-size: 30px;
            line-height: 54px;
            // line-height: 56px;
            letter-spacing: .6px;
            color: #37393E;
            // margin-bottom: 7px;
            margin-bottom: 1px;
        }

        /deep/ ol, /deep/ ul {
            li {
                font-family: 'Roboto';
                font-weight: normal;
                font-style: normal;
                font-weight: 300;
                font-size: 15px;
                line-height: 25px;
                color: rgba(#37393E,.7);
                // opacity: 0.7;
                // margin-bottom: 50px;
                letter-spacing: -0.1px;
            }
        }

        /deep/ p {
            font-family: 'Roboto';
            font-weight: 300;
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 25px;
            color: rgba(#37393E,.7);
            margin-bottom: 5px;
            letter-spacing: -0.1px;

            strong {
                font-family: 'Roboto';
                font-weight: 500;
                font-weight: 500;
                color: rgba(#37393E,1);
                letter-spacing: 0px;
                // margin-bottom: 19px;
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
            margin-bottom: 40px;
        }
    }

    @media (max-width: 640px) {
        .block {
            margin-bottom: 31px;
            // letter-spacing: 0.6px;
            margin-bottom: 40px;

            /deep/ strong {
                line-height: 25px;
            }
        }
    }
</style>