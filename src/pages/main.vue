<template lang="pug">
	.main
		.preloader(:class="{'preloader_hidden': !preloader}")
			.preloader.preloader_2
				img(:src="require('@/assets/img/preloader_main_2.svg')")
		block-header
		poster(:page="main")
		block-best#apps(:feeds="feeds" :page="main")
		block-view(:page="main")
		block-footer
</template>

<script>
	import Header from '../blocks/includes/header.vue';
	import Footer from '../blocks/includes/footer.vue';

	import Poster from '../blocks/main/poster.vue';
	import BlockPreloader from '@/blocks/includes/preloader.vue';
	import BestOfTheWeek from '../blocks/main/best-of-the-week.vue';
	import View from '../blocks/main/view.vue';
	import AOS from 'aos';
	import {mapState} from 'vuex';

	import 'swiper/dist/css/swiper.css'

	export default {
		name: 'Main',
		metaInfo: function() {
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
			'block-best': BestOfTheWeek,
			'block-view': View,
			'block-preloader': BlockPreloader
		},
		mounted() {
			this.checkAOS();
		},
		computed: {
			...mapState([
				'feeds',
				'apps',
				'categories',
				'feedCategories',
				'main',
				'feedsLoaded',
				'appsLoaded',
				'categoriesLoaded',
				'feedCategoriesLoaded',
				'seomain'
			])
		},
		created(){
			if (!this.feeds.length) this.$store.dispatch('GET_FEEDS');
			if (!this.apps.length) this.$store.dispatch('GET_APPS');
			if (!this.categories.length) this.$store.dispatch('GET_CATEGORIES');
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
				if (!this.isAOS && this.feedsLoaded && this.appsLoaded && this.categoriesLoaded && this.feedCategoriesLoaded && !this.main.isEmpty) {
					this.startAOS();
				}
			},
			getMeta() {
				let meta = [],
					title = '';

				if(this.seomain) {
					this.seomain.forEach((item, i) => {
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
			feedCategories() {
				this.checkAOS();
			},
			main() {
				this.checkAOS();
			},
		}
	}

</script>

<style lang="scss">
	@import '@/assets/sass/ui.scss';
	@import '@/helpers/sass/aos.scss';
</style>

<style lang="scss" scoped>
	.preloader {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		font-size: 0;
		pointer-events: none;
		background-color: #fff;
		width: 100%;
		
		img {
			width: 100%;
			display: block;
		}

		&_hidden {
			opacity: 0;
			transition: opacity .5s ease;
		}

		&_2 {
			top: 800px;
		}
	}

	@media screen and (max-width: 1200px) {
		.preloader {
			display: none !important;
		}
	}
</style>