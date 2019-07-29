<template lang="pug">
	article.card.card-bg-large(data-aos="fade-up" :style="{backgroundImage: 'url(\"'+ (card.acf ? card.acf.preview.url : '') +'\")'}")
		.card__hash(:style="{color: card.acf ? card.acf.settings.feed_color_label : '#FFFFFF'}" v-html="card.acf ? card.acf.content.label : ''")
		.card__content
			h3.card__title(v-html="card.title ? getTitle : ''")
			p.card__desc(v-html="card.acf ? ellipsis(getContent, contentLength) : ''")
			//- a(:href="preview.link").card__link
			router-link.card__link(:to="$ml.get('lang_url') + '/feed/' + card.slug + '/'")
				span {{ $ml.get('btns.more_details') }}
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'Card',
	data: function() {
		return {
			title: '',
			titleLength: 25,
			content: '',
			contentLength: 104,
		}
	},
	mounted(){
		this.getQuantitySymbols();
		window.addEventListener('resize', this.getQuantitySymbols);
	},
	methods: {
		getQuantitySymbols() {
			if(document.documentElement.clientWidth > 960) {
				this.contentLength = 104;
				this.titleLength = 25;
			} else if(document.documentElement.clientWidth > 640 && document.documentElement.clientWidth < 960) {
				this.contentLength = 94;
				this.titleLength = 25;
			} else if(document.documentElement.clientWidth > 375 && document.documentElement.clientWidth < 640) {
				this.contentLength = 84;
				this.titleLength = 25;
			} else {
				this.contentLength = 84;
				this.titleLength = 20;
			}
		},
		ellipsis(value, count) {
			if(value.length > count) {
				value = value.substr(0, count);
				return value + '...'
			} else {
				return value;
			}
		},
	},
	computed: {
		...mapGetters([
			'getFeedCategoryById'
		]),
		getContent() {
			return this.card.acf.content.excerpt;
		},
		getTitle() {
			return this.card.title.rendered;
		}
	},
	props: {
		card: Object
	}
}
</script>

<style lang="scss" scoped>
	.card {
		background-repeat: no-repeat;
		background-position: center top;
		background-size: cover;
		height: 388px;
		width: 100%;
		box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.08);
		border-radius: 6px;
		display: block;
		overflow: hidden;
		position: relative;
		// background: linear-gradient(142.31deg, #FFBC77 6.92%, #FF8284 91.53%) !important;
		text-align: center;
		padding: 0 0 0 0;
		margin-bottom: 0;
		transition: all .5s ease;
		font-size: 0;

		&:before {
			content: "";
			display: inline-block;
			vertical-align: middle;
			height: 100%;
		}

		@media screen and (min-width: 1200px) {
			&:hover {
				box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.13);
			}
		}

		// &:before {
		//     content: "";
		//     display: block;
		//     position: absolute;
		//     width: 100%;
		//     height: 100%;
		//     top: 0;
		//     left: 0;
		//     background-color: rgba(0,0,0,.3);
		// }

		&__hash {
			font-family: 'SFProDisplay';
			font-weight: normal;
			font-size: 15px;
			line-height: 22px;
			// color: #59DDCD;
			display: inline-block;
			margin-bottom: 51px;
			position: relative;
			z-index: 1;
			position: absolute;
			top: 19px;
			left: 0;
			width: 100%;
			text-align: center;
			// color:#EF3044;
		}

		&__content {
			color: #FFFFFF;
			max-width: 761px;
			margin-left: auto;
			margin-right: auto;
			position: relative;
			z-index: 1;
			display: inline-block;
			vertical-align: middle;
			width: 100%;
			// max-width: 360px;
		}

		&__title {
			font-family: 'SFProDisplay';
			font-weight: 600;
			font-size: 40px;
			// line-height: 34px;
			line-height: 1;
			margin-bottom: 16px;
		}

		&__desc {
			font-family: 'Roboto';
			font-weight: 300;
			font-style: normal;
			font-weight: 300;
			font-size: 14px;
			line-height: 22px;
			margin-bottom: 25px;
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
			margin: 0 auto;
			// position: relative;
			// position: absolute;
			// left: 50%;
			// bottom: 88px;
			// transform: translateX(-50%);
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

	@media screen and (max-width: 1024px) {
		.card {
			&__content {
				max-width: 90%;
			}

			&__title {
				font-size: 36px;
				margin-bottom: 10px;
			}

			&__desc {
				margin-bottom: 15px;
			}
		}
	}

	@media (max-width: 640px) {
		.card {
			height: 400px;
			width: 100%;
			padding: 0 20px 0 20px;

			&__hash {
				margin-bottom: 58px;
			}

			&__content {
				// padding: 0 44px;
				margin-left: auto;
				margin-right: auto;
				max-width: 100%;
			}

			&__title {
				font-size: 26px;
				// line-height: 36px;
				line-height: 1.2;
			}

			&__link {
				// bottom: 80px;
			}
		}
	}

	@media (max-width: 375px) {
		.card {
			padding: 0 20px 0 20px;
		}
	}

	@media screen and (max-width: 350px) {
        .card {
            padding-left: 15px;
            padding-right: 15px;
        }
    }
</style>


