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
					:vk="'http://vk.com/share.php?url=' + getCurrentUrl + '&title=' + (page.title ? page.title.rendered : '') + '&image=' + (page.acf ? page.acf.info.preview.sizes.large : '')"
					:url="getCurrentUrl"
				)
			
			aside.description__sidebar
				specifications(v-if="page.acf && page.acf.info.specifications" :items="page.acf.info.specifications")
				card-winner(:app="getLastWinner" :article="getArticleByApp(getLastWinner ? getLastWinner.id : '')")
				card-app(:card="page && page.acf ? page.acf.html : ''")
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
	import CardWinner from '../includes/card/card-winner.vue';

	import blockApp from '../includes/smallBlocks/cardApp.vue';
	import Specifications from '../includes/card/specifications.vue';
	import CardApp from '../includes/card/card-app.vue';
	import SocialBlock from '../includes/smallBlocks/socialBlock.vue';
	import Screencastify from '../includes/card/screencastify.vue';

	import {mapGetters} from 'vuex';


	export default {
		name: 'Description',
		data: function(){
			return {
				mobile: document.documentElement.clientWidth < 640 ? true : false
			}
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
			'block-app': blockApp,
			'specifications': Specifications,
			'card-app': CardApp,
			'screencastify': Screencastify,
			'block-one-app': blockOneApp,
			'social-block': SocialBlock,
			'card-winner': CardWinner
		},
		props: {
			page: Object
		},
		methods: {
			mobileDetector(){
				document.documentElement.clientWidth < 640 ? this.mobile = true : this.mobile = false;
			}
		},
		computed: {
			getCurrentUrl() {
				return encodeURI(window.location.href);
			},
			...mapGetters([
				'getLastWinner',
				'getArticleByApp'
			])
		},
		mounted(){
			window.addEventListener('resize', this.replaceIcon);
		}
	}
</script>

<style lang="scss" scoped>
	.description {
		position: relative;
		padding-bottom: 97px;

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

		&__content {
			width: 100%;
			max-width: 676px;
		}
	}

	.social-block {
		margin-top: -17px;
		margin-bottom: 70px;
	}

	@media (max-width: 1285px) {
		.description {

			&__content {
				margin-right: 20px;

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
				// right: 30px;
				width: 300px;
			}
		}
	}

	@media (max-width: 960px) {
		.description {
			padding-bottom: 60px;

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

				.specifications {
					height: auto;
				}
			}

			&__content {
				margin-right: 0;
				max-width: 100%;
			}
		}

		.social-block {
			margin: 24px auto 40px auto;
			justify-content: center;
		}
	}

	@media (max-width: 640px) {
		.description {
			padding-bottom: 46px;

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

		.card.card-app {
			width: 100%;
		}
	}
</style>


