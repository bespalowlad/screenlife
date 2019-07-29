<template lang="pug">
    .team
        .wrapper
            h3.team__title(data-aos="fade-up" v-html="page.title")
            .team__subtitle(data-aos="fade-up" v-html="page.description")
            .team__list
                .team__item(v-for="(item, index) in page.list" :key="index" :style="{backgroundImage: 'url(\"' + item.photo.sizes.medium_large + '\")'}" data-aos="fade-up")
                    .team__info
                        p.team__name(v-html="item.name")
                        span.team__position(v-html="item.position")
                .team__expert.expert(data-aos="fade-up")
                    .expert__circle(@click="showModal")
                        .expert__circle--inner
                            <svg class="circle" width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d)">
                                <circle cx="58" cy="58" r="38" fill="#F9FBFF"/>
                                </g>
                                <defs>
                                <filter id="filter0_d" x="0" y="0" width="116" height="116" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="10"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.160313 0 0 0 0 0.406468 0 0 0 0 0.7125 0 0 0 0.09 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                            <svg class="circle-active" width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d)">
                                <circle cx="58" cy="58" r="38" fill="#F9FBFF"/>
                                </g>
                                <defs>
                                <filter id="filter0_d" x="0" y="0" width="116" height="116" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="10"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.160313 0 0 0 0 0.406468 0 0 0 0 0.7125 0 0 0 0.09 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        .expert__plus
                            img(src="@/assets/img/plus.svg")
                    h3.expert__title {{ $ml.get('forms.become_expert') }}

        .team__slider-list
            swiper.team__slider(ref="swiper" :options="swiperOptions")
                swiper-slide.team__slide(v-for="(item, index) in page.list" :key="index" :style="{backgroundImage: 'url(\"' + item.photo.sizes.medium_large + '\")'}")
                    .team__info
                        p.team__name(v-html="item.name")
                        span.team__position(v-html="item.position")
            .team__pagination

        .wrapper
            .expert-mobile
                .expert-mobile__circle(@click="showModal")
                    .expert-mobile__inner-circle
                    .expert-mobile__plus
                        img(src="@/assets/img/plus.svg")
                h3.expert-mobile__title Become an expert!

        .popup(:class="{'visible': modalVisible}")
            .popup__close(@click="showModal")
                img(src="@/assets/img/close.svg")

            //- .popup__thanks-block(v-if="thanksMessage")
            //-     h3.popup__title Thanks for your comment

            .popup__layot(:class="[thanksMessage ? 'hidden' : '']")
                .popup__content
                    h3.popup__title {{ $ml.get('forms.expert_title') }}
                    form#form-modal(name="modal" @submit.prevent="onSubmit()")
                        .fieldset(:class="{'has-error': !nameValid}")
                            v-input(v-model="name", :label="$ml.get('forms.name')" :isValid="nameValid" :type="'text'", :name="'name'" @keyup="nameValid = true" @click="nameValid = true" @mouseover="nameValid = true")
                        .fieldset(:class="{'has-error': !emailValid}")
                            v-input(v-model="email", :label="$ml.get('forms.email')" :isValid="emailValid" :type="'email'", :name="'email'" @keyup="emailValid = true" @click="emailValid = true" @mouseover="emailValid = true")
                        .fieldset(:class="{'has-error': !messageValid}")
                            v-textarea(:maxHeight="70" v-model="message" :label="$ml.get('forms.message')" :isValid="messageValid" :name="'message'" @value="checkMessage" @keyup="messageValid = true" @click="messageValid = true" @mouseover="messageValid = true")
                        button(type="submit" name="submit")
                            span {{ $ml.get('btns.send') }}
</template>

<script>
    import vInput from '../../components/input';
    import vTextarea from '../../components/textarea';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';

    import $api from '@/components/api.js';

    export default {
        name: 'Team',
        props: {
            page: Object
        },
        data: function(){
            return {
                modalVisible: false,
                textareaAutosize: '',
                formFirstName: "Name",
                formEmail: "E-mail",
                formMessage: "Your message",
                name: '',
                email: '',
                message: '',
                nameValid: true,
                emailValid: true,
                messageValid: true,
                thanksMessage: false,

                swiperOptions: {
                    spaceBetween: 10,
                    slidesPerView: 'auto',
                    loopedSlides: 1,
                    centeredSlides: true,
                    pagination: {
                        el: '.team__pagination',
                        type: 'bullets',
                        clickable: true
                    },
                    paginationClickable :true,
                    loop: true,
                },
            }
        },
        components: {
            'v-input': vInput,
            'v-textarea': vTextarea,
            'swiper': swiper,
            'swiperSlide': swiperSlide,
        },
        methods: {
            showModal(){
                this.modalVisible = !this.modalVisible;
            },
            checkMessage(val){
                this.message = val;
                if(val.length > 0) {
                    this.messageValid = true;
                }
            },
            isEmailValid(email) {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            },
            onSubmit(){
                let isValid = true,
                    formData = new FormData;

                if(!this.name) {
                    this.nameValid = false;
                    isValid= false;
                } else {
                    this.nameValid = true;
				    formData.append('your-name', this.name);
                }

                if(this.isEmailValid(this.email)) {
                    this.emailValid = true;
                    formData.append('your-email', this.email);
                } else {
                    this.emailValid = false;
                    isValid = false;
                }

                if(!this.message) {
                    this.messageValid = false;
                    isValid = false;
                } else {
                    this.messageValid = true;
				    formData.append('your-message', this.message);
                }

                if (!isValid) return;

                $api.sendFormExpert(formData, resp => {
                    if (resp.data.status == 'mail_sent') {
                        this.onSuccess();
                    }
                });
            },
            onSuccess(){
                this.$emit('showThanksBlock', true);
                this.modalVisible = false;
                // this.thanksMessage = true;
                // setTimeout(() => {
                //     this.thanksMessage = false;
                //     this.modalVisible = false;
                // }, 2000);
            }
        },
    }
