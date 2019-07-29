<template lang="pug">
    .poster
        .poster__top
            .laptop
                img(src="@/assets/img/laptop.png").laptop__img
                .laptop__cover
                    .img(v-if="!page.slider")
                        <svg width="119" height="25" viewBox="0 0 119 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.165 23.202L9.51159 16.6492C9.51159 16.5542 9.41662 16.5542 9.32165 16.4592C8.94178 16.0794 8.37196 16.0794 7.99209 16.2693L1.6292 20.068C1.05939 20.3529 0.964418 21.0177 1.24932 21.5875C1.43926 21.9674 1.81914 22.1573 2.19901 22.1573C2.38895 22.1573 2.57888 22.0624 2.76882 21.9674L8.277 18.7385L12.2657 24.4366C12.4556 24.7215 12.8355 24.9114 13.2154 24.9114C13.4053 24.9114 13.6902 24.8165 13.8801 24.7215C14.45 24.4366 14.5449 23.6768 14.165 23.202Z" fill="#357FDB"/>
                            <path d="M113.964 9.49692C114.819 9.49692 115.483 9.78183 115.863 10.2567C116.243 10.7315 116.528 11.3963 116.528 12.251V12.5359H111.4V12.441C111.495 11.5862 111.78 10.9215 112.254 10.3516C112.729 9.78183 113.299 9.49692 113.964 9.49692ZM114.249 19.2787C115.199 19.2787 115.958 19.1837 116.623 18.8988C117.288 18.6139 117.763 18.329 118.237 17.9491L117.478 16.6196C117.098 16.9994 116.623 17.1894 116.148 17.3793C115.673 17.5693 115.009 17.6642 114.344 17.6642C113.394 17.6642 112.634 17.2843 112.16 16.6196C111.685 15.9548 111.4 15.1001 111.305 14.0554V13.9604H118.522V12.7259C118.522 11.2064 118.143 10.0667 117.383 9.21202C116.623 8.3573 115.483 7.88246 113.964 7.88246C112.634 7.88246 111.59 8.3573 110.64 9.40196C109.69 10.4466 109.215 11.6812 109.215 13.2957V13.7705C109.215 15.385 109.69 16.7145 110.64 17.6642C111.495 18.7089 112.729 19.2787 114.249 19.2787ZM105.322 18.9938V9.59189H107.601V8.16737H105.322V6.74284C105.322 6.07806 105.512 5.60321 105.797 5.22334C106.082 4.84347 106.556 4.7485 107.126 4.7485C107.506 4.7485 107.791 4.7485 108.171 4.84347L108.456 3.32397C108.171 3.229 107.886 3.229 107.696 3.13403C107.506 3.13403 107.221 3.03906 107.031 3.03906C105.892 3.03906 105.037 3.32397 104.372 3.98875C103.707 4.65353 103.422 5.50825 103.422 6.64787V8.0724H101.713V9.49692H103.422V18.9938H105.322ZM97.0595 18.9938H99.0538V8.16737H97.0595V18.9938ZM97.0595 5.31831H99.0538V3.32397H97.0595V5.31831ZM91.5513 18.9938H93.5457V3.32397H91.5513V18.9938ZM79.2054 8.16737V18.9938H81.1997V11.0164C81.4847 10.5416 81.8645 10.1617 82.2444 9.8768C82.7193 9.59189 83.1941 9.49692 83.7639 9.49692C84.5237 9.49692 85.1884 9.68686 85.5683 10.0667C85.9482 10.4466 86.1381 11.1114 86.1381 12.156V18.9938H88.1325V12.156C88.1325 10.7315 87.8476 9.68686 87.1828 8.92711C86.518 8.26233 85.5683 7.88246 84.3337 7.88246C83.574 7.88246 83.0042 8.0724 82.4343 8.3573C81.8645 8.64221 81.3897 9.11705 81.0098 9.68686L80.8199 8.0724C81.0098 8.16736 79.2054 8.16737 79.2054 8.16737ZM71.8928 9.49692C72.7476 9.49692 73.4123 9.78183 73.7922 10.2567C74.1721 10.7315 74.457 11.3963 74.457 12.251V12.5359H69.3287V12.441C69.4236 11.5862 69.7086 10.9215 70.1834 10.3516C70.5633 9.78183 71.1331 9.49692 71.8928 9.49692ZM72.1777 19.2787C73.1274 19.2787 73.8872 19.1837 74.552 18.8988C75.2167 18.6139 75.6916 18.329 76.1664 17.9491L75.4067 16.6196C75.0268 16.9994 74.552 17.1894 74.0771 17.3793C73.5073 17.5693 72.9375 17.6642 72.2727 17.6642C71.323 17.6642 70.5633 17.2843 70.0884 16.6196C69.5186 15.9548 69.3287 15.1001 69.2337 14.0554V13.9604H76.4513V12.7259C76.4513 11.2064 76.0714 10.0667 75.3117 9.21202C74.552 8.3573 73.4123 7.88246 71.8928 7.88246C70.5633 7.88246 69.5186 8.3573 68.5689 9.40196C67.6193 10.4466 67.1444 11.6812 67.1444 13.2957V13.7705C67.1444 15.385 67.6193 16.7145 68.5689 17.6642C69.3287 18.7089 70.6582 19.2787 72.1777 19.2787ZM60.3067 9.49692C61.1614 9.49692 61.8262 9.78183 62.206 10.2567C62.5859 10.7315 62.8708 11.3963 62.8708 12.251V12.5359H57.7425V12.441C57.8375 11.5862 58.1224 10.9215 58.5972 10.3516C58.9771 9.78183 59.6419 9.49692 60.3067 9.49692ZM60.5916 19.2787C61.5413 19.2787 62.301 19.1837 62.9658 18.8988C63.6306 18.6139 64.1054 18.329 64.5803 17.9491L63.8205 16.6196C63.4406 16.9994 62.9658 17.1894 62.4909 17.3793C61.9211 17.5693 61.3513 17.6642 60.6865 17.6642C59.7369 17.6642 58.9771 17.2843 58.5023 16.6196C57.9325 15.9548 57.7425 15.1001 57.6476 14.0554V13.9604H64.8652V12.7259C64.8652 11.2064 64.4853 10.0667 63.7255 9.21202C62.9658 8.3573 61.8262 7.88246 60.3067 7.88246C58.9771 7.88246 57.9325 8.3573 56.9828 9.40196C56.0331 10.4466 55.5582 11.6812 55.5582 13.2957V13.7705C55.5582 15.385 56.0331 16.7145 56.9828 17.6642C57.8375 18.7089 59.0721 19.2787 60.5916 19.2787ZM54.1337 8.0724C54.0387 8.0724 53.9438 7.97743 53.7538 7.97743C53.5639 7.97743 53.4689 7.97743 53.279 7.97743C52.7092 7.97743 52.1394 8.16736 51.6645 8.45227C51.1897 8.73718 50.8098 9.21202 50.5249 9.78183L50.335 8.16737H48.5306V18.9938H50.5249V11.2064C50.7148 10.7315 50.9998 10.4466 51.3796 10.1617C51.7595 9.8768 52.2343 9.78183 52.7092 9.78183L53.7538 9.8768L54.1337 8.0724ZM41.5029 17.6642C40.4582 17.6642 39.6985 17.2843 39.2237 16.5246C38.7488 15.7648 38.5589 14.8152 38.5589 13.7705V13.3906C38.5589 12.346 38.7488 11.3963 39.2237 10.6365C39.6985 9.8768 40.4582 9.49692 41.5029 9.49692C42.2626 9.49692 42.8325 9.68686 43.3073 10.1617C43.7821 10.6365 44.067 11.2064 44.067 11.8711H45.8715V11.7762C45.8715 10.6365 45.4916 9.78183 44.6369 9.02208C43.7821 8.26233 42.7375 7.88246 41.4079 7.88246C39.7935 7.88246 38.5589 8.3573 37.7042 9.40196C36.8494 10.4466 36.3746 11.7762 36.3746 13.2957V13.6755C36.3746 15.195 36.8494 16.5246 37.7042 17.5693C38.5589 18.6139 39.7935 19.0888 41.4079 19.0888C42.5476 19.0888 43.5922 18.7089 44.5419 17.9491C45.3966 17.1894 45.8715 16.3347 45.8715 15.4799V15.385H44.067C44.067 15.9548 43.7821 16.4296 43.3073 16.9045C42.7375 17.4743 42.1677 17.6642 41.5029 17.6642ZM32.196 16.1447C32.196 15.6699 32.006 15.385 31.7211 15.1001C31.3413 14.8152 30.7715 14.5303 29.8218 14.3403C28.4922 14.0554 27.4476 13.6755 26.7828 13.2007C26.118 12.7259 25.7381 12.0611 25.7381 11.2064C25.7381 10.3516 26.118 9.59189 26.8777 8.92711C27.6375 8.26233 28.6821 7.97743 29.9167 7.97743C31.2463 7.97743 32.2909 8.26233 33.0507 8.92711C33.8104 9.59189 34.1903 10.3516 34.1903 11.3013V11.3963H32.2909C32.2909 10.9215 32.101 10.4466 31.7211 10.0667C31.3413 9.68686 30.7715 9.49692 30.1067 9.49692C29.3469 9.49692 28.8721 9.68686 28.4922 9.97177C28.1123 10.2567 27.9224 10.6365 27.9224 11.1114C27.9224 11.5862 28.1123 11.8711 28.3972 12.156C28.6821 12.4409 29.3469 12.6309 30.2966 12.8208C31.7211 13.1057 32.7658 13.4856 33.4306 14.0554C34.0954 14.5303 34.4752 15.195 34.4752 16.0498C34.4752 16.9994 34.0954 17.7592 33.2406 18.424C32.3859 19.0887 31.3413 19.2787 30.1067 19.2787C28.6821 19.2787 27.5425 18.8988 26.7828 18.234C25.9281 17.5693 25.5482 16.7145 25.6432 15.7648V15.6699H27.5425C27.5425 16.3347 27.8274 16.9045 28.3023 17.1894C28.7771 17.4743 29.4419 17.6642 30.1067 17.6642C30.8664 17.6642 31.4362 17.5693 31.8161 17.1894C32.006 16.9994 32.196 16.6196 32.196 16.1447Z" fill="white"/>
                            <path d="M19.1836 11.5862C19.2786 11.3013 19.2786 11.0164 19.0887 10.7314C19.0887 10.7314 19.0887 10.7314 19.0887 10.6365L18.9937 10.5415C18.9937 10.5415 18.9937 10.4465 18.8987 10.4465L18.8038 10.3516L18.7088 10.2566L1.61446 0.0949689C1.61446 0.0949689 1.61446 0.0949689 1.5195 0.0949689C1.5195 0.0949689 1.42453 0.0949685 1.42453 0H1.32956H1.23459H1.13962H1.04465H0.949686H0.854717H0.759748H0.664779C0.664779 0 0.56981 3.60861e-07 0.56981 0.0949689C0.56981 0.0949689 0.474843 0.0949684 0.474843 0.189937C0.474843 0.189937 0.379874 0.189937 0.379874 0.284906C0.379874 0.284906 0.284905 0.284905 0.284905 0.379874C0.284905 0.379874 0.284905 0.474843 0.189936 0.474843L0.0949671 0.569812C0.0949671 0.569812 0.0949671 0.569811 0.0949671 0.66478C0.0949671 0.66478 0.0949685 0.759749 0 0.759749V0.854717V0.949686V1.04465C0 1.04465 0 1.04465 0 1.13962V21.5579C0 22.2226 0.474842 22.6975 1.13962 22.6975C1.8044 22.6975 2.27924 22.2226 2.27924 21.5579V3.03899L16.0497 11.2063L10.7314 14.2453C10.1616 14.5302 10.0667 15.195 10.3516 15.7648C10.5415 16.1447 10.9214 16.3346 11.3013 16.3346C11.4912 16.3346 11.6811 16.2396 11.8711 16.1447L18.5189 12.156C18.6138 12.156 18.6138 12.061 18.7088 12.061C18.8038 11.966 18.8038 11.966 18.8987 11.8711C18.8987 11.8711 18.8987 11.8711 18.8987 11.7761C19.0887 11.6811 19.0887 11.5862 19.1836 11.5862Z" fill="#EF3044"/>
                        </svg>
                        img(src="@/assets/img/loading.svg")
                swiper.laptop__slider(v-if="page.slider" ref="swiper" :options="swiperOptions")
                    swiper-slide(v-for="(slide, index) in page.slider" :key="index" class="laptop__slide" :style="{backgroundImage: 'url(\"' + slide.background.sizes.large + '\")'}")
                        h2.laptop__title
                            span.laptop__orig(v-html="slide.title")
                            .typer(:ref="'typer_' + index" :data-text="slide.title")
                        .laptop__desc(v-html="slide.description")
                        a(v-if="slide.button" :href="slide.button.url").laptop__read-more
                            span(v-html="slide.button.title")
                .laptop__player(:class="{'laptop__player_active': page.slider && page.slider.length}")
                    button.laptop__stop(v-if="!pauseSliderCondition" @click="pauseSlider")
                        img(src="@/assets/img/player-pause.svg" style="margin-bottom: 2px")
                    button.laptop__play(v-else @click="startSlider")
                        img(src="@/assets/img/play-button.svg")
                    .laptop__track#laptop__track
                        .laptop__track--active(ref="track")
                    .laptop__pagination
                .small-screen
                    .small-screen__bullets
                    swiper.small-screen__slider(v-if="page.slider" ref="swiperSmall" :options="smallScreenOptions" )
                        swiper-slide.small-screen__slide(v-for="(slide, index) in page.slider" :key="index")
                            .small-screen__header
                                span.small-screen__control
                                span.small-screen__control
                                span.small-screen__control
                                span.small-screen__control
                            .small-screen__img
                                img(:src="slide.screen.sizes.medium_large" style="margin-top:-16px;")
            .laptop__buttons
                    button(@click="slideTo(-1)").laptop__btn.laptop__btn--prev
                        <svg class="progress-disabled" width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle class="progress-disabled__circle" opacity="0.4" cx="26.125" cy="26.875" r="25.125" transform="rotate(-90 26.125 26.875)" stroke="#BACFE6" stroke-width="2"/>
                        </svg>
                        <svg class="progress-active" width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle class="progress-active__circle" opacity="0.4" cx="26.125" cy="26.875" r="25.125" transform="rotate(-90 26.125 26.875)" stroke="#BACFE6" stroke-width="2"/>
                        </svg>
                        <svg class="laptop__arrow" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6532 7.41667L15.6532 5.58333H4.40993L7.64039 2.28333L6.3841 1L1 6.5L6.3841 12L7.64039 10.7167L4.40993 7.41667H15.6532Z" fill="#3D4950" stroke="#DBE8F2" stroke-width="0.5"/>
                        </svg>
                    button(@click="slideTo(1)").laptop__btn.laptop__btn--next
                        <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.4" cx="26.125" cy="26.875" r="25.125" transform="rotate(-90 26.125 26.875)" stroke="#BACFE6" stroke-width="2"/>
                        </svg>
                        <svg class="progress-active" width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle class="progress-active__circle" opacity="0.4" cx="26.125" cy="26.875" r="25.125" transform="rotate(-90 26.125 26.875)" stroke="#BACFE6" stroke-width="2"/>
                        </svg>
                        <svg class="laptop__arrow" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.346801 5.58333L0.346801 7.41667L11.5901 7.41667L8.35961 10.7167L9.6159 12L15 6.5L9.6159 1L8.35961 2.28333L11.5901 5.58333L0.346801 5.58333Z" fill="#3D4950" stroke="#DBE8F2" stroke-width="0.5"/>
                        </svg>
            .poster__social.social
                a(:href="page.social_links ? page.social_links.twitter : ''" target="_blank").social__item
                    <svg class="twitter" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 1.44099C12.5166 1.65457 12.0014 1.79613 11.4644 1.86487C12.0169 1.53264 12.4386 1.01057 12.6368 0.381304C12.1217 0.690619 11.5529 0.909103 10.9468 1.03103C10.4577 0.506503 9.76056 0.181641 9.00006 0.181641C7.52456 0.181641 6.33669 1.3878 6.33669 2.86646C6.33669 3.07922 6.35456 3.28379 6.39844 3.47854C4.18275 3.36971 2.22219 2.3002 0.905125 0.67098C0.675187 1.07276 0.540313 1.53264 0.540313 2.02771C0.540313 2.95729 1.01562 3.78131 1.72413 4.25838C1.29594 4.25019 0.875875 4.12499 0.52 3.92778C0.52 3.93597 0.52 3.94661 0.52 3.95724C0.52 5.2616 1.44381 6.34502 2.65525 6.5946C2.43831 6.65434 2.20187 6.68298 1.9565 6.68298C1.78587 6.68298 1.61362 6.67316 1.45194 6.63715C1.79725 7.70011 2.77713 8.48158 3.94225 8.50695C3.0355 9.22132 1.88419 9.65174 0.637812 9.65174C0.41925 9.65174 0.209625 9.64192 0 9.61492C1.18056 10.3817 2.57969 10.8194 4.0885 10.8194C8.99275 10.8194 11.674 6.72798 11.674 3.1815C11.674 3.06285 11.6699 2.94829 11.6643 2.83455C12.1932 2.45649 12.6376 1.98434 13 1.44099Z" fill="#7BAAE6"/>
                    </svg>
                a(:href="page.social_links ? page.social_links.facebook : ''" target="_blank").social__item
                    <svg class="facebook" width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.89988 4.25965V3.13952C4.89988 2.97136 4.90894 2.84112 4.92734 2.74911C4.94567 2.65697 4.98739 2.56634 5.05213 2.47688C5.11677 2.38747 5.22145 2.32574 5.36601 2.29154C5.51075 2.25728 5.7031 2.2402 5.94325 2.2402H7.25421V0H5.15839C3.9457 0 3.07473 0.24582 2.54535 0.73746C2.01604 1.22921 1.75141 1.95355 1.75141 2.91074V4.25962H0.181641V6.49999H1.75132V13H4.89985V6.50001H6.99554L7.27255 4.25965H4.89988Z" fill="#7BAAE6"/>
                    </svg>
                a(:href="page.social_links ? page.social_links.instagram : ''" target="_blank").social__item
                    <svg class="instagram" width="13" heigth="13" fill="#7baae6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.97 12.97">
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                                <g class="cls-1" style="opacity:0.8"><path class="cls-2" d="M9.15,13,3.77,13A3.79,3.79,0,0,1,0,9.15L0,3.77A3.79,3.79,0,0,1,3.82,0L9.2,0A3.79,3.79,0,0,1,13,3.82l0,5.39A3.79,3.79,0,0,1,9.15,13ZM3.81,1.1A2.68,2.68,0,0,0,1.12,3.77l0,5.39a2.67,2.67,0,0,0,2.67,2.69l5.39,0A2.7,2.7,0,0,0,11.85,9.2l0-5.39A2.67,2.67,0,0,0,9.2,1.12Z"/>
                                    <path class="cls-2" fill="#7baae6" d="M3.13.56,1.45,1.68.89,3.36.33,10.64l3.36,1.68H10.4l2.24-2.8v-5l-1.12-2.8L9.84.56Z"/>
                                        <path class="cls-3" fill="#ebebf6" d="M6.47,9.54a3.06,3.06,0,1,1,3.07-3A3.05,3.05,0,0,1,6.47,9.54Zm0-5.16A2.11,2.11,0,1,0,8.58,6.49,2.11,2.11,0,0,0,6.49,4.38Z"/>
                                            <path class="cls-4" fill="#e6f1fb" d="M10.84,2.82a.67.67,0,1,1-1.33,0,.67.67,0,0,1,1.33,0Z"/>
                                </g>
                            </g>
                        </g>
                    </svg>
        .poster__bottom
            img(src="@/assets/img/screenlife-2x.png")
            button(type="button" @click="scrollTo").poster__scroll
                .poster__text Scroll
                span.poster__line
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { clearInterval, setInterval } from 'timers';

