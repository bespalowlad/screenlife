<template lang="pug">
    .block.video(data-aos="fade-up")
        .block__poster(:style="{backgroundImage: 'url(\"' + poster + '\")'}" @click="setIframe($event)")
        .block__iframe(v-html="link")
        //- img(src="@/assets/uploads/video-poster.png").block__poster
        button.block__btn(@click="setIframe($event)") Play
</template>

<script>
    export default {
        name: 'BlockVideo',
        data: function(){
            return {
                attr: '',
            }
        },
        props: {
            link: {
                type: String,
            },
            poster: String
        },
        methods: {
            setIframe(evt){
                let block = evt.target.parentNode,
                    iframe = block.getElementsByClassName('block__iframe')[0],
                    poster = block.getElementsByClassName('block__poster')[0],
                    btn = evt.target.classList.contains('block__btn') ? evt.target : block.getElementsByClassName('block__btn')[0];

                let link = this.link;

                var el = document.createElement( 'div' );
                el.innerHTML = this.link;

                let url = el.querySelector('iframe').getAttribute( 'src' );
                let a = url.replace(url, (url.includes('?') ? url+'&autoplay=1' : url+'?autoplay=1'))
                link = link.replace(url, a)


                iframe.innerHTML = link;
                poster.style.opacity = 0;
                poster.style.pointerEvents = 'none';
                btn.style.opacity = 0;
                btn.style.pointerEvents = 'none';
            }
        },
    }
</script>

<style lang="scss" scoped>
    .block {
        max-width: 676px;
        width: 100%;
        margin-bottom: 50px;
        position: relative;
        z-index: 1;
        background-size: cover;
        background-position: center;
        border-radius: 6px;
        overflow: hidden;
        background-color: #000;

        &:before {
            content: "";
            display: block;
            padding-top: 62.86%;
        }

        /deep/ iframe {
            width: 100%;
            height: auto;
        }

        &__poster {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 2;
            top: 0;
            left: 0;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            transition: all .3s ease;
        }

        &__iframe {
            opacity: 1;
            z-index: 1;
            // pointer-events: none;
            // visibility: hidden;

            /deep/ iframe {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
            }
        }

        &__iframe_active {
            opacity: 1;
        }

        &__btn {
            position: absolute;
            z-index: 2;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            width: 65px;
            height: 65px;
            border-radius: 50%;
            opacity: 0.6;
            border: 1px solid #FFFFFF;
            box-sizing: border-box;
            font-family: 'SFProDisplay';
            font-weight: normal;
            font-size: 10px;
            line-height: 19px;
            text-align: center;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #FFFFFF;
            transition: .5s all ease;

            &_hidden {
                opacity: 0;
                pointer-events: none;
            }

            &:after {
                content: '';
                position: absolute;
                z-index: 1;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                width: 100%;
                height: 100%;
                border-radius: 50%;
                opacity: 0.15;
                border: 5px solid #FFFFFF;
                transition: .5s all ease;
            }

            @media screen and (min-width: 1200px) {

                &:hover:after {
                    animation-name: play;
                    animation-duration: 1s;
                    animation-iteration-count: infinite;
                    animation-direction: alternate-reverse;
                    animation-timing-function: ease;
                }
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
        }
    }

    @media (max-width: 640px) {
        .block {
            margin-bottom: 31px;
        }
    }

    @keyframes play {
        0% {
            border: 5px solid #FFFFFF;
        }

        50% {
            border: 10px solid #fff;
        }

        100% {
            border: 5px solid #FFFFFF;
        }
    }
</style>