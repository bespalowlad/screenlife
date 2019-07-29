<template lang="pug">
	.terms
		.terms__title(data-aos="fade-up" v-html="title")
		.terms__container
			block-text(
				:text="page.content"
			)
</template>
<script>
import BlockText from '../../blocks/includes/contentBlocks/blockText';

export default {
	data: function(){
		return {

		}
	},
	props: {
		page: Object,
		title: String
	},
	components: {
		'block-text':BlockText
	}
}
</script>
<style lang="scss" scoped>
	.terms {
		padding-top: 148px;
		text-align: center;
		&__title {
			font-family: 'SFProDisplay';
			font-weight: 700;
			font-size: 45px;
			line-height: 59px;
			text-align: center;
			letter-spacing: 1px;
			text-transform: uppercase;

			color: #3D4950;

			margin-bottom: 38px;
		}
		&__container {
			display: inline-block;
			text-align: left;
			width: 100%;
			max-width: 955px;
			padding: 74px 99px;
			padding-bottom: 0;
			background: #FFFFFF;
			box-shadow: 0px 4px 33px rgba(52, 59, 76, 0.01);
			border-radius: 6px;

			margin-bottom: 97px;
		}
		/deep/ .block {
			max-width: none;
			margin-bottom: 30px;

			/deep/ li {
				list-style-type: disc;
			}
		}
	}

	@media (max-width: 940px) {
		.terms {
			padding-top: 118px;
			&__title {
				font-size: 36px;
				line-height: 43px;
				text-align: center;
				letter-spacing: 1px;
				text-transform: uppercase;

				color: #37393E;

				margin-bottom: 27px;
			}
			&__container {
				padding: 30px 37px;
				width: calc(100% - 40px);
				padding-right: 30px;
				padding-bottom: 0;
				margin-bottom: 46px;
			}
			.block {
				margin-bottom: 17px;
				/deep/ p {
					padding: 10px 3px;
				}
				/deep/ strong {
					line-height: 25px;
					margin-bottom: 15px;
				}
				/deep/ h2 {
					padding: 10px 0 0 3px;
					font-size: 32px;
					line-height: 44px;
				}
			}
		}
	}
</style>
