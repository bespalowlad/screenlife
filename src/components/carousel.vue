<template lang="pug">
    .carousel
        .carousel-wrapper
            .carousel-slide(v-for="(item,index) in slides" :key="index" :style="{'background-image': 'url(' + item.url + ')'}")
        .carousel-buttons
            button.carousel-btn.carousel-prev(@click="prev")
                <svg class="progress" width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle class="progress-disabled__circle" opacity="0.4" cx="26.125" cy="26.875" r="25.125" transform="rotate(-90 26.125 26.875)" stroke="#BACFE6" stroke-width="2"/>
                </svg>
                <svg class="progress-active" width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle class="progress-active__circle" opacity="0.4" cx="26.125" cy="26.875" r="25.125" transform="rotate(-90 26.125 26.875)" stroke="#BACFE6" stroke-width="2"/>
                </svg>
                <svg class="progress-arrow" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.6532 7.41667L15.6532 5.58333H4.40993L7.64039 2.28333L6.3841 1L1 6.5L6.3841 12L7.64039 10.7167L4.40993 7.41667H15.6532Z" fill="#3D4950" stroke="#DBE8F2" stroke-width="0.5"/>
                </svg>
            button.carousel-btn.carousel-next(@click="next")
                <svg class="progress" width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.4" cx="26.125" cy="26.875" r="25.125" transform="rotate(-90 26.125 26.875)" stroke="#BACFE6" stroke-width="2"/>
                </svg>
                <svg class="progress-active" width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle class="progress-active__circle" opacity="0.4" cx="26.125" cy="26.875" r="25.125" transform="rotate(-90 26.125 26.875)" stroke="#BACFE6" stroke-width="2"/>
                </svg>
                <svg class="progress-arrow" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.346801 5.58333L0.346801 7.41667L11.5901 7.41667L8.35961 10.7167L9.6159 12L15 6.5L9.6159 1L8.35961 2.28333L11.5901 5.58333L0.346801 5.58333Z" fill="#3D4950" stroke="#DBE8F2" stroke-width="0.5"/>
                </svg>
        .carousel-pagination
</template>

<script>

    export default {
        name: 'Carousel',
        data: function(){
            return {
                index: 0,
            }
        },
        props: {
            slides: {
                type: Array
            }
        },
        methods: {
            prev(){
                let wrapper = document.getElementsByClassName('carousel-wrapper')[0],
                    currSlide = wrapper.children[this.index],
                    lengthSlides = wrapper.children.length;

                if(this.index == 0) {
                    return false;
                }

                this.index -= 1;

                this.setActiveDot(this.index);
                currSlide.classList.remove('current');
                currSlide.classList.add('next');

                let prevSlide = currSlide.previousSibling;
                if(prevSlide) {
                    prevSlide.classList.remove('change-slide');

                    let lowerSlide = currSlide.nextSibling;
                    if(lowerSlide) {
                        lowerSlide.classList.remove('next');
                        lowerSlide.classList.add('latest');

                        let latest = lowerSlide.nextSibling;
                        if(latest) {
                            latest.classList.remove('latest');
                        }
                    }
                }

            },
            next(){
                let wrapper = document.getElementsByClassName('carousel-wrapper')[0],
                    currSlide = wrapper.children[this.index],
                    lengthSlides = wrapper.children.length - 1;

                if(this.index < lengthSlides) {
                    this.index += 1;

                    this.setActiveDot(this.index);
                    currSlide.classList.add('change-slide');
                    let nextSlide = currSlide.nextSibling;

                    if(nextSlide) {
                        nextSlide.classList.remove('next');
                        nextSlide.classList.add('current');

                        let lowerSlide = nextSlide.nextSibling;

                        if(lowerSlide) {
                            lowerSlide.classList.remove('latest')
                            lowerSlide.classList.add('next');

                            let latest = lowerSlide.nextSibling;
                            if(latest) {
                                latest.classList.add('latest');
                            }
                        }
                    }
                }
            },
            createDots(){
                let slide = document.getElementsByClassName('carousel-slide'),
                    pagination = document.getElementsByClassName('carousel-pagination')[0];

                for(let i = 0; i < slide.length; i++){
                    let dot = document.createElement('span');
                    dot.className = 'carousel-dot';
                    pagination.appendChild(dot);
                }
            },
            addEventClick(){
                let dot = document.getElementsByClassName('carousel-dot');

                for(let i = 0; i < dot.length; i++){
                    dot[i].addEventListener('click', ()=>{
                        this.goToSlide(i);
                    })
                }
            },
            goToSlide(index){
                let dot = document.getElementsByClassName('carousel-dot'),
                    wrapper = document.getElementsByClassName('carousel-wrapper')[0];

                this.setActiveDot(index);
                
                if (index > this.index){
                    while(index > this.index) {
                        this.next();
                    }
                } else {
                    while(index < this.index){
                        this.prev();
                    }
                }
            },
            setActiveDot(index){
                let dot = document.getElementsByClassName('carousel-dot');
                for(let i = 0; i < dot.length; i++) {
                    if(dot[i].classList.contains('active')) {
                        dot[i].classList.remove('active');
                    }
                }
                dot[index].classList.add('active');
            },
            init(){
                let slides = document.getElementsByClassName('carousel-slide');

                slides[0].classList.add('current');
                if(slides[1]) {
                    slides[1].classList.add('next');
                }
                if(slides[2]) {
                    slides[2].classList.add('latest');
                }

                this.createDots();
                this.addEventClick();
                this.setActiveDot(0);
            }
        },
        mounted(){
            this.index = 0;
            this.$nextTick(() => {
                this.init();
            })
        },
        beforeDestroy() {
            document.querySelector('.carousel-wrapper').innerHTML = '';
        },
        watch: {
            slides(){
                if(this.slides.length) {
                    this.init();
                    this.goToSlide(0);
                }
            }
        }
}
</script>

