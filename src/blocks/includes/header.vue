<template lang="pug">
    header.header#header(:class="[color == 'white' ? 'white' : '']")
        .header__inner
            router-link(:to="$ml.get('lang_url') + '/'" @click.native="menuCloses").header__logo
                <svg class="logo" width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.165 23.202L9.51159 16.6492C9.51159 16.5542 9.41662 16.5542 9.32165 16.4592C8.94178 16.0794 8.37196 16.0794 7.99209 16.2693L1.6292 20.068C1.05939 20.3529 0.964418 21.0177 1.24932 21.5875C1.43926 21.9674 1.81914 22.1573 2.19901 22.1573C2.38895 22.1573 2.57888 22.0624 2.76882 21.9674L8.277 18.7385L12.2657 24.4366C12.4556 24.7215 12.8355 24.9114 13.2154 24.9114C13.4053 24.9114 13.6902 24.8165 13.8801 24.7215C14.45 24.4366 14.5449 23.6768 14.165 23.202Z" fill="#357FDB"/>
                    <path d="M19.1836 11.5862C19.2786 11.3013 19.2786 11.0164 19.0887 10.7314C19.0887 10.7314 19.0887 10.7314 19.0887 10.6365L18.9937 10.5415C18.9937 10.5415 18.9937 10.4465 18.8987 10.4465L18.8038 10.3516L18.7088 10.2566L1.61446 0.0949689C1.61446 0.0949689 1.61446 0.0949689 1.5195 0.0949689C1.5195 0.0949689 1.42453 0.0949685 1.42453 0H1.32956H1.23459H1.13962H1.04465H0.949686H0.854717H0.759748H0.664779C0.664779 0 0.56981 3.60861e-07 0.56981 0.0949689C0.56981 0.0949689 0.474843 0.0949684 0.474843 0.189937C0.474843 0.189937 0.379874 0.189937 0.379874 0.284906C0.379874 0.284906 0.284905 0.284905 0.284905 0.379874C0.284905 0.379874 0.284905 0.474843 0.189936 0.474843L0.0949671 0.569812C0.0949671 0.569812 0.0949671 0.569811 0.0949671 0.66478C0.0949671 0.66478 0.0949685 0.759749 0 0.759749V0.854717V0.949686V1.04465C0 1.04465 0 1.04465 0 1.13962V21.5579C0 22.2226 0.474842 22.6975 1.13962 22.6975C1.8044 22.6975 2.27924 22.2226 2.27924 21.5579V3.03899L16.0497 11.2063L10.7314 14.2453C10.1616 14.5302 10.0667 15.195 10.3516 15.7648C10.5415 16.1447 10.9214 16.3346 11.3013 16.3346C11.4912 16.3346 11.6811 16.2396 11.8711 16.1447L18.5189 12.156C18.6138 12.156 18.6138 12.061 18.7088 12.061C18.8038 11.966 18.8038 11.966 18.8987 11.8711C18.8987 11.8711 18.8987 11.8711 18.8987 11.7761C19.0887 11.6811 19.0887 11.5862 19.1836 11.5862Z" fill="#EF3044"/>
                </svg>
                <svg class="logo-clone" width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.165 23.202L9.51159 16.6492C9.51159 16.5542 9.41662 16.5542 9.32165 16.4592C8.94178 16.0794 8.37196 16.0794 7.99209 16.2693L1.6292 20.068C1.05939 20.3529 0.964418 21.0177 1.24932 21.5875C1.43926 21.9674 1.81914 22.1573 2.19901 22.1573C2.38895 22.1573 2.57888 22.0624 2.76882 21.9674L8.277 18.7385L12.2657 24.4366C12.4556 24.7215 12.8355 24.9114 13.2154 24.9114C13.4053 24.9114 13.6902 24.8165 13.8801 24.7215C14.45 24.4366 14.5449 23.6768 14.165 23.202Z" fill="#357FDB"/>
                    <path d="M19.1836 11.5862C19.2786 11.3013 19.2786 11.0164 19.0887 10.7314C19.0887 10.7314 19.0887 10.7314 19.0887 10.6365L18.9937 10.5415C18.9937 10.5415 18.9937 10.4465 18.8987 10.4465L18.8038 10.3516L18.7088 10.2566L1.61446 0.0949689C1.61446 0.0949689 1.61446 0.0949689 1.5195 0.0949689C1.5195 0.0949689 1.42453 0.0949685 1.42453 0H1.32956H1.23459H1.13962H1.04465H0.949686H0.854717H0.759748H0.664779C0.664779 0 0.56981 3.60861e-07 0.56981 0.0949689C0.56981 0.0949689 0.474843 0.0949684 0.474843 0.189937C0.474843 0.189937 0.379874 0.189937 0.379874 0.284906C0.379874 0.284906 0.284905 0.284905 0.284905 0.379874C0.284905 0.379874 0.284905 0.474843 0.189936 0.474843L0.0949671 0.569812C0.0949671 0.569812 0.0949671 0.569811 0.0949671 0.66478C0.0949671 0.66478 0.0949685 0.759749 0 0.759749V0.854717V0.949686V1.04465C0 1.04465 0 1.04465 0 1.13962V21.5579C0 22.2226 0.474842 22.6975 1.13962 22.6975C1.8044 22.6975 2.27924 22.2226 2.27924 21.5579V3.03899L16.0497 11.2063L10.7314 14.2453C10.1616 14.5302 10.0667 15.195 10.3516 15.7648C10.5415 16.1447 10.9214 16.3346 11.3013 16.3346C11.4912 16.3346 11.6811 16.2396 11.8711 16.1447L18.5189 12.156C18.6138 12.156 18.6138 12.061 18.7088 12.061C18.8038 11.966 18.8038 11.966 18.8987 11.8711C18.8987 11.8711 18.8987 11.8711 18.8987 11.7761C19.0887 11.6811 19.0887 11.5862 19.1836 11.5862Z" fill="#EF3044"/>
                </svg>
                <svg class="logo-title" width="94" height="17" viewBox="0 0 94 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M88.9629 6.49692C89.8176 6.49692 90.4824 6.78183 90.8623 7.25667C91.2422 7.73151 91.5271 8.3963 91.5271 9.25101V9.53592H86.3988V9.44095C86.4938 8.58623 86.7786 7.92145 87.2535 7.35164C87.7283 6.78183 88.2981 6.49692 88.9629 6.49692ZM89.2478 16.2787C90.1975 16.2787 90.9573 16.1837 91.622 15.8988C92.2868 15.6139 92.7617 15.329 93.2365 14.9491L92.4768 13.6196C92.0969 13.9994 91.622 14.1894 91.1472 14.3793C90.6724 14.5693 90.0076 14.6642 89.3428 14.6642C88.3931 14.6642 87.6334 14.2843 87.1585 13.6196C86.6837 12.9548 86.3988 12.1001 86.3038 11.0554V10.9604H93.5214V9.72585C93.5214 8.20636 93.1415 7.06674 92.3818 6.21202C91.6221 5.3573 90.4824 4.88246 88.9629 4.88246C87.6334 4.88246 86.5887 5.3573 85.639 6.40196C84.6893 7.44661 84.2145 8.6812 84.2145 10.2957V10.7705C84.2145 12.385 84.6893 13.7145 85.639 14.6642C86.4937 15.7089 87.7283 16.2787 89.2478 16.2787ZM80.3208 15.9938V6.59189H82.6V5.16737H80.3208V3.74284C80.3208 3.07806 80.5107 2.60321 80.7956 2.22334C81.0805 1.84347 81.5554 1.7485 82.1252 1.7485C82.5051 1.7485 82.79 1.7485 83.1699 1.84347L83.4548 0.323968C83.1698 0.229 82.8849 0.229 82.695 0.134031C82.5051 0.134031 82.2202 0.0390625 82.0302 0.0390625C80.8906 0.0390625 80.0359 0.323968 79.3711 0.988748C78.7063 1.65353 78.4214 2.50825 78.4214 3.64787V5.0724H76.712V6.49692H78.4214V15.9938H80.3208ZM72.0585 15.9938H74.0529V5.16737H72.0585V15.9938ZM72.0585 2.31831H74.0529V0.323968H72.0585V2.31831ZM66.5504 15.9938H68.5447V0.323968H66.5504V15.9938ZM54.2044 5.16737V15.9938H56.1988V8.01642C56.4837 7.54158 56.8636 7.1617 57.2434 6.8768C57.7183 6.59189 58.1931 6.49692 58.7629 6.49692C59.5227 6.49692 60.1875 6.68686 60.5673 7.06674C60.9472 7.44661 61.1371 8.11139 61.1371 9.15604V15.9938H63.1315V9.15604C63.1315 7.73151 62.8466 6.68686 62.1818 5.92711C61.517 5.26233 60.5673 4.88246 59.3327 4.88246C58.573 4.88246 58.0032 5.0724 57.4334 5.3573C56.8636 5.64221 56.3887 6.11705 56.0088 6.68686L55.8189 5.0724C56.0088 5.16736 54.2044 5.16737 54.2044 5.16737ZM46.8919 6.49692C47.7466 6.49692 48.4114 6.78183 48.7912 7.25667C49.1711 7.73151 49.456 8.3963 49.456 9.25101V9.53592H44.3277V9.44095C44.4227 8.58623 44.7076 7.92145 45.1824 7.35164C45.5623 6.78183 46.1321 6.49692 46.8919 6.49692ZM47.1768 16.2787C48.1264 16.2787 48.8862 16.1837 49.551 15.8988C50.2158 15.6139 50.6906 15.329 51.1654 14.9491L50.4057 13.6196C50.0258 13.9994 49.551 14.1894 49.0761 14.3793C48.5063 14.5693 47.9365 14.6642 47.2717 14.6642C46.322 14.6642 45.5623 14.2843 45.0875 13.6196C44.5176 12.9548 44.3277 12.1001 44.2327 11.0554V10.9604H51.4503V9.72585C51.4503 8.20636 51.0705 7.06674 50.3107 6.21202C49.551 5.3573 48.4114 4.88246 46.8919 4.88246C45.5623 4.88246 44.5176 5.3573 43.568 6.40196C42.6183 7.44661 42.1434 8.6812 42.1434 10.2957V10.7705C42.1434 12.385 42.6183 13.7145 43.568 14.6642C44.3277 15.7089 45.6573 16.2787 47.1768 16.2787ZM35.3057 6.49692C36.1604 6.49692 36.8252 6.78183 37.2051 7.25667C37.5849 7.73151 37.8698 8.3963 37.8698 9.25101V9.53592H32.7415V9.44095C32.8365 8.58623 33.1214 7.92145 33.5963 7.35164C33.9761 6.78183 34.6409 6.49692 35.3057 6.49692ZM35.5906 16.2787C36.5403 16.2787 37.3 16.1837 37.9648 15.8988C38.6296 15.6139 39.1044 15.329 39.5793 14.9491L38.8195 13.6196C38.4397 13.9994 37.9648 14.1894 37.49 14.3793C36.9202 14.5693 36.3503 14.6642 35.6856 14.6642C34.7359 14.6642 33.9761 14.2843 33.5013 13.6196C32.9315 12.9548 32.7415 12.1001 32.6466 11.0554V10.9604H39.8642V9.72585C39.8642 8.20636 39.4843 7.06674 38.7246 6.21202C37.9648 5.3573 36.8252 4.88246 35.3057 4.88246C33.9761 4.88246 32.9315 5.3573 31.9818 6.40196C31.0321 7.44661 30.5573 8.6812 30.5573 10.2957V10.7705C30.5573 12.385 31.0321 13.7145 31.9818 14.6642C32.8365 15.7089 34.0711 16.2787 35.5906 16.2787ZM29.1327 5.0724C29.0378 5.0724 28.9428 4.97743 28.7529 4.97743C28.5629 4.97743 28.468 4.97743 28.278 4.97743C27.7082 4.97743 27.1384 5.16736 26.6636 5.45227C26.1887 5.73718 25.8088 6.21202 25.5239 6.78183L25.334 5.16737H23.5296V15.9938H25.5239V8.20636C25.7139 7.73151 25.9988 7.44661 26.3787 7.16171C26.7585 6.8768 27.2334 6.78183 27.7082 6.78183L28.7529 6.8768L29.1327 5.0724ZM16.5019 14.6642C15.4573 14.6642 14.6975 14.2843 14.2227 13.5246C13.7478 12.7648 13.5579 11.8152 13.5579 10.7705V10.3906C13.5579 9.34598 13.7478 8.3963 14.2227 7.63655C14.6975 6.8768 15.4573 6.49692 16.5019 6.49692C17.2617 6.49692 17.8315 6.68686 18.3063 7.16171C18.7812 7.63655 19.0661 8.20636 19.0661 8.87114H20.8705V8.77617C20.8705 7.63655 20.4906 6.78183 19.6359 6.02208C18.7812 5.26233 17.7365 4.88246 16.407 4.88246C14.7925 4.88246 13.5579 5.3573 12.7032 6.40196C11.8485 7.44661 11.3736 8.77617 11.3736 10.2957V10.6755C11.3736 12.195 11.8485 13.5246 12.7032 14.5693C13.5579 15.6139 14.7925 16.0888 16.407 16.0888C17.5466 16.0888 18.5912 15.7089 19.5409 14.9491C20.3956 14.1894 20.8705 13.3347 20.8705 12.4799V12.385H19.0661C19.0661 12.9548 18.7812 13.4296 18.3063 13.9045C17.7365 14.4743 17.1667 14.6642 16.5019 14.6642ZM7.195 13.1447C7.195 12.6699 7.00507 12.385 6.72016 12.1001C6.34029 11.8152 5.77047 11.5303 4.82079 11.3403C3.49123 11.0554 2.44658 10.6755 1.7818 10.2007C1.11702 9.72585 0.737142 9.06108 0.737142 8.20636C0.737142 7.35164 1.11702 6.59189 1.87677 5.92711C2.63651 5.26233 3.68117 4.97743 4.91576 4.97743C6.24532 4.97743 7.28997 5.26233 8.04972 5.92711C8.80947 6.59189 9.18935 7.35164 9.18935 8.30133V8.3963H7.28997C7.28997 7.92145 7.10003 7.44661 6.72016 7.06674C6.34029 6.68686 5.77048 6.49692 5.1057 6.49692C4.34595 6.49692 3.87111 6.68686 3.49123 6.97177C3.11136 7.25667 2.92142 7.63655 2.92142 8.11139C2.92142 8.58623 3.11136 8.87114 3.39626 9.15604C3.68117 9.44095 4.34595 9.63089 5.29563 9.82082C6.72016 10.1057 7.76482 10.4856 8.4296 11.0554C9.09438 11.5303 9.47425 12.195 9.47425 13.0498C9.47425 13.9994 9.09438 14.7592 8.23966 15.424C7.38494 16.0887 6.34029 16.2787 5.1057 16.2787C3.68117 16.2787 2.54155 15.8988 1.7818 15.234C0.927081 14.5693 0.547206 13.7145 0.642175 12.7648V12.6699H2.54155C2.54155 13.3347 2.82645 13.9045 3.30129 14.1894C3.77614 14.4743 4.44092 14.6642 5.1057 14.6642C5.86545 14.6642 6.43526 14.5693 6.81513 14.1894C7.00507 13.9994 7.195 13.6196 7.195 13.1447Z" fill="#37393E"/>
                </svg>
            .header__burger(@click="menuToggle()")
            .header__container
                ul.header__list--mobile
                    li.header__item--mobile(:class="[$route.path == '/awards/' ? 'active' : '' ]")
                        router-link(:to="$ml.get('lang_url') + '/awards/'" @click.native="menuCloses").header__link {{ $ml.get('menu.awards') }}
                    li.header__item--mobile(:class="[$route.path == '/apps/' ? 'active' : '' ]")
                        router-link(:to="$ml.get('lang_url') + '/apps/'" @click.native="menuCloses").header__link {{ $ml.get('menu.apps') }}
                    li.header__item--mobile(:class="[$route.path == '/about' ? 'active' : '' ]")
                        router-link(:to="$ml.get('lang_url') + '/about/'" @click.native="menuCloses").header__link {{ $ml.get('menu.about') }}
                .langs--mobile
                    button.langs__item--mobile.current(v-text="$ml.get('title')")
                    button.langs__item--mobile(v-if="$ml.get('lang') != 'ru'" @click="changeLang('ru')") RU
                    button.langs__item--mobile(v-if="$ml.get('lang') != 'en'" @click="changeLang('en')") EN
            nav.header__nav
                ul.header__list
                    li.header__item(:class="[$route.path == '/awards/' ? 'active' : '' ]")
                        router-link(:to="$ml.get('lang_url') + '/awards/'").header__link {{ $ml.get('menu.awards') }}
                    li.header__item(:class="[$route.path == '/apps/' ? 'active' : '' ]")
                        router-link(:to="$ml.get('lang_url') + '/apps/'").header__link {{ $ml.get('menu.apps') }}
                    li.header__item(:class="[$route.path == '/about/' ? 'active' : '' ]")
                        router-link(:to="$ml.get('lang_url') + '/about/'").header__link {{ $ml.get('menu.about') }}
            .langs
                .langs__value(v-text="$ml.get('title')")
                .langs__dropdown
                    .langs__items
                        button.langs__item(v-if="$ml.get('lang') != 'ru'" @click="changeLang('ru')") RU
                        button.langs__item(v-if="$ml.get('lang') != 'en'" @click="changeLang('en')") EN

