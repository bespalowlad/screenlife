<template lang="pug">
	img(:src="url")
</template>

<script>

	export default {
		name: 'block-preloader',
		props: {
			isHidden: Boolean,
			url: String
		},
		data: function(){
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	img {
		width: 100%;
		display: block;
		transition: opacity .5s ease;
	}

	.preloader_hidden {
		// opacity: 0;
		// pointer-events: none;
	}
</style>


