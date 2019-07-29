<template lang="pug">
	.application
		.preloader(:class="{'preloader_hidden': !preloader}")
			img(:src="require('@/assets/img/preloader_single.svg')")
		block-header
		poster(
			:app="getAppBySlug($route.params.slug)"
			:award="getAwardByApp(getAppBySlug($route.params.slug) ? getAppBySlug($route.params.slug).id : '')"
		)
		description(
			:page="getAppBySlug($route.params.slug)"
		)
		block-footer
</template>

<script>
	import Header from '../blocks/includes/header.vue';
	import Footer from '../blocks/includes/footer.vue';

	import Poster from '../blocks/application/poster.vue';
	import Description from '../blocks/application/description.vue';
	import AOS from 'aos';
	import {mapState, mapGetters} from 'vuex';
	import BlockPreloader from '@/blocks/includes/preloader.vue';

	export default {
		name: 'Application',
		metaInfo: function() {
			return {
				title: this.getMeta()[0],
				meta: this.getMeta()[1]
			}
		},
		data: function() {
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
		created(){
			if (!this.apps.length) this.$store.dispatch('GET_APPS');
			if (!this.awards.length) this.$store.dispatch('GET_AWARDS');
			if (!this.articles.length) this.$store.dispatch('GET_ARTICLES');
			if (!this.categories.length) this.$store.dispatch('GET_CATEGORIES');
		},
		computed: {
			...mapState([
				'apps',
				'categories',
				'awards',
				'articles',
				'appsLoaded',
				'categoriesLoaded',
				'awardsLoaded',
				'articlesLoaded'
			]),
			...mapGetters([
				'getAppBySlug',
				'getAwardByApp'
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
				if (!this.isAOS && this.appsLoaded && this.categoriesLoaded && this.awardsLoaded && this.articlesLoaded) {
					this.startAOS();
				}
			},
			getMeta() {
				let meta = [],
					title = '';

				if(this.getAppBySlug(this.$route.params.slug).yoast_meta) {
					this.getAppBySlug(this.$route.params.slug).yoast_meta.forEach((item, i) => {
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
		mounted() {
			this.checkAOS();
		},
		watch: {
			apps() {
				this.checkAOS();
			},
			categories() {
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