</template>

<script>
export default {
    name: 'block-header',
    data: function(){
        return {
            isDevice: '',
            menuOpened: false
        }
    },
    props: {
        color: {
            type: String
        }
    },
    methods: {
        changeLang: (code) => {
            localStorage.setItem('lang', code);
            let currentUrl = window.location.pathname;
            if (code != window.config.langDefault) {
                var langCode = currentUrl.split('/')[1];
                if (langCode == 'ua' || langCode == 'ru' || langCode == 'en') {
                    currentUrl = currentUrl.replace('/' + langCode + '/', '/'+code+'/');
                } else {
                    currentUrl = '/' + code + currentUrl;
                }
            } else {
                currentUrl = currentUrl.replace('/ua/', '/');
                currentUrl = currentUrl.replace('/ru/', '/');
                currentUrl = currentUrl.replace('/en/', '/');
            }
            window.location.replace(currentUrl);
        },
        menuToggle(){
            this.menuOpened = !this.menuOpened;

            if(this.menuOpened) {
                this.menuOpens();
            } else {
                this.menuCloses();
            }
        },
        menuOpens(){
            let body = document.getElementsByTagName('body')[0],
                header = document.getElementById('header');

            header.classList.add('menu_opened');
            body.classList.add('menu_opened');
        },
        menuCloses(){
            let body = document.getElementsByTagName('body')[0],
                header = document.getElementById('header');

            header.classList.remove('menu_opened');
            body.classList.remove('menu_opened');
        },
    },
}
</script>

