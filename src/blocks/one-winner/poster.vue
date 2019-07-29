<template lang="pug">
	.poster(:style="{backgroundImage: 'url(\"' + (page && page.acf ? page.acf.preview.sizes.large : '') + '\")'}" data-aos="fade")
		canvas#confetti
		.award-mobile(data-aos="fade" :style="{background: 'linear-gradient(147.83deg, '+ (award && award.acf ? award.acf.color : '#ffffff') +' 2.55%, '+ darken(award && award.acf ? award.acf.color : '#ffffff', 60) +' 207.56%), #C4C4C4'}")
			img(:src="award && award.acf ? award.acf.logo.sizes.large : ''")
			span(v-html="award ? award.title.rendered : ''")
		.wrapper
			.award(data-aos="fade")
				//- .award__icon(v-if="award && award.acf && award.acf.color" :style="{borderColor: darken(award.acf.color, 80), background: 'linear-gradient(147.83deg, '+ award.acf.color +' 2.55%, '+ darken(award.acf.color, 60) +' 207.56%), #C4C4C4'}")
				//- 	img(:src="award ? award.acf.logo.sizes.large : ''")
				//- .award__text(v-html="award ? award.title.rendered : ''")

				.award__icon(v-if="award && award.acf && award.acf.color" :style="{background: 'linear-gradient(147.83deg, '+ (award && award.acf ? award.acf.color : '#ffffff') +' 2.55%, '+ darken(award && award.acf ? award.acf.color : '#ffffff', 60) +' 207.56%), #C4C4C4'}")
					.award__border(:style="{background: darken(award && award.acf ? award.acf.color : '#ffffff', 80)}")
					img(:src="award ? award.acf.logo.sizes.large : ''")
				.award__text(v-html="award ? award.title.rendered : ''")

			.poster__content
				.poster__subtitle(data-aos="fade-up" v-html="page && page.acf ? page.acf.info.nomination : ''" :style="{color: award && award.acf && award.acf.color ? award.acf.color : '#ffffff'}")
				h1.poster__title(data-aos="fade-up" v-html="app && app.title ? app.title.rendered : ''")
				p.poster__desc(data-aos="fade-up" data-aos-delay="100" v-html="page && page.acf ? page.acf.info.excerpt : ''")
		social-block(
			light = true,
			v-bind:isAbsolute="true"
			:fb="'https://www.facebook.com/sharer/sharer.php?u=' + getCurrentUrl + '&t=' + (page.title ? page.title.rendered : '')"
			:tw="'https://twitter.com/share?url=' + getCurrentUrl + '&text=' + (page.title ? page.title.rendered : '')"
			:vk="'http://vk.com/share.php?url=' + getCurrentUrl + '&title=' + (page.title ? page.title.rendered : '') + '&image=' + (page.acf ? page.acf.preview.sizes.large : '')"
			:url="getCurrentUrl"
		)
</template>

<script>
	import {WindowAnimationTiming, animation} from '../../components/confetti.js'; 
	import CardApp from '../includes/smallBlocks/cardApp.vue';
	import SocialBlock from '../includes/smallBlocks/socialBlock.vue';

	export default {
		name: 'Poster',
		data: function(){
			return {}
		},
		props: {
			page: Object,
			award: Object,
			app: Object
		},
		components: {
			'card-app': CardApp,
			'social-block': SocialBlock
		},
		mounted(){
			this.$nextTick(() => {
				WindowAnimationTiming(window);
            	animation();
			});
		},
		computed: {
			getCurrentUrl() {
				return encodeURI(window.location.href);
			}
		},
		methods: {
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
		}
	}
</script>

