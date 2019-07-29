<template lang="pug">
    .form(data-aos="fade-up")
        .wrapper
            form.form-questions(name="form-questions" @submit.prevent="onSubmit()")
                h2.form-questions__title {{ $ml.get('forms.request_title') }}
                .form-questions__fields
                    .fieldset.fieldset-name(:class="{'has-error': !nameValid}")
                        v-input(lightColor = true v-model="name", :label="$ml.get('forms.name')" :isValid="nameValid" :type="'text'", :name="'name'" @keyup="nameValid = true" @click="nameValid = true" @mouseover="nameValid = true")
                    .fieldset.fieldset-message(:class="{'has-error': !messageValid}")
                        v-textarea(:maxHeight="90" lightColor = true v-model="message" :label="$ml.get('forms.message')" :isValid="messageValid" :name="'message'" @value="checkMessage" @keyup="messageValid = true" @click="messageValid = true" @mouseover="messageValid = true")
                    .fieldset.fieldset-email(:class="{'has-error': !nameValid}")
                        v-input(lightColor = true v-model="email", :label="$ml.get('forms.email')" :isValid="emailValid" :type="'email'", :name="'email'" @keyup="emailValid = true" @click="emailValid = true" @mouseover="emailValid = true")
                button(type="submit" name="submit")
                    span {{ $ml.get('btns.send') }}
                widget(static = true)

</template>

<script>
    import vInput from '../../components/input';
    import vTextarea from '../../components/textarea';
    import Widget from '../includes/widget/widget.vue';

    import $api from '@/components/api.js';

    export default {
        name: 'Form',
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
            }
        },
        components: {
            'v-input': vInput,
            'v-textarea': vTextarea,
            'widget': Widget
        },
        methods: {
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

                $api.sendFormContact(formData, resp => {
                    console.log(resp);
                    if (resp.data.status == 'mail_sent') {
                        this.onSuccess();
                    }
                });
			    
            },
            onSuccess(){
                this.$emit('showThanksBlock', true);
                setTimeout(() => {
                    this.name = '';
                    this.email = '';
                    this.message = '';
                }, 500);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form {
        padding-bottom: 97px;
    }

    .form-questions {
        background: linear-gradient(139.69deg, #357FDB -29.91%, #64BEFF 97.64%);
        border-radius: 6px;
        padding: 48px 0 57px 110px;
        color: #fff;
        overflow: hidden;
        position: relative;
        z-index: 1;

        &__title {
            font-family: 'SFProDisplay';
            font-weight: 700;
            font-size: 40px;
            line-height: 46px;
            max-width: 534px;
            margin-bottom: 35px;
            letter-spacing: -1px;
            position: relative;
            z-index: 2;
        }

        &__fields {
            position: relative;
        }

        .fieldset {
            &-name {
                width: 100%;
                max-width: 290px;
                display: inline-block;
                margin-right: 36px;
            }

            &-email {
                width: 100%;
                max-width: 290px;
                margin-bottom: 32px;
            }

            &-message {
                width: 100%;
                max-width: 290px;
                display: inline-block;
                vertical-align: top;
                // position: relative;
                // top: 6px;
                position: absolute;
                top: 0;
                left: calc(290px + 36px);
            }
        }

        button[type="submit"] {
            width: 139px;
            height: 40px;
            background: #fff;
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
            color: #37393E;
            cursor: pointer;
            position: relative;
            z-index: 2;
            transition: opacity .5s ease;
            margin-top: 34px;

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

    .widget {
        width: 60%;
        height: 100%;
        position: absolute;
        z-index: -1;
        right: -2%;
        top: 0;
        pointer-events: none;
    }

    @media (max-width: 1200px) {
        .form-questions {
            padding: 48px 0 57px 50px;
        }
    }

    @media (max-width: 960px) {
        .form-questions {
            padding: 45px 33px;

            &__title {
                text-align: center;
                margin: 0 auto 35px;
            }

            &__fields {
                display: flex;
                flex-direction: column;
            }

            .fieldset {
                margin-bottom: 37px;
                display: block;
                width: 100%;
                max-width: 100%;

                &-name {
                    margin-bottom: 2px;
                    order: 1;
                }

                &-email {
                    order: 2;
                    height: 58px !important;
                    margin-bottom: -4px;
                }

                &-message {
                    order: 3;
                    margin-bottom: 30px;
                    margin-top: 8px;
                    position: relative;
                    top: auto;
                    left: auto;
                }
            }

            button[type="submit"] {
                order: 4;
                margin: 0 auto;
            }
        }

        .widget {
            width: 100%;
        }
    }

    @media (max-width: 640px) {
        .form {
            padding-bottom: 46px;
        }

        .form-questions {
            padding: 42px 44px 47px 44px;
            display: flex;
            flex-direction: column;

            &__title {
                font-size: 23px;
                line-height: 34px;
                max-width: 297px;
                margin-left: auto;
                margin-right: auto;
                letter-spacing: -0.5px;
                margin-bottom: 21px;
            }
        }

        .widget {
            width: 100%;
            right: auto;
            left: -104px;
            overflow: auto;
            padding-left: 500px;
        }
    }
</style>