<style lang="scss" scoped>

    .header {
        width: 100%;
        position: absolute;
        z-index: 20;
        top: 0;
        left: 0;
        padding: 25px 80px;
        transition: .3s all ease;

        &.menu_opened {
            position: fixed;
            z-index: 101;

            .header__logo {

                .logo-title path {
                    fill: #37393E !important;
                }

                @media screen and (min-width: 1200px) {

                    &:hover {
                        .logo-title path {
                            fill: #37393E;
                        }
                    }
                }
            }

            .header__burger {
                &:before {
                    background: #3D4950 !important;
                    transform: translate(-50%, -50%) matrix(0.71, 0.71, -0.71, 0.71, 0, 5);
                }

                &:after {
                    background: #3D4950 !important;
                    transform: translate(-50%, -50%) matrix(0.71, -0.71, 0.71, 0.71, 0, -5);
                }
            }

            .header__container {
                // background: transparent;
                opacity: 1;
                pointer-events: all;
            }
        }

        &.white {

            .header__logo {
                .logo-title path {
                    fill: #fff;
                }

                @media screen and (min-width: 1200px) {

                    &:hover {
                        .logo-title path {
                            // fill: #37393E;
                        }
                    }
                }
            }

            .header__item {
                color: #fff;

                @media screen and (min-width: 1200px) {

                    &:hover {
                        color: #AFD2FF;;
                    }
                }
            }

            .header__burger {
                &:before {
                    background: #fff;
                }

                &:after {
                    background: #fff;
                }
            }

            .langs {

                &__value {
                    box-shadow: none;
                }

                @media screen and (min-width: 1200px) {

                    &:hover {
                        .langs__dropdown {
                            box-shadow: none;
                        }
                    }
                }
            }
        }

        &__inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 48px;
            position: relative;
        }

        &__logo {
            position: relative;

            .logo {
                margin-right: 3px;
                transition: .5s transform ease, .5s opacity ease;
                opacity: 1;
            }
            
            .logo-clone {
                position: absolute;
                // top: 50%;
                // left: 10px;
                transform: translate(-10px, 50%);
                opacity: 0;
                transition: transform .5s ease, .5s opacity ease;
            }

            .logo-title {
                margin-bottom: 3px;
                margin-left: 2px;
                
                path{
                    transition: .3s all ease;
                }
            }
            
            @media screen and (min-width: 1200px) {
                &:hover {
                    .logo{
                        transform: translate(-50%, -50%);
                        opacity: 0;
                    }

                    .logo-clone {
                        // top: 0;
                        // left: 0;
                        transform: translate(-23px, 0);
                        opacity: 1;
                    }

                    .logo-title  path{
                        fill: #000;
                    }
                }
            }
        }

        &__burger {
            display: none;
            width: 33px;
            height: 12px;
            cursor: pointer;
            position: relative;
            transition: top .3s ease;

            &:before {
                content: '';
                width: 100%;
                height: 2px;
                background: #3D4950;
                position: absolute;
                top: 0;
                left: 50%;
                transition: transform .3s ease;
                transform: translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 2);
            }

            &:after {
                content: '';
                width: 100%;
                height: 2px;
                background: #3D4950;
                position: absolute;
                bottom: 0;
                left: 50%;
                transition: transform .3s ease;
                transform: translate(-50%, -50%) matrix(1.00,0.00,0.00,1.00,0,3);
            }
        }

        &__container {
            opacity: 0;
            pointer-events: none;
            position: fixed;
            top: 88px;
            left: 0;
            width: 100%;
            height: calc(100vh - 88px);
            background: transparent;
            padding: 46px 35px;
            transition: .3s all ease;

            &:after {
                content: '';
                position: absolute;
                z-index: 2;
                top: 0;
                width: calc(100% - 70px);
                margin: 0 auto;
                height: 1px;
                background: rgba(148, 179, 219, 0.12);
                transition: all .3s ease;
            }
        }

        &__nav {
            position: absolute;
            left: calc(50% - 5px);
            transform: translateX(-50%);
        }

        &__list {
            display: flex;

            & > * {
                &:not(:last-child) {
                    margin-right: 55px;
                }
            }
        }

        &__item {
            font-family: 'SFProDisplay';
            font-weight: normal;
            text-transform: uppercase;
            font-size: 12px;
            line-height: 19px;
            text-align: center;
            letter-spacing: 1px;
            color: #37393E;
            position: relative;
            transition: color .5s ease;

            &.active {
                color: #357FDB;
            }

            @media screen and (min-width: 1200px) {

                &:hover {
                    color: #357FDB;
                }
            }

            &:after {
                content: '';
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: -27px;
                width: 1px;
                height: 14px;
                background: rgba(190, 203, 217, 0.4);
            }

            &:last-child {
                &:after {
                    display: none;
                }
            }

            &--mobile {
                font-family: 'SFProDisplay';
                font-weight: 700;
                font-size: 23px;
                line-height: 27px;
                letter-spacing: 1px;
                text-transform: uppercase;
                color: #37393E;
                margin-bottom: 27px;

                &.active {
                    color: #357FDB;
                }
            }
        }
    }

    .langs {
        position: relative;
        z-index: 1;
        width: 91px;

            @media screen and (min-width: 1200px) {

                &:hover {

                    .langs__dropdown {
                        width: 67px;
                        opacity: 1;
                        box-shadow: 6px 3px 10px rgba(197, 197, 216, 0.19);
                        transition: all .5s ease; 
                    }

                    .langs__item {
                        opacity: 1;
                        transition: opacity .3s ease .2s;
                    }
                }
            }

            &__value {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                background: #F7FAFF;
                box-shadow: 6px 3px 10px rgba(197, 197, 216, 0.19);
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                font-family: 'SFProDisplay';
                font-weight: 600;
                font-size: 12px;
                line-height: 19px;
                letter-spacing: 1px;
                text-transform: uppercase;
                color: #3D4950;
                transition: all .5s ease;
                margin-left: auto;
            }

            &__dropdown {
                position: absolute;
                z-index: 2;
                height: 48px;
                width: 0px;
                opacity: 0;
                top: 0;
                right: 24px;
                text-align: center;
                background: #F7FAFF;
                border: 1px solid rgba(240, 240, 240, 0.58);
                border-radius: 162px 0 0 162px;
                overflow: hidden;
                z-index: -1;
                transform-origin: right;
                transition: all .5s ease;
            }

            &__items {
                position: relative;
                top: 50%;
                transform: translateY(-50%);
            }

            &__item {
                display: block;
                margin-left: 13px;
                cursor: pointer;
                font-size: 12px;
                line-height: 19px;
                letter-spacing: 1px;
                text-transform: uppercase;
                color: rgba(61, 73, 80, 0.67);
                transition: color .5s ease;
                opacity: 0;

                @media screen and (min-width: 1200px) {
                
                    &:hover {
                        color: #3D4950;
                    }
                }

                &--mobile {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'SFProDisplay';
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 19px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    color: #3D4950;
                    margin-right: 10px;
                    border: 1px solid rgba(201, 201, 201, 0.24);
                    box-sizing: border-box;
                    opacity: 0.4;

                    &.current {
                        background: #E4EFFA;
                        border: none;
                        opacity: 1;
                    }
                }
            }

            &--mobile {
                position: fixed;
                bottom: 35px;
                left: 35px;
                display: flex;
                justify-content: flex-start;
            }
    }

    @media (max-width: 960px) {
        .header {
            
            &__burger {
                display: block;
            }

            &__nav {
                display: none;
            }
        }

        .langs {
            display: none;
        }
    }

    @media (max-width: 640px) {
        .header {
            padding: 20px 35px;

            &__logo {
                .logo-title {
                        margin-bottom: 5px;
                        margin-left: 5px;
                }
            }

            &__burger {
                margin-top: -7px;
            }
        }
    }
</style>