<style lang="scss" scoped>
	#confetti {
		position: absolute;
		z-index: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.award-mobile {
            transform: rotate(-90deg) !important;
            position: absolute;
            z-index: 3;
            top: 200px;
            right: -74px;
            display: none;
            align-items: center;
            width: 170px;
            height: 42px;
            background: linear-gradient(109.64deg, #83A5FC 2.7%, #3182E7 109.91%), #C4C4C4;
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
        }

	.award {
		position: relative;
		display: flex;
		align-items: center;
		margin-bottom: 61px;
		padding-left: 10px;

		&__text {
			font-family: "Roboto";
			font-weight: normal;
			font-style: normal;
			font-size: 14px;
			line-height: 20px;
			color: #FFFFFF;
			margin-left: 26px;
			max-width: 91px;
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
			}
		}
	}
	.poster {
		position: relative;
		z-index: 1;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		margin: 10px 10px 0 10px;
		border-radius: 8px 8px 0 0 ;
		padding: 105px 0 33px 0;
		height: 630px;
		// overflow: hidden;

		&:before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: -1;
            pointer-events: none;
            top: 0;
			left: 0;
			border-radius: 8px 8px 0 0 ;
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 2.63%, rgba(0, 0, 0, 0) 69.97%), linear-gradient(0deg, rgba(0, 0, 0, 0.13), rgba(0, 0, 0, 0.13));
        }

		&__content {
			max-width: 490px;
			color: #FFFFFF;
			padding-bottom: 40px;
			position: relative;

			// &:after {
			// 	content: '';
			// 	position: absolute;
			// 	left: 0;
			// 	bottom: 0;
			// 	width: 82.3%;
			// 	height: 1px;
			// 	background: rgba(255, 255, 255, 0.06);
			// }
		}

		&__title {
			position: relative;
			font-family: 'SFProDisplay';
			font-weight: 700;
			font-size: 45px;
			line-height: 59px;
			letter-spacing: 1px;
			text-transform: uppercase;
			color: #FFFFFF;
			margin-bottom: 23px;
		}

		&__subtitle {
			// position: absolute;
			// top: -39px;
			// left: 2px;
			font-family: "SFProDisplay";
			font-weight: normal;
			font-size: 19px;
			line-height: normal;
			color: #357FDB;
		}

		&__desc {
			font-family: 'Roboto';
			font-weight: 300;
			font-style: normal;
			font-weight: 300;
			font-size: 15px;
			line-height: 25px;
			letter-spacing: -0.1px;
			max-width: 424px;
		}

		&__application {
			display: flex;
			align-items: center;
			max-width: 331px;
			margin-top: 33px;
			margin-bottom: 78px;
		}

		&__avatar {
			max-width: 58px;
			max-height: 58px;
			overflow: hidden;
			margin-right: 15px;
		}

		&__id {
			margin-bottom: 5px;
		}

		&__type {
			display: inline-block;
			font-family: 'Roboto';
			font-weight: normal;
			font-style: normal;
			font-weight: normal;
			font-size: 12px;
			line-height: 23px;
			color: #FFFFFF;
			opacity: 0.43;
		}

		&__name {
			font-family: 'SFProDisplay';
			font-weight: normal;
			font-size: 15px;
			line-height: 19px;
			color: #FFFFFF;
		}

		&__link {
			margin-left: auto;
			position: relative;

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
			}
		}
	}

	@media (max-width: 960px) {
		.poster {
			padding-top: 132px;

			&:before {
                background: rgba(0, 0, 0, .3);
            }

			&__content {
				margin-left: auto;
				margin-right: auto;

				&:after {
					width: 100%;
				}
			}

			&__title {
				font-family: 'SFProDisplay';
				font-weight: 700;
				font-size: 36px;
				line-height: 43px;
				text-align: center;
				margin-bottom: 30px;
			}

			&__desc {
				font-size: 15px;
				line-height: 25px;
				text-align: center;
			}
			
			&__application {
				max-width: 407px;
				margin-left: auto;
				margin-right: auto;
			}

			.wrapper {
				text-align: center;
			}
		}

		.award {
			display: none;
		}

		.award-mobile {
			display: block;
		}
	}

	@media (max-width: 960px) {
		.poster {
			padding-top: 150px;
			padding-bottom: 24px;
			height: 592px;

			&__content {
				padding-bottom: 26px;
			}
			
			&__title {
				margin: 0 auto 18px auto;
			}

			&__subtitle {
				top: -30px;
				left: 50%;
				transform: translateX(-50%);
				font-size: 15px;
				line-height: 22px;
			}

			&__desc {
				max-width: 343px;
			}

			&__application {
				max-width: 343px;
				margin-bottom: 76px;
			}

			&__desc {
				max-width: none;
			}

			.wrapper {
				padding: 0 25px;
			}

			.award {
				display: none;

				&-mobile {
					display: flex;
				}
			}

		}

		/deep/ .social-block {
			&__share {
				display: block;
				text-align: center;
			}
			&_absolute {
				right: auto;
				left: 50%;
				bottom: 25px;
				transform: translateX(-50%) !important;
			}
		}
	}

	@media (max-width: 640px) {
		.poster {
			&__title {
				max-width: 304px;
			}
		}

		.award {
			&-mobile {
				top: 134px;
			}
		}
	}
</style>