</script>

<style lang="scss" scoped>
    /deep/ .swiper-slide {
        opacity: 0.3;

        .team__info {
            opacity: 0;
        }
    }

    /deep/ .swiper-slide-active {
        opacity: 1;

        .team__info {
            opacity: 1;
        }
    }

    /deep/ .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
        background: #90B8EA;
        opacity: 0.4;
        outline: none;
    }

    /deep/ .swiper-pagination-bullet-active {
        width: 6px;
        height: 6px;
        opacity: 1;
        background: #608DC5;
        position: relative;

        &:after {
            content: '';
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: rgba(144, 184, 234, 0.25);
            position: absolute;
            z-index: -1;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    }

    .team {
        padding: 78px 0 103px 0;
        
        &__title {
            font-family: 'SFProDisplay';
            font-weight: 700;
            font-size: 36px;
            line-height: 56px;
            text-align: center;
            color: #37393E;
            margin-bottom: 14px;
            letter-spacing: -.5px;
        }

        &__subtitle {
            font-family: 'Roboto';
            font-weight: 300;
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 25px;
            text-align: center;
            color: #3D4950;
            opacity: 0.7;
            text-align: center;
            max-width: 484px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 55px;

            /deep/ p {
                font-family: 'Roboto';
                font-weight: 300;
                font-style: normal;
                font-weight: 300;
                font-size: 15px;
                line-height: 25px;
            }
        }

        &__list {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-column-gap: 9px;
            grid-row-gap: 9px;
        }

        &__slider-list {
            position: relative;
            display: none;
        }

        &__slider {
            position: relative;
        }

        &__slide {
            width: 230px !important;
            height: 322px !important;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: relative;
            transition: .3s all ease;
        }

        &__pagination {
            position: absolute;
            bottom: -28px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;

            /deep/ & > * {
                &:not(:last-child) {
                    margin-right: 9px;
                }
            }
        }

        &__item {
            width: 232px;
            height: 323px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: relative;
            transition: .3s all ease;

            @media screen and (min-width: 1200px) {

                &:hover {
                    &:before {
                        opacity: 0.7;
                    }

                    .team__info {
                        opacity: 1;
                    }
                }
            }

            &:before {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 2;
                top: 0;
                left: 0;
                background: linear-gradient(165.38deg, #D55757 7.85%, #5EA3F8 105.07%);
                mix-blend-mode: lighten;
                opacity: 0;
                transition: .3s all ease;
            }
        }

        &__info {
            position: absolute;
            z-index: 2;
            left: 50%;
            transform: translateX(-50%);
            bottom: 16px;
            opacity: 0;
            transition: .3s all ease;
            text-align: center;
        }

        &__name {
            font-family: 'SFProDisplay';
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            color: #FFFFFF;
            margin-bottom: 5px;
        }

        &__position {
            font-family: 'Roboto';
            font-weight: 300;
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 20px;
            text-align: center;
            color: #FFFFFF;
        }
    }

    .expert {
        width: 232px;
        height: 323px;
        position: relative;
        transition: .3s all ease;
        padding: 70px 50px 66px 50px;
        background: #F1F4FB;
        border-radius: 0px 0px 6px 0px;

        &__circle {
            position: relative;
            width: 122px;
            height: 122px;
            border-radius: 50%;
            background: #F5F8FF;
            border: 3px solid rgba(255, 255, 255, 0.05);
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            margin-bottom: 18px;

            &--inner {
                .circle {
                    transition: .3s all ease;
                }

                .circle-active {
                    opacity: 0;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    transition: .3s all ease;

                    circle {
                        stroke: rgba(53,127,219, 0.5);
                    }
                }
            }

            @media screen and (min-width: 1200px) {

                &:hover {
                    .circle {
                        opacity: 0;
                    }

                    .circle-active {
                        opacity: 1;
                        stroke-dasharray: 240;
                        animation: progress-btn .5s ease;
                    }
                }
            }
        }

        &__plus {
            position: absolute;
            z-index: 3;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }

        &__title {
            font-family: 'SFProDisplay';
            font-weight: 700;
            font-size: 23px;
            line-height: 27px;
            text-align: center;
            color: #357FDB;
        }
    }

    .expert-mobile {
        display: none;
        width: 100%;
        height: 217px;
        background: #F1F4FB;
        border-radius: 6px;
        padding-top: 27px;
        padding-bottom: 23px;
        position: relative;

        &__circle {
            margin-left: auto;
            margin-right: auto;
            width: 122px;
            height: 122px;
            border-radius: 50%;
            background: #F5F8FF;
            mix-blend-mode: normal;
            position: relative;
        }

        &__inner-circle {
            position: absolute;
            z-index: 2;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            width: 76px;
            height: 76px;
            border-radius: 50%;
            background: #F9FBFF;
            border: 1px solid rgba(53, 127, 219, 0.4);
            box-sizing: border-box;
            box-shadow: 0px 0px 20px rgba(41, 104, 182, 0.09);
        }

        &__plus {
            position: absolute;
            z-index: 3;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }

        &__title {
            position: absolute;
            z-index: 2;
            left: 50%;
            bottom: 23px;
            transform: translateX(-50%);
            font-family: 'SFProDisplay';
            font-weight: 700;
            font-size: 23px;
            line-height: 27px;
            text-align: center;
            color: #357FDB;
            width: 100%;
        }
    }

    .popup {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        pointer-events: none;
        transition: .3s all ease;
        background: rgba(247, 248, 250, 0.98);

        &.visible {
            opacity: 1;
            pointer-events: all;
        }

        &__close {
            position: fixed;
            top: 20px;
            right: 20px;
            cursor: pointer;
        }

        &__thanks-block {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);

            .popup__title {
                color: #357FDB;
            }
        }

        &__layot {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            max-width: 618px;
            width: 100%;
            // height: 59%;
            background: #FFFFFF;
            box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.05);
            border-radius: 6px;
            padding: 60px 160px;
            transition: .3s all ease;

            &.hidden {
                opacity: 0;
            }
        }

        &__title {
            font-family: 'SFProDisplay';
            font-weight: 700;
            font-size: 23px;
            line-height: 36px;
            text-align: center;
            color: #37393E;
            margin-bottom: 20px;
        }
    }

    #form {

    }

    input[type="text"],
    input[type="email"] {
        display: block;
        width: 100%;
        margin-bottom: 30px;
        font-family: 'GothamPro';
        font-weight: normal;
        font-size: 10px;
        line-height: 10px;
        text-transform: uppercase;
        color: rgba(55, 57, 62, 0.7);
        padding: 12px 0;
        border-bottom: solid 1px rgba(54,54,54,0.15);
    }
    
    label[for="textarea"] {
        display: block;
        font-family: 'GothamPro';
        font-weight: normal;
        font-size: 8px;
        line-height: 8px;
        text-transform: uppercase;
        color: rgba(55, 57, 62, 0.7);
    }

    #textarea {
        width: 100%;
        display: block;
        // padding: 19px 0;
        font-family: 'GothamPro';
        font-weight: normal;
        font-size: 11px;
        line-height: 11px;
        color: rgba(55, 57, 62, 0.7);
        border: none;
        border-bottom: solid 1px rgba(54,54,54,0.15);
        overflow-y: auto;
        margin-bottom: 35px;

        &:focus {
            outline: none;
        }
    }

    button[type="submit"] {
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

        @media screen and (min-width: 1200px) {

            &:hover:after {
                opacity: 1;
            }
        }
    }

    .fieldset{
        position: relative;

        &:after {
            content: 'Enter the correct data';
            font-family: 'Roboto';
            font-weight: 300;
            font-style: normal;
            font-weight: 300;
            font-size: 10px;
            line-height: 22px;
            color: #D93737;
            position: absolute;
            bottom: -20px;
            left: 0;
            opacity: 0;
            transition: .3s all ease;
        }
    }

    @media (max-width: 1200px) {
        .team {

            &__list {
                grid-template-columns: repeat(4, 1fr);
            }

            &__item {
                width: 100%;
            }
        }

        .expert {
            width: 100%;
        }
    }

    @media (max-width: 960px) {
        .team {
            &__list {
                grid-template-columns: repeat(3, 1fr);
            }

            &__item {
                @media screen and (min-width: 1200px) {
                    &:hover {
                        &:before {
                            opacity: 0;
                        }
                    }
                }
            }

            &__info {
                opacity: 1;
            }
        }
    }

    @media (max-width: 640px) {
        .team {
            padding-top: 32px;
            padding-bottom: 41px;

            &__title {
                font-size: 32px;
                letter-spacing: -0.5px;
                margin-left: -12px;
                margin-bottom: 4px;
            }

            &__subtitle {
                max-width: 344px;
                margin-left: 9px;
                margin-bottom: 32px;
            }

            &__list {
                display: none;
            }

            &__slider-list {
                display: block;
                margin-bottom: 71px;
            }
        }

        .expert-mobile {
            display: block;
        }

        .popup {
            padding: 0 20px;
            
            &__layot {
                width: calc(100% - 40px);
                max-width: calc(100% - 40px);
                padding: 58px 34px;
            }

            .fieldset {
                margin-bottom: 38px;
            }

        }
    }
</style>


