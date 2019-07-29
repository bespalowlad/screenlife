<template lang="pug">
	.privacyPolicy
		.preloader(:class="{'preloader_hidden': !preloader}")
			img(:src="require('@/assets/img/preloader_terms.svg')")
		block-header
		block-content(:page="privacy" :title="'Privacy policy'")
		block-footer
</template>

<script>
	import Header from '../blocks/includes/header.vue';
	import Footer from '../blocks/includes/footer.vue';

	import Content from '../blocks/privacyPolicy/content.vue';
	import AOS from 'aos';

	import {mapState} from 'vuex';
	import BlockPreloader from '@/blocks/includes/preloader.vue';

	export default {
		name: 'Privacy-Policy',
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
		computed: {
            ...mapState([
				'privacy',
				'seoprivacy'
            ])
		},
		mounted() {
			this.checkAOS();
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
				if (!this.isAOS && !this.privacy.isEmpty) {
					this.startAOS();
				}
			},
			getMeta() {
				let meta = [],
					title = '';

				if(this.seoprivacy) {
					this.seoprivacy.forEach((item, i) => {
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
        created() {
            if (this.privacy.isEmpty) this.$store.dispatch('GET_PAGE', 'privacy');
		},
		watch: {
			privacy() {
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
		
		text-align: center;
		width: 100%;

		img {
			width: 100%;
			display: block;
		}

		img {
			width: auto !important;
			max-width: 100% !important;
			margin: auto;
			margin-top: 120px;
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