let sliderLoad = 0;
let progressWidth = 1;
let timer;
let interval;

export default {
    name: 'poster',
    components: {
        swiper,
        swiperSlide
    },
    props: {
        page: Object
    },
    data: function() {
        return {
            isClear: false,
            isSliderInited: false,
            autoplayTime: 5000,
            pauseSliderCondition: false,
            swiperOptions: {
                slidesPerView: 1,
                pagination: {
                    el: '.laptop__pagination',
                    type: 'fraction'
                },
                on: {
                    init: () => {
                        this.isSliderInited = true;
                        this.checkSlider();
                    },
                    touchStart: () => {
                        this.pauseSlider();
                    },
                    touchEnd: () => {
                        this.startSlider();
                    },
                    slideChange: (e) => {
                        if (interval) clearInterval(interval);
                        if (window.innerWidth <= 960) return;
                        let i = this.swiper ? this.swiper.realIndex : 0;
                        let el = this.$refs['typer_' + i][0];
                        el.innerHTML = '';
                        let text = el.getAttribute('data-text');
                        let k = 0;
                        let size = text.length;
                        interval = setInterval(() => {
                            el.innerHTML += text[k];
                            k++;
                            if (k == size) {
                                clearInterval(interval)
                            }
                        }, 110);
                    },
                    sliderMove: () => {
                        this.$refs.swiper.swiper.on('slideChange', (e) => {
                            clearInterval(timer);
                            progressWidth = 1;
                            this.initSlider();
                            this.pauseSliderCondition = false;
                        })
                    },
                },
                breakpoints: {
                    1200: {
                        simulateTouch : true,
                    }
                },
                loop: true,
                simulateTouch : false,
                
            },
            smallScreenOptions: {
                effect: 'flip',
                pagination: {
                    el: '.small-screen__bullets',
                    clickable: true
                },
                paginationClickable :true,
                grabCursor: true,
                loop: true,
                simulateTouch : false,
            }
            // progressWidth: 1,
        }
    },
    mounted(){
        this.checkSlider();
    },
    computed: {
        swiperSmall(){
            return this.$refs.swiperSmall.swiper;
        },
        swiper(){
            return this.$refs.swiper.swiper;
        },
        track() {
            return this.$refs.track;
        }
    },
    methods: {
        onStringTyped(i, self) {
            console.log(self);
        },
        checkSlider() {

            if (!this.page.isEmpty && this.isSliderInited) {
                this.$nextTick(() => {
                    this.swiper.controller.control = this.swiperSmall;
                    this.swiperSmall.controller.control = this.swiper;
                    this.initSlider();
                });
                this.isSliderInited = false;
            }
        },
        initSlider(){
            let autoplayTime = this.autoplayTime,
                item = 0;

            timer = setInterval(()=>{
                console.log('asda');
                if (this.isClear) {
                    clearInterval(timer);
                    return false;
                }
                if(!this.pauseSliderCondition) {
                    item += autoplayTime / 100;
                    progressWidth += 1;
                    if(item === autoplayTime) {
                        if(this.swiperSmall.destroyed !== true) {   //check when changing route
                            this.swiperSmall.slideNext();
                            item = 0;
                            progressWidth = 1;
                        }
                    }
                    this.track.style.transform = 'scaleX(' + (progressWidth/100) + ')';
                } else {
                    window.clearInterval(timer);
                }
            }, autoplayTime / 100);
        },
        pauseSlider(){
            this.pauseSliderCondition = true;
        },
        startSlider(){
            this.pauseSliderCondition = false;
        },
        slideTo(direction){
            clearInterval(timer);
            progressWidth = 0;
            this.initSlider();
            this.pauseSliderCondition = false;
            direction == 1 ? this.swiperSmall.slideNext() : this.swiperSmall.slidePrev();
        },
        scrollTo(){
            let elem = document.getElementById('apps');

            window.scrollTo({
                top: elem.getBoundingClientRect().top + pageYOffset,
                behavior: 'smooth'
            });
        },
    },
    beforeDestroy() {
        window.clearInterval(timer);
        console.log('CLEAR');
        this.isClear = true;
        clearInterval(interval);
        this.isSliderInited = false;
        sliderLoad = 0;
        progressWidth = 1;
        this.track.style.transform = 'scaleX(' + (progressWidth/100) + ')';
    },
    watch: {
        page() {
            this.checkSlider();
        }
    }
}
</script>

