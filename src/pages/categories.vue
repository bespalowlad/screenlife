<template lang="pug">
	.categories
		.preloader(:class="{'preloader_hidden': !preloader}")
			img(:src="require('@/assets/img/preloader_categories.svg')")
		block-header
		block-content(
			:list="getAppsByCategory(getCategoryIdBySlug(parseInt($route.params.category) ? false : $route.params.category).id)"
			:awards="awards"
			:title="apps_page.title ? apps_page.title.rendered : ''"
		)
		block-footer
</template>

<script>
	import Header from '../blocks/includes/header.vue';
	import Footer from '../blocks/includes/footer.vue';

	import Content from '../blocks/categories/content.vue';
	import AOS from 'aos';

	import {mapState, mapGetters} from 'vuex';
	import BlockPreloader from '@/blocks/includes/preloader.vue';

	export default {
		name: 'Categories',
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
			'block-content': Content,
			'block-preloader': BlockPreloader
		},
		mounted() {
			this.checkAOS();
		},
		created(){
            if (!this.apps.length) this.$store.dispatch('GET_APPS');
			if (!this.categories.length) this.$store.dispatch('GET_CATEGORIES');
			if (!this.awards.length) this.$store.dispatch('GET_AWARDS');
			if (this.apps_page.isEmpty) this.$store.dispatch('GET_PAGE', 'apps_page');
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
				if (!this.isAOS && this.appsLoaded && this.categoriesLoaded && this.awardsLoaded) {
					this.startAOS();
				}
			},
			getMeta() {
				let meta = [],
					title = '';

				if(this.seoapps_page){
					this.seoapps_page.forEach((item, i) => {
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
				'apps',
				'awards',
				'categories',
				'appsLoaded',
				'categoriesLoaded',
				'awardsLoaded',
				'apps_page',
				'seoapps_page'
			]),
			...mapGetters([
				'getAppsByCategory',
				'getCategoryIdBySlug',
				'getAwardByApp',
				'getAppBySlug',
			])
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
				console.log('awards ', this.awards);
			},
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