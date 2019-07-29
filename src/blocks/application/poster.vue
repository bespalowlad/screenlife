<template lang="pug">
	.poster(data-aos="fade")
		//- .poster
		router-link.poster__head-mobile(v-if="award && award.acf && award.acf.color" :to="$ml.get('lang_url') + '/awards/' + (getArticleByApp(app.id) ? getArticleByApp(app.id).slug : '') + '/'" :style="{background: 'linear-gradient(147.83deg, '+ award.acf.color +' 2.55%, '+ darken(award.acf.color, 60) +' 207.56%), #C4C4C4'}")
			img(:src="award ? award.acf.logo.sizes.large : ''")
			span(v-html="award ? award.title.rendered : ''")
		.wrapper
			.poster__info(data-aos="fade-up")
				//- .poster__info
				//- .poster__head(v-if="app.acf && app.acf.info.awards")
				//-     .award__icon(v-if="award && award.acf && award.acf.color" :style="{background: 'linear-gradient(147.83deg, '+ award.acf.color +' 2.55%, '+ darken(award.acf.color, 60) +' 207.56%), #C4C4C4'}")
				//-         .award__border(:style="{background: darken(award.acf.color, 80)}")
				//- 	    img(:src="award ? award.acf.logo.sizes.large : ''")
				//-     span.poster__nomination(v-html="award ? award.title.rendered : ''")

				router-link.poster__head(v-if="award && award.acf && award.acf.color" :to="$ml.get('lang_url') + '/awards/' + (getArticleByApp(app.id) ? getArticleByApp(app.id).slug : '') + '/'")
					.poster__icon(v-if="award && award.acf && award.acf.color" :style="{background: 'linear-gradient(147.83deg, '+ award.acf.color +' 2.55%, '+ darken(award.acf.color, 60) +' 207.56%), #C4C4C4'}")
						.poster__border(:style="{background: darken(award.acf.color, 80)}")
						img(:src="award ? award.acf.logo.sizes.large : ''")
					span.poster__nomination(v-html="award ? award.title.rendered : ''")
				.poster__hash(v-html="getCategoryById(app.apps_category ? app.apps_category[0] : '').name")
				h1.poster__title(v-html="app.title ? app.title.rendered : ''")
				.poster__subtitle(v-html="app.acf ? app.acf.info.excerpt : ''")
				//- router-link(to="/").poster__link
				a.poster__link(target="_blank" v-if="app.acf && app.acf.info.url" :href="app.acf.info.url")
					span Download
				.poster__bottom(v-if="app.acf && app.acf.info.price")
					span.poster__price Price:
					.poster__price-tag(v-html="app.acf.info.price")
			carousel(v-if="getWindowWidth > 960 && app.acf && app.acf.info.photos.length" :slides="app.acf.info.photos")
			.swiper-outer
				swiper(v-if="getWindowWidth <= 960 && app.acf && app.acf.info.photos.length" :options="swiperOption")
					swiper-slide(v-for="(slide, index) in app.acf.info.photos" :key="index")
						.slide(:style="{backgroundImage: 'url(\"' + slide.sizes.large + '\")'}")
				.swiper-pagination(v-if="getWindowWidth <= 960 && app.acf && app.acf.info.photos.length")
</template>

<script>
	import Carousel from '../../components/carousel.vue';

	import { swiper, swiperSlide } from 'vue-awesome-swiper';

import { mapGetters } from 'vuex';

	export default {
		name: 'Poster',
		props: {
			app: Object,
			award: Object
		},
		data: function() {
			return {
				index: 0,
				swiperOption: {
					effect: 'fade',
					slidesPerView: 1,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: true
					},
					paginationClickable :true,
					loop: true,
					simulateTouch : false,
				},
				getWindowWidth: document.documentElement.clientWidth
			}
		},
		computed: {
			...mapGetters([
				'getCategoryById',
				'getAppBySlug',
				'getArticleByApp'
			])
		},
		mounted() {
			window.addEventListener('resize', () => {
				this.getWindowWidth = document.documentElement.clientWidth;
			});
		},
		methods: {
			getUrl(url) {
				return url
			},
			darken(col, amt) {
				var usePound = false;
				if (col[0] == "#") {
					col = col.slice(1);
					usePound = true;
				}
				var num = parseInt(col, 16);
				var r = (num >> 16) + amt;
				if (r > 255) {
					r = 255;
				} else if (r < 0) {
					r = 0;
				}
				var b = ((num >> 8) & 0x00FF) + amt;
				if (b > 255) {
					b = 255;
				} else if (b < 0) {
					b = 0;
				}
				var g = (num & 0x0000FF) + amt;
				if (g > 255) {
					g = 255;
				} else if (g < 0) {
					g = 0;
				}
				return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
			}
		},
		components:{
			'carousel': Carousel,
			swiper,
			swiperSlide
		}
	}
