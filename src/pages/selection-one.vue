<template lang="pug">
	.selection-one
		.preloader(:class="{'preloader_hidden': !preloader}")
			img(:src="require('@/assets/img/preloader_single.svg')")
		block-header(color='white')
		poster(:page="getFeedBySlug($route.params.slug)")
		description(:page="getFeedBySlug($route.params.slug)")
		block-footer
</template>

<script>
	import Header from '../blocks/includes/header.vue';
	import Footer from '../blocks/includes/footer.vue';

	import Poster from '../blocks/selection-one/poster.vue';
	import Description from '../blocks/selection-one/description.vue';

	import AOS from 'aos';
	import BlockPreloader from '@/blocks/includes/preloader.vue';
	import {mapState, mapGetters} from 'vuex';
		
	export default {
		name: 'Selection-one',
		metaInfo: function() {
			// return {
			// 	// title: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[3].content : '',
			// 	meta: [
			// 		// { vmid: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[0].name : '', name: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[0].name : '', content: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[0].content : '' },
			// 		// { vmid: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[1].property : '', name: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[1].property : '', content: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[1].content : '' },
			// 		// { vmid: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[2].property : '', name: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[2].property : '', content: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[2].content : '' },
			// 		// { vmid: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[3].property : '', name: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[3].property : '', content: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[3].content : '' },
			// 		// { vmid: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[4].property : '', name: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[4].property : '', content: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[4].content : '' },
			// 		// { vmid: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[5].property : '', name: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[5].property : '', content: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[5].content : '' },
			// 		// { vmid: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[6].name : '', name: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[6].name : '', content: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[6].content : '' },
			// 		// { vmid: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[7].name : '', name: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[7].name : '', content: this.feeds.length ? this.getFeedBySlug(this.$route.params.slug).yoast_meta[7].content : '' },
			// 	]
			// }
			return {
				title: this.getMeta()[0],
				meta: this.getMeta()[1]
			}
		},
		data: function(){
			return {
				isAOS: false,
				preloader: true
			}
		},
		components:{
			'block-header': Header,
			'block-footer': Footer,
			'poster': Poster,
			'description': Description,
			'block-preloader': BlockPreloader
		},
		mounted(){
			this.checkAOS();
		},
		created(){
			if (!this.feeds.length) this.$store.dispatch('GET_FEEDS');
			if (!this.awards.length) this.$store.dispatch('GET_AWARDS');
			if (!this.apps.length) this.$store.dispatch('GET_APPS');
			if (!this.categories.length) this.$store.dispatch('GET_CATEGORIES');
			if (!this.articles.length) this.$store.dispatch('GET_ARTICLES');
			if (!this.feedCategories.length) this.$store.dispatch('GET_FEED_CATEGORIES');
		},
		methods: {
			startAOS() {
				this.$nextTick(function() {
					AOS.init({
						once: true,
						disabled: 'mobile',
						// offset: 0,
						duration: 1000
					});
					this.preloader = false;
				});
				this.isAOS = true;
			},
			checkAOS() {
				if (!this.isAOS && this.feedsLoaded && this.appsLoaded && this.categoriesLoaded && this.awardsLoaded && this.feedCategoriesLoaded && this.articlesLoaded) {
					this.startAOS();
				}
			},
			getMeta() {
				let meta = [],
					title = '';

				if(this.getFeedBySlug(this.$route.params.slug).yoast_meta) {
					this.getFeedBySlug(this.$route.params.slug).yoast_meta.forEach((item, i) => {
						if(item.name.indexOf(':title') > -1) {
							title = item.content;
						}
						let obj = {
							vmid: item.name,
							name: item.name,
							content: item.content
						}
						meta.push(obj);
					});
				}
				return [title, meta]
			}
		},
		computed: {
			...mapState([
				'feeds',
				'apps',
				'categories',
				'articles',
				'awards',
				'feedCategories',
				'feedsLoaded',
				'appsLoaded',
				'categoriesLoaded',
				'awardsLoaded',
				'feedCategoriesLoaded',
				'articlesLoaded'
			]),
			...mapGetters([
				'getFeedBySlug',
				'getAppById'
			])
		},
		watch: {
			feeds() {
				this.checkAOS();
			},
			apps() {
				this.checkAOS();
			},
			categories() {
				this.checkAOS();
			},
			awards() {
				this.checkAOS();
			},
			feedCategories() {
				this.checkAOS();
			},
			articles() {
				this.checkAOS();
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.preloader {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		font-size: 0;
		pointer-events: none;
		min-height: 100vh;
		background-color: #fff;
		
		img {
			width: 100%;
			display: block;
		}

		&_hidden {
			opacity: 0;
			transition: opacity .5s ease;
		}

		&_2 {
			top: 100%;
		}
	}

	@media screen and (max-width: 960px) {
		.preloader {
			display: none !important;
		}
	}
</style>


