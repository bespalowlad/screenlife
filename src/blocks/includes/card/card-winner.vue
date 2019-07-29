<template lang="pug">
	article.card.winner(:style="{backgroundImage: 'url(\"' + (app && app.acf ? app.acf.info.preview.sizes.large : '') + '\")'}" data-aos="fade-up" )
		span.card__hash(v-html="app && app.apps_category ? getCategoryById(app.apps_category[0]) ? getCategoryById(app.apps_category[0]).name : '' : ''")
		.card__content
			h3.card__title(v-html="app && app.title ? app.title.rendered: ''")
			p.card__desc(v-html="app && app.acf ? app.acf.info.excerpt : ''")
			//- .card__icon(:style="{borderColor: app && app.id ? darken(getAwardByApp(app.id) ? getAwardByApp(app.id).acf.color : '', 80) : '', background: app ? 'linear-gradient(147.83deg, '+ (getAwardByApp(app.id) ? getAwardByApp(app.id).acf.color : '') +' 2.55%, '+ darken(getAwardByApp(app.id) ? getAwardByApp(app.id).acf.color : '', 60) +' 207.56%), #C4C4C4' : ''}")
			//- 	img(:src="app && app.id ? (getAwardByApp(app.id) ? getAwardByApp(app.id).acf.logo.url : '') : ''")
			.card__icon(:style="{background: app ? 'linear-gradient(147.83deg, '+ (getAwardByApp(app.id) ? getAwardByApp(app.id).acf.color : '') +' 2.55%, '+ darken(getAwardByApp(app.id) ? getAwardByApp(app.id).acf.color : '', 60) +' 207.56%), #C4C4C4' : ''}")
				.card__border(:style="{background: app && app.id ? darken(getAwardByApp(app.id) ? getAwardByApp(app.id).acf.color : '', 80) : ''}")
				img(:src="app && app.id ? (getAwardByApp(app.id) ? getAwardByApp(app.id).acf.logo.url : '') : ''")
			p.card__nomination(v-html="app && app.id ? (getAwardByApp(app.id) ? getAwardByApp(app.id).title.rendered : '') : ''")
			router-link.card__link(:to="$ml.get('lang_url') + '/awards/' + (article && article.slug ? article.slug+'/' : '')") {{ $ml.get('btns.more_details') }}
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'Winner',
	data: function(){
		return {}
	},
	props: {
		app: Object,
		article: Object
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
	},
	computed: {
		...mapGetters([
			'getCategoryById',
			'getAwardByApp'
		])
	}
}
</script>

<style lang="scss" scoped>
	.card {
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		height: 445px;
		width: 353px;
		box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.08);
		border-radius: 6px;
		overflow: hidden;
		position: relative;
		z-index: 1;
		padding: 23px 0 37px 0;
		text-align: center;
		transition: all .5s ease;
		color: #fff;
		margin: 0 !important;
		display: inline-block;

		@media screen and (min-width: 1200px) {
			&:hover {
				box-shadow: 0px 4px 30px rgba(52, 59, 76, 0.13);
			}
		}

		 &:before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: -1;
            pointer-events: none;
            top: 0;
            left: 0;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.36) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35));
			opacity: .5;
        }

		&__hash {
			font-family: 'SFProDisplay';
			font-weight: normal;
			font-size: 15px;
			line-height: 22px;
			color: #59DDCD;
			display: inline-block;
			margin-bottom: 21px;
			color:#EF3044;
		}

		&__content {
			max-width: 90%;
			display: block;
			margin: 0 auto;
		}

		&__title {
			font-family: 'SFProDisplay';
			font-weight: 600;
			margin-bottom: 18px;
			font-size: 30px;
			line-height: 36px;
		}

		&__desc {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 300;
			font-size: 14px;
			line-height: 22px;
			margin-bottom: 25px;
			opacity: 0.9;
			margin-bottom: 45px;
		}

		&__border {
			width: 64px;
			height: 64px;
			border-radius: 50%;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			opacity: 0.23;
			transition: .3s all ease;
		}

		&__icon {
			width: 42px;
			height: 42px;
			border-radius: 50%;
			background: linear-gradient(145.3deg, #E8AA6B 2.7%, #F55A43 109.91%), #C4C4C4;
			opacity: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			z-index: 2;
			margin: 0 auto;

			& + img {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%,-50%);
				max-width: 25px;
				max-height: 25px;
			}
		}

		&__nomination {
			margin: 27px auto 29px auto;
			display: block;
			font-family: 'Roboto';
			font-weight: normal;
			font-style: normal;
			font-weight: 300;
			font-size: 12px;
			line-height: 17px;
			text-align: center;
			max-width: 109px;
		}

		&__link {
			width: 139px;
			height: 40px;
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
			cursor: pointer;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			bottom: 37px;
			background: transparent;
			border: 1px solid rgba(255, 255, 255, 0.51);
			color: #fff;
			transition: border-color .5s ease;

			@media screen and (min-width: 1200px) {
				&:hover {
					border-color: #FFFBFB;
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
			// height: auto;
			width: 47.5%;
		}
	}

	@media (max-width: 640px) {
		.card {
			height: 445px;
			padding-top: 18px;
			width: 100%;

			&__hash {
				margin-bottom: 30px;
			}

			&__title {
				margin-bottom: 16px;
			}

			&__desc {
				margin-bottom: 39px;
			}

			&__nomination {
				margin-top: 25px;
			}
		}
	}
</style>