<style lang="scss" scoped>
    .carousel {
        position: relative;

        &-buttons {
            position: absolute;
            z-index: 3;
            bottom: 21px;
            left: 38px;
            display: flex;

            & > * {
                margin-right: 10px;
            }
        }

        &-btn {
            position: relative;
            width: 53px;
            height: 53px;

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

            &--next {
                margin-bottom: 6px;
            }

            &--prev {
                margin-right: 9px;
                margin-bottom: 6px;
            }

            .progress circle {
                stroke: #fff;
                opacity: 0.23;
            }

            .progress-active .progress-active__circle {
                stroke: #fff;
                opacity: 0.6;
            }

            .progress-arrow path {
                stroke: #fff;
                fill: #fff;
                opacity: 0.6;
            }
        }

        &-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
        }

        &-slide {
            position: absolute;
            z-index: 1;
            top: 0; 
            left: 0;
            border-radius: 6px 0px 0px 6px;
            opacity: 0;
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: cover;
            transition: .6s all ease;
            transform: translate3d(-20%, 0, 1px) scale(0.8);

            &.current {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 1;
                z-index: 3;
                transition: .3s all ease;
            }

            &.next {
                transform: translate3d(-8%, 0, 1px) scale(0.9);
                opacity: 0.1;
                z-index: 2;
            }

            &.latest {
                transform: translate3d(8%, 0, 1px) scale(0.9);
                opacity: 0.1;
                z-index: 1;
            }

            &.change-slide {
                transform: translate3d(100%, 0, 0);
                opacity: 0;
            }
        }

        /deep/ &-pagination {
            display: none;
            align-items: center;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 25px;

            & > * {
                &:not(:last-child) {
                    margin-right: 13px;
                }
            }
        }

        /deep/ &-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #90B8EA;
            opacity: 0.4;
            cursor: pointer;

            &.active {
                position: relative;
                background: #618DC5;
                opacity: 1;

                &:after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    width: 14px;
                    height: 14px;
                    border-radius: 50%;
                    background: rgba(144, 184, 234, 0.25);
                }
            }
        }
    }

    @media (max-width: 960px) {
        .carousel {
            

            &-pagination {
                display: flex;
                bottom: -30px;
            }

            &-slide {
                border-radius: 6px;
            }
        }
    }

    @media (max-width: 640px) {
        .carousel {
            

            &-buttons {
                display: none;
            }

            &-slide {
                &.next {
                    transform: translate3d(-12%, 0, 1px) scale(0.85);
                }
            }

            &-pagination {
                bottom: -27px;
            }
        }
    }
</style>


