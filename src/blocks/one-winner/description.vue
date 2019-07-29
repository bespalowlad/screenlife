<template lang="pug">
	.description
		aside.description__sidebar(data-aos="fade")
			//- card-winner
			//- card-app
			//- card-articles
			.sidebar__title {{ $ml.get('awards.jury') }}
				div(v-html="award ? award.title.rendered : ''")
			.sidebar__add(v-for="(j, i) in page && page.acf ? page.acf.jury : []")
				.sidebar__subtitle(v-html="j.name")
				.sidebar__dev(v-html="j.position")
		.description__container
			template(v-for="(card, i) in page && page.acf ? page.acf.editor : []")

				block-article(
					v-if="card.acf_fc_layout === 'Block 1'"
					:key="i"
					:title="card.field1",
					:text="card.field2"
				)

				block-text(
					v-if="card.acf_fc_layout === 'Block 7' || card.acf_fc_layout === 'Block 5'"
					:key="i"
					:text="card.field1 || card.field2"
				)

				block-video(
					v-if="card.acf_fc_layout === 'Block 8'"
					:key="i"
					:link="card.field1"
				)

				block-blockquote(
					v-if="card.acf_fc_layout === 'Block 2'"
					:key="i"
					:text="card.field1"
				)

				block-img(
					v-if="card.acf_fc_layout === 'Block 3'"
					:key="i"
					:url="card.image.url"
				)

				block-table(
					v-if="card.acf_fc_layout === 'Block 6'"
					:key="i"
					:table="card.field1"
				)

				block-list(
					v-if="card.acf_fc_layout === 'Block 4'"
					:key="i"
					:list="card.field1"
				)

				block-opinion(
					v-if="card.acf_fc_layout === 'Block 9'"
					:key="i"
					:card="card"
				)
			block-social(
				:fb="'https://www.facebook.com/sharer/sharer.php?u=' + getCurrentUrl + '&t=' + (page.title ? page.title.rendered : '')"
				:tw="'https://twitter.com/share?url=' + getCurrentUrl + '&text=' + (page.title ? page.title.rendered : '')"
				:vk="'http://vk.com/share.php?url=' + getCurrentUrl + '&title=' + (page.title ? page.title.rendered : '') + '&image=' + (page.acf ? page.acf.preview.sizes.large : '')"
				:url="getCurrentUrl"
			)
		block-app#block-app

</template>

<script>
import blockArticle from '../includes/contentBlocks/article.vue';
import blockText from '../includes/contentBlocks/blockText.vue';
import blockVideo from '../includes/contentBlocks/blockVideo.vue';
import blockBlockquote from '../includes/contentBlocks/blockBlockquote.vue';
import blockImg from '../includes/contentBlocks/blockImg.vue';
import blockTable from '../includes/contentBlocks/blockTable.vue';
import blockList from '../includes/contentBlocks/blockList.vue';
import blockOpinion from '../includes/contentBlocks/expertOpinion.vue';

import blockSocial from '../includes/smallBlocks/socialBlock.vue';

import blockApp from '../includes/smallBlocks/cardApp.vue';

// import CardWinner from '../includes/card/card-winner.vue';
// import CardApp from '../includes/card/card-app.vue';
// import CardArticles from '../includes/card/card-similar-articles.vue';

export default {
	name: 'one-winner-description',
	data: function(){
		return {

		}
	},
	props: {
		page: Object,
		award: Object
	},
	components: {
		'block-article': blockArticle,
		'block-video': blockVideo,
		'block-blockquote': blockBlockquote,
		'block-img': blockImg,
		'block-table': blockTable,
		'block-list': blockList,
		'block-opinion': blockOpinion,
		'block-text': blockText,
		'block-social': blockSocial,
		'block-app': blockApp,

		// 'card-winner': CardWinner,
		// 'card-app': CardApp,
		// 'card-articles': CardArticles,
		'block-app': blockApp
	},
	computed: {
		getCurrentUrl() {
			return encodeURI(window.location.href);
		}
	},
}
</script>

