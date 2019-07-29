<template lang="pug">
    article.card.card-app(data-aos="fade-up" v-html="card")
        //- h3.card__title Application of the day
        //- router-link(to="/application").card__link 
        //-     span More details
</template>

<script>

    export default {
        name: 'CardApp',
        props: {
            card: String
        },
        data: function(){
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        // background: linear-gradient(134.98deg, #3B7FD4 7.03%, #0952A7 140.8%);
        // background-repeat: no-repeat;
        // background-position: center;
        // background-size: cover;
        // height: 331px;
        // width: 353px;
        width: 353px;
        box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.08);
        border-radius: 6px;
        display: inline-block;
        overflow: hidden;
        position: relative;
        // padding: 62px 0;
        text-align: center;
        transition: all .5s ease;
        color: #fff;

        @media screen and (min-width: 1200px) {
            &:hover {
                box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.13);
            }
        }

        &__title {
            font-family: 'SFProDisplay';
font-weight: 600;
            font-size: 30px;
            line-height: 36px;
            max-width: 218px;
            margin: 0 auto;
        }

        &__link {
            width: 139px;
            height: 40px;
            background: #FFFFFF;
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
            position: absolute;
            left: 50%;
            bottom: 62px;
            transform: translateX(-50%);
            // margin: 95px auto 0 auto;
            transition: opacity .5s ease;

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

    @media (max-width: 1200px) {
        .card {
            width: 300px;
        }
    }

    @media (max-width: 960px) {
        .card {
            // height: 415px;
            width: 47.5%;
        }
    }

    @media (max-width: 640px) {
        .card {
            // height: 337px;
            // padding-top: 77px;

            &__link {
                bottom: 78px;
            }
        }
    }
</style>


