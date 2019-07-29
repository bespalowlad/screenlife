<template lang="pug">
	.winners
		.preloader(:class="{'preloader_hidden': !preloader}")
			img(:src="require('@/assets/img/preloader_single.svg')")
		block-header
		poster(:list="awards" :page="awardsPage")
		.wrapper
			v-select.select(v-if="options.length" @input="onChange" :components="{OpenIndicator}" :options="options" label="title" :clearable="false" :searchable="false" v-model="active")
		template(v-for="(card, index) in awards")
			award(:list="getArticlesByAward(card.id)" :award="card")
		block-footer
</template>

<script>
	import Header from '../blocks/includes/header.vue';
	import Footer from '../blocks/includes/footer.vue';
	
	import Poster from '../blocks/winners/poster.vue';
	import Award from '../blocks/winners/award.vue';

	import {mapState, mapGetters} from 'vuex';

	import AOS from 'aos';
	import vSelect from 'vue-select';
	import 'vue-select/dist/vue-select.css';
	import Indicator from '@/assets/img/v-select-arrow.svg';
	import BlockPreloader from '@/blocks/includes/preloader.vue';

	export default {
		name: 'Winners',
		metaInfo: function() {
			return {
				title: this.getMeta()[0],
				meta: this.getMeta()[1]
			}
		},
		data: function(){
			return {
				isAOS: false,
				selected: '',
				OpenIndicator: {
					render: createElement => createElement('span', {class: {'custom': true}}),
				},
				options: [],
				active: {},
				preloader: true
			}
		},
		components:{
			'block-header': Header,
			'block-footer': Footer,
			'poster': Poster,
			'award': Award,
			'v-select': vSelect,
			'block-preloader': BlockPreloader
		},
		mounted() {
			this.checkAOS();
		},
		methods: {
			onChange(val) {
				this.active = val;
				this.scrollTo(this.active.slug);
			},
			getOptions(arr) {
				let a = [];
				arr.forEach(item => {
					a.push({
						title: item.title.rendered,
						slug: item.slug
					})
				});
				return a;
			},
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
				if (!this.isAOS && this.appsLoaded && this.awardsLoaded && this.articlesLoaded && !this.awardsPage.isEmpty) {
					this.startAOS();
					this.options = this.getOptions(this.awards);
					this.active = this.options[0];
				}
			},
			scrollTo(slug) {
				let el = document.getElementById(slug);
				var rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				let top = rect.top + scrollTop;
				window.scrollTo({
					top: top,
					behavior: "smooth"
				});
			},
			getMeta() {
				let meta = [],
					title = '';

				if(this.seoAwardsPage) {
					this.seoAwardsPage.forEach((item, i) => {
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
				'articles',
				'awardsPage',
				'seoAwardsPage',
				'appsLoaded',
				'awardsLoaded',
				'articlesLoaded'
			]),
			...mapGetters([
				'getAppsByAward',
				'getArticlesByAward'
			])
		},
		created() {
			if (this.awardsPage.isEmpty) this.$store.dispatch('GET_AWARDSPAGE');
			if (!this.apps.length) this.$store.dispatch('GET_APPS');
			if (!this.awards.length) this.$store.dispatch('GET_AWARDS');
			if (!this.articles.length) this.$store.dispatch('GET_ARTICLES');
		},
		watch: {
			selected(){
				this.scrollTo(this.selected.hash);
			},
			apps() {
				this.checkAOS();
			},
			awards() {
				this.checkAOS();
			},
			articles() {
				this.checkAOS();
			},
			awardsPage() {
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
	
	/deep/ .vs--single.vs--open .vs__selected {
		position: static !important;
	}

	.select {
			display: none;
			max-width: 374px;
			margin: 0 auto;
			height: 46px;

			/deep/ .vs__dropdown-toggle,
			/deep/ .vs__dropdown-menu {
				background: #fff;
				border: none;
				color: #3D4950;
				box-shadow: 0px 4px 33px rgba(52, 59, 76, 0.04);
				font-family: 'SFProDisplay';
				font-weight: normal;
			}

			/deep/ .vs__dropdown-menu {
				// padding: 0 22px;
				max-height: auto;
				height: auto;
				overflow: auto;
				overflow-y: auto;

				li {
					padding: 10px 20px;
				}
			}

			/deep/ .vs__selected {
				padding-left: 20px;
				color: #3D4950;
				font-family: 'SFProDisplay';
				font-weight: 500;
				font-size: 15px;
				margin: 0;
				// line-height: normal !important;
			}

			/deep/ .vs__dropdown-option {
				background: none !important;
			}

			/deep/ .vs__dropdown-option--selected {
				background: none !important;
			}

			/deep/ .vs__search {
				color: #3D4950;

				&::-webkit-input-placeholder{
					color: #3D4950;
					font-family: 'SFProDisplay';
					font-weight: 500;
					font-size: 15px;
					line-height: 19px;
				}
				&::-moz-placeholder {
					color: #3D4950;
				}
				&:-moz-placeholder {
					color: #3D4950;
				}
				&:-ms-input-placeholder {
					color: #3D4950;
				}
			}

			/deep/ .vs__dropdown-option {
				color: #3D4950;
				font-family: 'SFProDisplay';
				font-weight: 500;
				font-size: 15px;
				line-height: 19px;
			}

			/deep/ .vs__dropdown-toggle {
				display: flex;
				align-items: center;
			}

			/deep/ .vs__selected-options {
				width: 100%;
			}

			/deep/ .vs__actions {
				transition: .3s all ease;
				margin-left: auto;

				svg path {
					fill: #3D4950;
				}
			}

			/deep/ .vs__dropdown-toggle {
				height: 46px;
			}

			/deep/ .vs__search {
				padding-left: 20px;
			}

			/deep/ .vs__actions {
				padding-right: 20px;
				position: relative;
			}

			/deep/ .vs__open-indicator {
				position: relative;
				width: 10px;
				height: 6px;

				&:after {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-image: url('../assets/img/v-select-arrow.svg');
				}
			}
		}

	@media (max-width: 960px) {
		.select {
			display: block;
		}
	}
</style>