<style lang="scss" scoped>

	.description {
		position: relative;
		padding: 74px 0 54px 0;
		padding-bottom: 93px;

		&__container {
			display: block;
			width: 100%;
			max-width: 716px;
			margin: 0 auto;

			.block {
				width: 100%;
				max-width: none;
				
				&.video {
					width: 98%;
				}
				&__image {
					width: 98%;
				}
				&__blockquote {
					blockquote {
						padding-right: 0;
					}
					&:after {
						left: 39px;
					}
					&:before {
						right: 39px;
					}
				}
			}
		}

		&__sidebar {
			position: absolute;
			top: 76px;
			left: calc(calc(calc(100% - 716px)/4) - 57px);
			display: flex;
			flex-direction: column;
			width: 190px;
		}
		.social-block {
			margin-top: -23px;
		}
	}

	.sidebar {
		&__title {
			position: relative;
			font-family: "SFProDisplay";
			font-weight: 600;
			font-size: 16px;
			line-height: 22px;
			letter-spacing: -.2px;
			text-transform: capitalize;
			color: #357FDB;
			margin-bottom: 28px;
			&:before {
				content: "";
				position: absolute;
				bottom: -14px;
				left: 0;
				width: 100%;
				height: 1px;
				background-color: rgba(#000,.06);
			}
		}
		&__subtitle {
			font-family: "SFProDisplay";
			font-weight: normal;
			font-size: 15px;
			line-height: 19px;
			margin-bottom: 4px;
			color: #37393E;
		}
		&__dev {
			font-family: "Roboto";
			font-weight: normal;
			font-style: normal;
			font-weight: normal;
			font-size: 12px;
			line-height: 12px;
			color: rgba(#37393E, .43);
		}
		&__add {
			margin-bottom: 24px;
		}
	}

	#block-app {
		position: fixed;
		right: -400px;
		bottom: 10px;
		transition: .3s all ease;
		width: 353px;
		height: 106px;
		padding: 26px 27px;
		background: #FFFFFF;
		border: 1px solid rgba(0, 0, 0, 0.02);
		box-sizing: border-box;
		box-shadow: 0px 4px 24px rgba(52, 59, 76, 0.04);
		border-radius: 6px;
	}

	@media (max-width: 1280px) {
		.description {
			&__sidebar {
				padding-right: 20px;
			}
		}
	}

	@media (max-width: 1200px) {
		.description {
			&__container {
				margin-left: 200px;
			}
			&__sidebar {
				left: 20px;
			}
		}
	}

	@media (max-width: 960px) {
		.description {
			padding: 0 44px 0 36px;
			padding-top: 39px;
			padding-bottom: 13px;

			&__container {
				margin: 0 auto;
			}

			&__title {
				display: block;
				width: 100%;
				margin-bottom: 5px;
			}

			&__sidebar {
				position: relative;
				top: auto;
				left: auto;
				display: block;
				margin-bottom: 23px;
				padding-right: 0;
				width: auto;

				.sidebar {
					&__title {
						text-align: center;
						margin-bottom: 29px;
					}
					&__add {
						display: inline-block;
						width: auto;
						text-align: center;
						width: 33.33333333%;
					}
				}
			}
			.social-block {
				margin-bottom: 10px;
			}
			/deep/ .social-block {
				&__share {
					margin-right: 16px;
				}
			}
		}
	}

	@media (max-width: 640px) {
		.description {
			&__container {
				.block {
					&.video {
						width: calc(100% + 40px);
						margin-left: -20px;

						/deep/ iframe {
							height: 235px !important;
						}
					}
					&__content {
						margin-bottom: 31px;
					}
				}
				/deep/ .block {

					&__img {
						width: calc(100% + 40px);
						margin-left: -16px;
					}
					&__blockquote {
						&:before {
							right: -22px;
						}
						&:after {
							right: -14px;
						}
						blockquote {
							max-width: 315px;
							letter-spacing: .1px;
							padding-left: 8px;
							padding-right: 0;
						}
					}
				}
			}
			/deep/ .social-block {
				margin: 0 auto;
				margin-bottom: 31px;
				padding-left: 30px;
				margin-top: -11px;
				display: block;
				width: auto;
				height: 21px;
				text-align: center;
				&__share {
					vertical-align: middle;
					margin-bottom: 0;
					line-height: 21px;
				}
				&__list {
					display: inline-block;
					vertical-align: middle;

					& > * {
						margin-right: 20px;
					}
				}
				&__item {
					display: inline-block;
					&.fix {
						padding-left: 18px;
					}
				}
			}
		}
	}
</style>