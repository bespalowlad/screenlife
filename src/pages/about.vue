<template lang='pug'>
	.about
		.preloader(:class="{'preloader_hidden': !preloader}")
			img(:src="require('@/assets/img/preloader_about.svg')")
		block-header
		poster(:page="about")
		screenlife(:page="about.app || {}")
		team(:page="about.team || {}" @showThanksBlock="showThanksBlock")
		form-questions(@showThanksBlock = "showThanksBlock")
		thanks-block(:class="{hide: thanksMessage}" @hideThanksBlock="hideThanksBlock")
		block-footer
</template>

<script>
	import Header from '../blocks/includes/header.vue';
	import Footer from '../blocks/includes/footer.vue';

	import Poster from '../blocks/about/poster.vue';
	import Screenlife from '../blocks/about/screenlife.vue';
	import Team from '../blocks/about/team.vue';
	import Form from '../blocks/about/form.vue';
	import thanks from '../components/thanks';
	import AOS from 'aos';
	import { mapState } from 'vuex';
	import BlockPreloader from '@/blocks/includes/preloader.vue';

	export default {
		name: 'About',
		metaInfo: function() {
			return {
				title: this.getMeta()[0],
				meta: this.getMeta()[1]
			}
		},
		data: function() {
			return {
				isAOS: false,
				thanksMessage: true,
				preloader: true
			}
		},
		components:{
			'block-header': Header,
			'block-footer': Footer,
			'poster': Poster,
			'screenlife': Screenlife,
			'team': Team,
			'form-questions': Form,
			'thanks-block': thanks,
			'block-preloader': BlockPreloader
		},
		mounted() {
			if (!this.about.isEmpty && !this.isAOS) {
				this.startAOS();
				this.isAOS = true;
			}
		},
		computed: {
			...mapState([
				'about',
				'seoabout'
			])
		},
		created() {
			if (this.about.isEmpty) this.$store.dispatch('GET_PAGE', 'about');
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
			},
			showThanksBlock(val){
				this.thanksMessage = false;
			},
			hideThanksBlock(val) {
				this.thanksMessage = true;
			},
			getMeta() {
				let meta = [],
					title = '';

				if(this.seoabout) {
					this.seoabout.forEach((item, i) => {
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
			about() {
				if (!this.about.isEmpty && !this.isAOS) {
					this.startAOS();
					this.isAOS = true;
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.thanks {
		&.hide {
			opacity: 0;
			pointer-events: none;
		}
	}

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