<style lang="scss" scoped>

    .typing {
        color: #fff;
    }

    .poster {
        background-repeat: no-repeat;
        background-position: right top, center;
        background-size: 40%, cover;
        margin: 10px 10px 0 10px;

        &__top {
            background: url('../../assets/img/main-bg-pattern.png'),
                        linear-gradient(174.64deg, #EBF1FD -30.68%, #DAEEF6 187.69%);
            background-repeat: no-repeat;
            background-size: 30%, 100%;
            background-position: right top, center;
            padding: 0 0 32px 87px;
            padding-top: 90px;
            border-radius: 8px 8px 0 0;
            position: relative;
        }

        &__bottom {
            text-align: center;
            padding-bottom: 32px;

            img {
                width: 52%;
                height: auto;
                margin-top: 8px;
            }
        }

        &__scroll {
            margin: 0 auto;
            margin-top: 0;
            display: block;
            position: relative;
            z-index: 2;
        }

        &__text {
            margin-bottom: 10px;
            font-family: 'SFProDisplay';
            font-weight: normal;
            font-size: 12px;
            line-height: 19px;
            letter-spacing: 1px;
            color: #3D4950;
            cursor: pointer;
            position: relative;
        }

        &__line {
            display: inline-block;
            width: 1px;
            height: 28px;
            background: #727C88;
            opacity: 0.2;
        }
    }

    .laptop{
        position: relative;
        left: 30px;
        z-index: 2;
        width: 88%;
        height: auto;
        margin-bottom: -140px;

        &__orig {
            color: transparent;
            opacity: 0;
            pointer-events: none;
        }

        .typer {
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;

            &:after {
                content: "|";
                display: inline !important;
                animation-iteration-count: infinite;
                opacity: 1 !important;
                animation: blink-caret 0.7s infinite;
                vertical-align: top;
                line-height: 0;
                position: relative;
                top: 26px;
            }

            @keyframes blink-caret {
                from, to { opacity: 0; }
                50% { opacity: 1 }
            }
        }

        &:before {
            // content: "";
            display: block;
            position: absolute;
            top: 2.4%;
            left: 50.4%;
            transform: translateX(-50%);
            width: 73%;
            height: 85%;
            border-radius: 20px 20px 0 0;
            // background-color: #222;
        }

        &:after {
            content: url(../../assets/img/shadow.png);
            position: absolute;
            bottom: -100px;
            left: 50%;
            transform: translateX(-50%);
        }

        &__img {
            width: 100%;
            height: auto;
            display: block;
            margin: 0 auto;
            pointer-events: none;
        }

        &__slider {
            position: absolute;
            z-index: -1;
            top: 2.4%;
            left: 50.5%;
            transform: translateX(-50%);
            // width: 73%;
            width: 74%;
            height: 85%;
            border-radius: 20px 20px 0 0;
            overflow: hidden;
        }

        &__cover {
            position: absolute;
            z-index: -1;
            top: 2.4%;
            left: 50.5%;
            transform: translateX(-50%);
            // width: 73%;
            width: 74%;
            height: 85%;
            border-radius: 20px 20px 0 0;
            overflow: hidden;
            background: linear-gradient(to bottom, #37393e 0%,#212121 100%);
            font-size: 0;
            text-align: center;

            .img {
                display: inline-block;
                vertical-align: middle;

                img {
                    display: block;
                    width: 24px;
                    margin: 25px auto 0;
                }
            }

            &:before {
                content: "";
                display: inline-block;
                vertical-align: middle;
                height: 100%;
            }
        }

        &__slide {
            width: 100% !important;
            height: 100% !important;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            padding: 9% 0 0 7.5%;
        }

        &__buttons {
            display: flex;
            position: absolute;
            z-index: 2;
            left: 74px;
            top: calc(50% + 10px);
            transform: translateY(-50%);
        }

        &__btn {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            @media screen and (min-width: 1200px) {
            
                &:hover {
                    .progress-active {
                        opacity: 1;

                        &__circle {
                            stroke: #7FA3CA;
                            stroke-dasharray: 200;
                            animation: progress-btn .5s ease;
                        }
                    }
                }
            }

            &--next {
                margin-bottom: 6px;
            }

            &--prev {
                margin-right: 9px;
                margin-bottom: 6px;
            }
        }

        &__arrow {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &__player {
            width: 62%;
            height: 23px;
            position: absolute;
            z-index: 3;
            bottom: 17.5%;
            left: calc(50% + 5px);
            transform: translateX(-50%);
            background: rgba(255,255,255, 0.2);
            border-radius: 5px;
            display: flex;
            align-items: center;
            opacity: 0;
            transition: opacity .5s ease;

            &_active {
                opacity: 1;
            }
        }

        &__stop {
            width: 5%;
            // opacity: 1;
            transition: .3s all ease;
            pointer-events: all;
        }

        &__play {
            width: 5%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: .3s all ease;
            cursor: pointer;

            img {
                max-width: 10px;
                max-height: 10px;
            }
        }

        &__track {
            width: 90%;
            height: 1px;
            background: rgba(255, 255, 255, 0.12);
            position: relative;
            z-index: 1;

            &--active {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                z-index: 2;
                background: #fff;
                transform-origin: 0 0;
                transform: sacleX(0);
            }
        }

        &__pagination {
            width: 5%;
            color: #fff;
            font-family: 'Roboto';
            font-weight: normal;
            font-style: normal;
            font-weight: normal;
            font-size: 11px;
            line-height: 27px;
            opacity: 0.9;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &__title {
            font-family: 'SFProDisplay';
            font-weight: 700;
            font-size: 48px;
            line-height: 63px;
            letter-spacing: 1.3px;
            text-transform: uppercase;
            color: #FFFFFF;
            margin-bottom: 2%; //15px
            max-width: 377px;
            position: relative;
        }

        &__desc {
            font-family: 'Roboto';
            font-weight: 300;
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 25px;
            color: #FFFFFF;
            margin-bottom: 3.5%;
            max-width: 407px;
        }

        &__read-more {
            width: 146px;
            height: 43px;
            border-radius: 20px;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'SFProDisplay';
            font-weight: 600;
            font-size: 11px;
            line-height: 19px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #37393E;
            cursor: pointer;
            transition: opacity .5s ease, background-color .5s ease;
            position: relative;
            opacity: 1;

            span {
                position: relative;
                z-index: 2;
            }

            @media screen and (min-width: 1200px) {
                &:hover {
                    opacity: .8;
                }
            }

            // &:before {
            //     content: '';
            //     width: 100%;
            //     height: 100%;
            //     border-radius: 20px;
            //     position: absolute;
            //     top: 0;
            //     left: 0;
            //     opacity: 0;
            //     background-color: rgba(255, 255, 255, 0.85);
            //     transition: opacity .5s ease;
            // }
        }
    }

    .social {
        // display: flex;
        display: inline-block;
        align-items: center;
        position: relative;
        z-index: 2;
        

        & > * {
            &:not(:last-child) {
                margin-right: 28px;
            }
        }

        &__item {
            svg {
                margin-bottom: -3px;

                path{
                    transition: .3s all ease;
                }
            }

            @media screen and (min-width: 1200px) {

                &:hover {
                    svg.twitter,
                    svg.facebook {
                        path {
                            fill: #4F7DB7;
                        }
                    }

                    svg.instagram {
                        .cls-2, .cls-1 {
                            fill: #4F7DB7;
                        }
                    }
                }
            }
        }
    }

    .small-screen {
        width: 355px;
        height: 267px;
        position: absolute;
        z-index: 3;
        top: 22%;
        right: 6%;
        border-radius: 10px;

        &__bullets {
            position: absolute;
            z-index: 2;
            left: 50%;
            transform: translateX(-50%);
            top: -21px;
            display: none;
            align-items: center;

            /deep/ .swiper-pagination-bullet-active{
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: #618DC5;
                opacity: 1 !important;
                position: relative;
                z-index: 2;

                &:before {
                    content: '';
                    width: 14px !important;
                    height: 14px !important;
                    border-radius: 50%;
                    background: rgba(144, 184, 234, 0.25);
                    position: absolute;
                    z-index: 1;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }
            }

            /deep/ .swiper-pagination-bullet{
                margin-right: 13px;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: #90B8EA;
                opacity: 0.4;
                cursor: pointer;
            }
        }

        &__header {
            height: 16px;
            width: 100%;
            background-color: #F7FAFF;
            display: flex;
            align-items: center;
            padding: 0 10px;
            border-radius: 10px 10px 0 0;

            & > * {
                &:not(:last-child) {
                    margin-right: 5px;
                }
            }
        }

        &__control {
            width: 5px;
            height: 5px;
            border-radius: 50%;

            &:nth-child(1) {
                background-color: #BACADF;
                opacity: 0.7;
            }

            &:nth-child(2) {
                background-color: #D4E1F2;
            }

            &:nth-child(3) {
                background-color: rgba(212, 225, 242, 0.5);
            }

            &:nth-child(4) {
                width: 35px;
                background: #DFE7F2;
                border-radius: 3px;
                margin-left: auto;
            }
        }

        &__img {
            border-radius: 0 0 10px 10px;
            overflow: hidden;
            width: 100%;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    /deep/ .swiper-pagination-current{
        font-weight: bolder;
    }

    @media (max-width: 1200px) {
        .laptop {
            margin-bottom: -110px;

            &:after {
                transform: translateX(-50%) scale(0.7);
                bottom: -80px;
            }

            &__title {
                font-size: 32px;
                line-height: normal;
                max-width: 330px;
            }

            &__desc {
                max-width: 330px;
            }

            .typer {
                &:after {
                    top: 16px;
                }
            }
        }

        .small-screen {
            transform: scale(0.8);
            top: 14%;
            right: 0;
        }
    }

    @media screen and (max-width: 960px) {
        .poster {
            height: auto;
            // height: 1px;
            // min-height: 610px;

            &__top {
                padding: 0;
                height: 100%;
                border-radius: 12px 12px 0 0;
            }

            &__bottom {
                display: none;
            }

            &__social {
                display: none;
            }
        }

        .laptop {
            margin-bottom: 0;
            width: 100%;
            height: 100%;
            left: auto;
            position: static;

            .typer {
                display: none;
            }

            &:before {
                display: none;
            }

            &:after {
                display: none;
            }
            
            &__img {
                height: 0;
            }

            &__slider {
                // height: 669px;
                height: auto;
                width: 100%;
                left: auto;
                top: auto;
                transform: none;
                position: static;
            }

            &__cover {
                display: none;
            }

            &__slide {
                padding: 80px 0 0 0;
                background-image: none !important;
            }

            &__title {
                max-width: 304px;
                margin: 0 auto 30px auto;
                text-align: center;
                color: #37393E;
            }

            &__orig {
                pointer-events: all;
                opacity: 1;
                color: inherit;
            }

            &__desc {
                max-width: 343px;
                margin: 0 auto 30px auto;
                text-align: center;
                color: #37393E;
                opacity: 0.7;
            }

            &__read-more {
                margin: 0 auto;
            }

            &__buttons {
                display: none;
            }

            &__player {
                display: none;
            }
        }

        .small-screen {
            // display: none;
            // position: absolute;
            position: relative;
            top: auto;
            bottom: -60px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            max-width: 373px;
            height: auto;

            &__slide {
                height: 100% !important;
                width: 100% !important;
            }

            &__bullets {
                display: flex;
            }
        }
    }

    @media (max-width: 640px) {
        .laptop {

            &__title {
                line-height: 42px;
                letter-spacing: 1px;
                margin-bottom: 19px;
            }

            &__desc {
                margin-bottom: 22px;
            }
        }

        .small-screen {
            width: 94%;
        }
    }
</style>


