<template lang="pug">
	.selection-one
		.preloader(:class="{'preloader_hidden': !preloader}")
			img(:src="require('@/assets/img/preloader_single.svg')")
		block-header(color = 'white')
		poster(:page="getArticleBySlug($route.params.slug)" :award="getAwardById(getArticleBySlug($route.params.slug) && getArticleBySlug($route.params.slug).acf ? getArticleBySlug($route.params.slug).acf.info.award : '')" :app="getAppByArticle(getArticleBySlug($route.params.slug) ? getArticleBySlug($route.params.slug).id : '')")
		description(:page="getArticleBySlug($route.params.slug)" :award="getAwardById(getArticleBySlug($route.params.slug) && getArticleBySlug($route.params.slug).acf ? getArticleBySlug($route.params.slug).acf.info.award : '')")
		block-footer
</template>

<script>
	import Header from '../blocks/includes/header.vue';
	import Footer from '../blocks/includes/footer.vue';

	import Poster from '../blocks/one-winner/poster.vue';
	import Description from '../blocks/one-winner/description.vue';
	import AOS from 'aos';
	import { mapState, mapGetters } from 'vuex';
	import BlockPreloader from '@/blocks/includes/preloader.vue';
		
	export default {
		name: 'One-winner',
		metaInfo: function() {
			// return {
			// 	title: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[3].content : '',
			// 	meta: [
			// 		{ vmid: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[0].name : '', name: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[0].name : '', content: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[0].content : '' },
			// 		{ vmid: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[1].property : '', name: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[1].property : '', content: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[1].content : '' },
			// 		{ vmid: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[2].property : '', name: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[2].property : '', content: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[2].content : '' },
			// 		{ vmid: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[3].property : '', name: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[3].property : '', content: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[3].content : '' },
			// 		{ vmid: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[4].property : '', name: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[4].property : '', content: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[4].content : '' },
			// 		{ vmid: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[5].property : '', name: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[5].property : '', content: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[5].content : '' },
			// 		{ vmid: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[6].name : '', name: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[6].name : '', content: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[6].content : '' },
			// 		{ vmid: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[7].name : '', name: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[7].name : '', content: this.articles.length ? this.getArticleBySlug(this.$route.params.slug).yoast_meta[7].content : '' },
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
		mounted() {
			this.checkAOS();
			console.log('seo ', this.getArticleBySlug(this.$route.params.slug).yoast_meta)
		},
		computed: {
			...mapState([
				'articles',
				'awards',
				'apps',
				'articlesLoaded',
				'awardsLoaded',
				'appsLoaded'
			]),
			...mapGetters([
				'getArticleBySlug',
				'getAwardById',
				'getAppByArticle'
			])
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
				if (!this.isAOS && this.appsLoaded && this.awardsLoaded && this.articlesLoaded) {
					this.startAOS();
				}
			},
			getMeta() {
				let meta = [],
					title = '';

				if(this.getArticleBySlug(this.$route.params.slug).yoast_meta) {
					this.getArticleBySlug(this.$route.params.slug).yoast_meta.forEach((item, i) => {
						if(item.property && item.property.indexOf(':title') > -1) {
							title = item.content;
						}
						let obj = {
							vmid: item.name || item.property,
							name: item.name || item.property,
							content: item.content
						}
						meta.push(obj);
					});
				}
				return [title, meta]
			}
		},
		created() {
			if (!this.articles.length) this.$store.dispatch('GET_ARTICLES');
			if (!this.awards.length) this.$store.dispatch('GET_AWARDS');
			if (!this.apps.length) this.$store.dispatch('GET_APPS');
		},
		watch: {
			apps() {
                this.checkAOS();
            },
            awards() {
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