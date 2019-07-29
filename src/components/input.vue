<template lang="pug">
	.ui-input(:class="{'ui-input_active' : checkVal, 'ui-input_error' : !isValid, 'ui-input--light': lightColor}")
		input(:type="type", v-bind:value="value" v-on:input="$emit('input', $event.target.value)" @keyup="$emit('keyup')" @click="$emit('click')" @mouseover="$emit('mouseover')" :name="name" :autocomplete="autocomplete")
		.ui-input__name {{ label }}
		.ui-input__error-label {{ $ml.get('forms.error') + label.toLowerCase()}}
</template>

<script>
  import {mask} from 'vue-the-mask';
  
  export default {
	name: 'v-input',
	data: function() {
	return {
			checkVal:false
		}
	},
	directives: {mask},
	props:{
		lightColor: {
			type: Boolean,
			default: false
		},
		value:{
			type:String,
			default:''
		},
		name:{
			type:String,
			default:''
		},
		type:{
			type:String,
			default:'text'
		},
		label:{
			type:String,
			default:''
		},
		autocomplete: {
			type: String,
			default: ''
		},
		isValid: {
			type: Boolean,
			default: true
		}
	},
	methods:{
        
	},
	mounted() {
		this.checkVal = this.value !="" ? true : false;
	},
	watch: {
		value(val) {
			this.checkVal = val !="" ? true : false;
		},
	}
  }
</script>
<style lang="scss" scoped>

	.ui-input {
		width: 100%;
		position: relative;
		margin-bottom: 24px;
		// border-bottom: solid 1px rgba(54,54,54,0.15);
		transition: border-color .5s ease;

		&--light {
			

			.ui-input__name {
				color: #fff;
			}

			input {
				color: #fff !important;
				border-bottom: 1px solid rgba(255,255,255,0.18) !important;
			}
		}

		&__name {
			font-family: "GothamPro";
			font-weight: normal;
			font-size: 10px;
			line-height: 10px;
			text-transform: uppercase;
			color: rgba(55, 57, 62, 0.7);
			position: absolute;
			left: 0px;
			// top: 0px;
			bottom: 13px;
			transform: translateX(-1px) translateY(5px);
			transform-origin: 0 0;
			pointer-events: none;
			transition: all 0.3s ease;

		}

		&__error-label {
			position: absolute;
			bottom: -25px;
			left: -1px;
			font-family: 'Roboto';
			font-weight: 300;
			font-style: normal;
			font-weight: 300;
			font-size: 10px;
			line-height: 22px;
			color: #D93737;
			opacity: 0;
			pointer-events: none;
			transition: opacity .5s ease;
		}

		input {
			width: 100%;
			background: transparent;
			padding-bottom: 9px;
			font-size: 10px;
			line-height: 10px;
			text-transform: uppercase;
			color: rgba(55, 57, 62, 0.7);
			border-bottom: 1px solid rgba(54,54,54,0.15);

			&:focus {
				& + .ui-input {
					&__name {
						transform: translateX(0px) translateY(-15px) scale(0.7);
						transform-origin: 0 0;
					}
				}
			}
		}

		&_active {
			.ui-input {
				&__name {
					transform: translateX(0px) translateY(-15px) scale(0.7);
					transform-origin: 0 0;
				}
			}
		}

		&_error {
			.ui-input {
				&__name {
					color: #D93737;
				}
				&__error-label {
					opacity: 1;
				}
			}
			border-color: rgba( #D93737,.46);
		}
	}

	@media (max-width: 1200px) {
		.ui-input {
			margin-bottom: 36px;
			input {
				// padding-bottom: 4px;
			}
			&__name {
				left: 1px;
				transform: translateX(-1px) translateY(0px);
			}
		}
	}

	@media (max-width: 640px) {
		.ui-input {
			margin-bottom: 30px;

			input {
				// padding-bottom: 0;
			}

			&__name {
				left: 3px;
				// top: -5px;
				bottom: 13px;
			}
		}
	}
</style>