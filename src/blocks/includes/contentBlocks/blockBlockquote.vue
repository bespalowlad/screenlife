<template lang="pug">
	.block(data-aos="fade-up")
		.block__blockquote
			blockquote(v-html="text")
</template>

<script>
export default {
	name: 'BlockBlockquote',
	data: function(){
		return {}
	},
	props: {
		text: {
			type: String
		}

	}
}
</script>

<style lang="scss" scoped>
	.block {
		max-width: 676px;
		margin-bottom: 50px;

		&__blockquote {
			display: block;
			position: relative;
			margin: 0 auto 48px auto;

			blockquote {
				display: block;
				max-width: 487px;
				margin: 0 auto;
				font-family: 'Roboto';
				font-weight: 500;
				font-style: normal;
				// font-weight: 500;
				font-size: 18px;
				line-height: 30px;
				text-align: center;
				color: #37393E;
				padding-right: 35px;
			}

			&:after {
				content: url('../../../assets/img/quotes.svg');
				position: absolute;
				left: 0;
				top: calc(50% + 5px);
				transform: translateY(-50%);
			}

			&:before {
				content: url('../../../assets/img/quotes.svg');
				position: absolute;
				right: 0;
				top: calc(50% + 5px);
				transform: translateY(-50%) rotate(-180deg);
			}
		}
	}

	@media (max-width: 1200px) {
		.block {
			max-width: 600px;
		}
	}

	@media (max-width: 960px) {
		.block {
			max-width: 100%;
		}
	}

	@media (max-width: 640px) {
		.block {
			margin-bottom: 31px;

			&__blockquote {
				margin: -10px auto 36px auto;

				blockquote {
					max-width: 308px;
					margin-left: auto;
					margin-right: auto;
					padding-right: 0;
				}

				&:before {
					top: 50%;
				}

				&:after {
					top: 50%;
				}
			}
		}
	}

	@media (max-width: 320px) {
		.block {
			&__blockquote {
				&:before {
					right: -10px;
				}

				&:after {
					left: -10px;
				}
			}
		}
	}
</style>


