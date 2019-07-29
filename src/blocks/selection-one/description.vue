<template lang="pug">
	.description
		.wrapper
			.description__content
				template(v-for="(card, i) in page.acf ? page.acf.editor : []")

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
						:poster="card.field2 ? card.field2.sizes.large : ''"
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

					block-one-app(
						v-if="card.acf_fc_layout === 'Block 10'"
						:key="i"
						:card="card"
					)

				social-block(
					:fb="'https://www.facebook.com/sharer/sharer.php?u=' + getCurrentUrl + '&t=' + (page.title ? page.title.rendered : '')"
					:tw="'https://twitter.com/share?url=' + getCurrentUrl + '&text=' + (page.title ? page.title.rendered : '')"
					:vk="'http://vk.com/share.php?url=' + getCurrentUrl + '&title=' + (page.title ? page.title.rendered : '') + '&image=' + (page.acf ? page.acf.preview.sizes.large : '')"
					:url="getCurrentUrl"
				)

			aside.description__sidebar(v-show="page.acf")
				card-winner(:app="getLastWinner" :article="getArticleByApp(getLastWinner ? getLastWinner.id : '')")
				card-app(v-if="page && page.acf && page.acf.html" :card="page && page.acf ? page.acf.html : ''")
				card-articles(v-if="getRelativeFeeds(page && page.feed_category ? page.feed_category[0] : '', page.id).length" :list="page && page.acf ? getRelativeFeeds(page.feed_category[0], page.id) : []")
		block-app#block-app(v-if="page.acf && page.acf.content.apps_1[0]" :app="getAppById(page.acf.content.apps_1 ? page.acf.content.apps_1[0].ID : '') || {}")
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
import blockOneApp from '@/blocks/includes/card/card-bg-wave';

import blockApp from '../includes/smallBlocks/cardApp.vue';

import CardWinner from '../includes/card/card-winner.vue';
import CardApp from '../includes/card/card-app.vue';
import CardArticles from '../includes/card/card-similar-articles.vue';
import SocialBlock from '@/blocks/includes/smallBlocks/socialBlock.vue';
import { mapGetters, mapState } from 'vuex';

export default {
	name: 'Description',
	data: function(){
		return {
			downToUp: Boolean,
		}
	},
	props: {
		page: Object
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
		'card-winner': CardWinner,
		'card-app': CardApp,
		'card-articles': CardArticles,
		'block-app': blockApp,
		'social-block': SocialBlock,
		'block-one-app': blockOneApp
	},
	beforeDestroy() {
		document.removeEventListener('scroll', this.fixedBlockApp);
	},
	methods: {
		ellipsis(value, count) {
            if(value.length > count) {
                value = value.substr(0, count);
                return value + '...'
            } else {
                return value;
            }
        },
		fixedBlockApp(){
			let sidebar = document.getElementsByClassName('description__sidebar')[0],
				coord = sidebar.getBoundingClientRect().bottom + window.pageYOffset,
				blockApp = document.getElementById('block-app'),
				parentBlock = document.getElementsByClassName('description')[0],
				paddingBottom = window.getComputedStyle(parentBlock).paddingBottom,
				bottomCoord = parentBlock.getBoundingClientRect().bottom + window.pageYOffset;

			if(!coord || !blockApp) return false;

			if(window.pageYOffset >= coord) {
				blockApp.style.right = 81 + 'px';
				blockApp.style.transition = '.3s all ease';

				let currScroll = window.pageYOffset;

				if(window.pageYOffset + document.documentElement.clientHeight >= bottomCoord - paddingBottom.substr(0, paddingBottom.length - 2) + 10) {
					blockApp.style.transition = 'none';
					blockApp.style.position = 'absolute';
					blockApp.style.bottom = paddingBottom;
					blockApp.style.right = 81 + 'px';
				} else if (this.downToUp == true){
					blockApp.style.position = 'fixed';
					blockApp.style.right = 81 + 'px';
					blockApp.style.bottom = 10 + 'px';
					blockApp.style.transition = 'none';
				}
			} else {
				blockApp.style.right = -400 + 'px';
				blockApp.style.transition = '.3s all ease';
			}
		},
		directionScroll(evt){
			evt.wheelDelta > 0 ? this.downToUp = true : this.downToUp = false; 
		},
	},
	computed: {
		...mapGetters([
			'getAppById',
			'getLastWinner',
			'getRelativeFeeds',
			'getArticleByApp'
		]),
		...mapState([
			'apps'
		]),
		getCurrentUrl() {
			return encodeURI(window.location.href);
		}
	},
	mounted(){
		document.addEventListener('scroll', this.fixedBlockApp);
		
		if('onwheel' in document) {
			document.addEventListener('wheel', this.directionScroll);
		} else if('onmousewheel' in document) {
			document.addEventListener('mousewheel', this.directionScroll);
		} else {
			document.addEventListener('MozMousePixelScroll', this.directionScroll);
		}
	},
}
</script>

<style lang="scss" scoped>
	.description {
		position: relative;
		padding: 72px 0 54px 0;

		.wrapper {
			display: flex;
			justify-content: space-between;
			flex-wrap: nowrap;
		}

		&__sidebar {
			display: inline-block;
			margin-right: -40px;
			width: 353px;

			& > * {
				&:not(:last-child) {
					margin-bottom: 23px !important;
				}
			}
		}
	}

	#block-app {
		position: fixed;
		z-index: 10;
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

	@media (max-width: 1285px) {
		.description {

			&__content {
				& > * {
					margin-right: 20px;
				}
			}

			&__sidebar {
				margin-right: 0;
			}
		}
	}

	@media (max-width: 1200px) {
		.description {
			&__sidebar {
				width: 300px;
			}
		}

		#block-app {
			visibility: hidden;
		}
	}

	@media (max-width: 960px) {
		.description {
			padding-top: 40px;

			.wrapper {
				display: block;
			}

			& > * {
				margin-right: 0;
			}

			&__sidebar {
				width: 100%;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-between;

				& > * {
					margin-bottom: 23px !important;
					
					&:last-child {
						margin-right: 0;
					}
				}
			}
		}

		.social-block {
			margin-bottom: 40px;
			justify-content: center;
		}

		.description {

			&__content {
				& > * {
					margin-right: 0;
				}
			}
		}
	}

	@media (max-width: 640px) {

		

		.description {
			padding-top: 31px;
			padding-bottom: 13px;

			&__title {
				margin-bottom: 5px;
			}

			&__sidebar {

				& > * {
					width: 100%;
					margin-right: 0;
					margin-bottom: 20px;

					&:nth-child(odd) {
						margin-right: 0;
					}
						
					&:last-child {
						margin-right: 0;
					}
				}
			}
		}
	}
</style>


