<template lang="pug">
	.privacyPolicy
		.preloader(:class="{'preloader_hidden': !preloader}")
			img(:src="require('@/assets/img/preloader_terms.svg')")
		block-header
		block-content(:page="terms" :title="'Terms of use'")
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
		name: 'Terms',
		metaInfo: function() {
			// return {
			// 	title: this.seoterms.length ? this.seoterms[3].content : '',
			// 	meta: [
			// 		{ vmid: this.seoterms.length ? this.seoterms[0].name : '', name: this.seoterms.length ? this.seoterms[0].name : '', content: this.seoterms.length ? this.seoterms[0].content : '' },
			// 		{ vmid: this.seoterms.length ? this.seoterms[1].property : '', name: this.seoterms.length ? this.seoterms[1].property : '', content: this.seoterms.length ? this.seoterms[1].content : '' },
			// 		{ vmid: this.seoterms.length ? this.seoterms[2].property : '', name: this.seoterms.length ? this.seoterms[2].property : '', content: this.seoterms.length ? this.seoterms[2].content : '' },
			// 		{ vmid: this.seoterms.length ? this.seoterms[3].property : '', name: this.seoterms.length ? this.seoterms[3].property : '', content: this.seoterms.length ? this.seoterms[3].content : '' },
			// 		{ vmid: this.seoterms.length ? this.seoterms[4].property : '', name: this.seoterms.length ? this.seoterms[4].property : '', content: this.seoterms.length ? this.seoterms[4].content : '' },
			// 		{ vmid: this.seoterms.length ? this.seoterms[5].property : '', name: this.seoterms.length ? this.seoterms[5].property : '', content: this.seoterms.length ? this.seoterms[5].content : '' },
			// 		{ vmid: this.seoterms.length ? this.seoterms[6].name : '', name: this.seoterms.length ? this.seoterms[6].name : '', content: this.seoterms.length ? this.seoterms[6].content : '' },
			// 		{ vmid: this.seoterms.length ? this.seoterms[7].name : '', name: this.seoterms.length ? this.seoterms[7].name : '', content: this.seoterms.length ? this.seoterms[7].content : '' }
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
			'block-content': Content,
			'block-preloader': BlockPreloader
		},
		computed: {
            ...mapState([
				'terms',
				'seoterms'
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
				if (!this.isAOS && !this.terms.isEmpty) {
					this.startAOS();
				}
			},
			getMeta() {
				let meta = [],
					title = '';

				if(this.seoterms) {
					this.seoterms.forEach((item, i) => {
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
            if (this.terms.isEmpty) this.$store.dispatch('GET_PAGE', 'terms');
		},
		watch: {
			terms() {
				this.checkAOS();
				console.log('seo ', this.seoterms);
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