</script>

<style lang="scss" scoped>
	.carousel {
		width: 56.2%;
		height: 542px;
		position: absolute;
		top: 94px;
		right: 0;
	}

	.poster {
		background: linear-gradient(180deg, #EAF1FC -4.24%, #F8FAFF 86.01%), url('../../assets/img/application-poster-bg.png');
		position: relative;
		margin: 10px 10px 0 10px;
		border-radius: 8px 8px 0 0 ;
		overflow: hidden;
		min-height: 700px;

		&__info {
			position: relative;
			padding: 105px 0 77px 0;
			display: flex;
			flex-direction: column;
		}

		&__head-mobile {
			transform: rotate(-90deg);
			position: absolute;
			z-index: 3;
			top: 200px;
			right: -74px;
			display: none;
			align-items: center;
			width: 170px;
			height: 42px;
			// background: linear-gradient(145.3deg, #E8AA6B 2.7%, #F55A43 109.91%), #C4C4C4;
			border-radius: 5px 5px 0 0;
			padding: 0 12px;

			span {
				margin-left: 10px;
				font-size: 13px;
				line-height: normal;
				font-family: 'Roboto';
				font-weight: normal;
				font-style: normal;
				font-weight: normal;
				color: #fff;
			}

			img {
				max-width: 18px;
				max-height: 18px;
			}
		}

		&__head {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding-left: 11px;
			position: relative;
			order: 1;
		}

		// &__icon {
		// 	width: 42px;
		// 	height: 42px;
		// 	border-radius: 50%;
		// 	background: linear-gradient(145.3deg, #E8AA6B 2.7%, #F55A43 109.91%), #C4C4C4;
		// 	opacity: 1;
		// 	display: flex;
		// 	align-items: center;
		// 	justify-content: center;
		// 	position: relative;
		// 	z-index: 2;

		// 	& + img {
		// 		position: absolute;
		// 		left: 50%;
		// 		top: 50%;
		// 		transform: translate(-50%,-50%);
		// 	}
		// }

		&__border {
			width: 64px;
			height: 64px;
			border-radius: 50%;
            position: absolute;
            z-index: 1;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			opacity: 0.23;
            transition: .3s all ease;
		}

		&__icon {
			position: relative;
			z-index: 2;
			width: 42px;
			height: 42px;
			border-radius: 50%;
			z-index: 2;
            border-radius: 50%;
            // border: 12px solid #fff;;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;

			img {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
				max-width: 25px;
				max-height: 25px;
			}
		}

		&__border {
			width: 64px;
			height: 64px;
			border-radius: 50%;
			position: absolute;
			z-index: 1;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			opacity: 0.23;
			transition: .3s all ease;
		}

		&__nomination {
			margin-left: 26px;
			font-family: 'Roboto';
			font-weight: normal;
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 20px;
			color: rgba(61, 73, 80, 0.7);
		}

		&__hash {
			display: inline-block;
			font-family: 'SFProDisplay';
			font-weight: normal;
			font-size: 15px;
			line-height: 22px;
			color: #498CED;
			margin-top: 70px;
			order: 2;
		}

		&__title {
			font-family: 'SFProDisplay';
			font-weight: 700;
			font-size: 45px;
			line-height: 59px;
			letter-spacing: 1px;
			text-transform: uppercase;
			color: #3D4950;
			margin-bottom: 15px;
			max-width: 366px;
			order: 3;
		}

		&__subtitle {
			font-family: 'Roboto';
			font-weight: 300;
			font-style: normal;
			font-weight: 300;
			font-size: 15px;
			line-height: 25px;
			color: #3D4950;
			opacity: 0.7;
			max-width: 402px;
			margin-bottom: 23px;
			order: 4;
		}

		&__link {
			width: 146px;
			height: 43px;
			background: linear-gradient(0deg, #357FDB, #357FDB), linear-gradient(189.87deg, #357FDB -14.01%, #2361AA 109.14%);
			border-radius: 100px;
			cursor: pointer;
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
			margin-bottom: 94px;
			position: relative;
			transition: .3s all ease;
			order: 5;

			span {
				position: relative;
				z-index: 2;
			}

			&:before {
				content: '';
				width: 100%;
				height: 100%;
				border-radius: 100px;
				background: linear-gradient(0deg, #145EB9, #145EB9), linear-gradient(189.87deg, #357FDB -14.01%, #2361AA 109.14%);
				position: absolute;
				z-index: 1;
				top: 0;
				left: 0;
				transition: .3s all ease;
				opacity: 0;
			}

			@media screen and (min-width: 1200px) {
				&:hover:before {
					opacity: 1;
				}
			}
		}

		&__bottom {
			max-width: 345px;
			border-top: 1px solid rgba(206, 219, 231, 0.38);
			padding-top: 27px;
			order: 6;
		}

		&__price {
			display: inline-block;
			font-family: 'SFProDisplay';
			font-weight: normal;
			font-size: 12px;
			line-height: 19px;
			letter-spacing: 1px;
			text-transform: uppercase;
			color: #3D4950;

			&-tag {
				width: 70px;
				height: 26px;
				background: rgba(53, 127, 219, 0.08);
				border-radius: 100px;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				font-family: 'GothamPro';
				font-weight: normal;
				font-size: 12px;
				line-height: 20px;
				color: #357FDB;
				margin-left: 9px;
			}
		}
	}

	@media (max-width: 1200px) {
		.carousel {
			width: 50%;
		}
	}

	@media (max-width: 960px) {
		.carousel {
			position: relative;
			top: auto;
			left: auto;
			width: 80%;
			margin-right: auto;
			margin-left: auto;
			height: 375px;
		}

		.poster {
			padding-bottom: 70px;
			overflow: visible;

			&__head {
				display: none;
			}

			&__head-mobile {
				display: flex;
			}

			&__info {
				text-align: center;
				padding-bottom: 58px;
			}

			&__hash  {
				margin-top: 0;
				margin-bottom: 11px;
				order: 1;
			}

			&__title {
				margin: 0 auto 22px auto;
				order: 2;
			}

			&__subtitle {
				margin-left: auto;
				margin-right: auto;
				max-width: 450px;
				text-align: center;
				margin-bottom: 30px;
				order: 4;
			}

			&__link {
				margin: 0 auto;
				order: 5;
			}

			&__bottom {
				margin: 0 auto 18px auto;
				padding-top: 0;
				border-top: none;
				order: 3;
			}
		}

		/deep/ .swiper-slide {
			overflow: visible;
			height: 450px;
		}

		.swiper-outer {
			position: relative;
		}

		.slide {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			border-radius: 6px;
			transition: opacity .2s ease, transform .2s ease;
			background-size: cover;
			background-position: center;
		}

		/deep/ .swiper-slide-prev {
			// transform: translate3d(-20px, 0, 1px) !important;
			left: 0 !important;
			opacity: 1 !important;
			// left: 0 !important;

			.slide {
				transform: translate3d(-55px, 0, 1px) scale(.9);
				opacity: .3;
			}
		}

		/deep/ .swiper-slide-next {
			// transform: translate3d(20px, 0, 1px) !important;
			left: 0 !important;
			// left: 0 !important;
			// transform: scale(.8) !important;
			opacity: 1 !important;

			.slide {
				transform: translate3d(55px, 0, 1px) scale(.9);
				opacity: .3;
			}
		}

		/deep/ .swiper-slide-active {
			z-index: 1;
			left: 0 !important;

			.slide {
				transform: translate3d(0, 0, 1px) scale(1);
				opacity: 1;
			}
		}

		/deep/ .swiper-container {
			overflow: visible;
		}

		.swiper-pagination {
			width: 100%;
			bottom: -33px;

			/deep/ .swiper-pagination-bullet {
				margin: 0 6px;
				width: 6px;
				height: 6px;
				background-color: #90B8EA;
				opacity: 1;
				transition: opacity .3s ease;
				position: relative;
				outline: none;
				opacity: .7;

				&:before {
					content: "";
					width: 14px;
					height: 14px;
					border-radius: 50%;
					display: block;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					background-color: rgba(#90B8EA, .25);
					opacity: 0;
					transition: opacity .3s ease;
				}
			}

			/deep/ .swiper-pagination-bullet-active {
				// background-color: #618DC5;
				opacity: 1;

				&:before {
					opacity: 1;
				}
			}
		}
		
	}

	@media (max-width: 640px) {
		.carousel {
			width: 96%;
			height: 230px;
		}

		.poster {
			min-height: auto;

			&__title {
				font-size: 36px;
				line-height: 43px;
				max-width: 304px;
				margin-bottom: 11px;
			}

			&__price {
				display: none;

				&-tag {
					margin-left: 0;
				}
			}

			&__bottom {
				margin-bottom: 15px;
			}

			&__subtitle {
				margin-bottom: 21px;
				max-width: 343px;
			}

			&__head-mobile {
				top: 134px;
			}
		}

		/deep/ .swiper-slide {
			height: 230px;
		}

		/deep/ .swiper-slide-prev {
			.slide {
				transform: translate3d(-38px, 0, 1px) scale(.85);
				opacity: .3;
			}
		}

		/deep/ .swiper-slide-next {
			.slide {
				transform: translate3d(38px, 0, 1px) scale(.85);
				opacity: .3;
			}
		}
	}
</style>