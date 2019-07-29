<template lang="pug">
	.ui-textarea(:class="{'ui-textarea_active' : checkVal, 'ui-textarea_error' : !isValid, 'ui-textarea--light': lightColor}" @keyup="$emit('keyup')" @click="$emit('click')" @mouseover="$emit('mouseover')")
		textarea-autosize(rows="1" :max-height="maxHeight" :min-height="minHeight" :value="value" @input="onChange($event)" :name="name")
		//- textarea#textarea
		.ui-textarea__name {{ label }}
		.ui-textarea__error-label {{ $ml.get('forms.error') + label.toLowerCase()}}
</template>

<script>
  import {mask} from 'vue-the-mask';
  import autosize from 'autosize';
  
  export default {
	name: 'v-textarea',
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
        },
        maxHeight: {
            type: Number,
            default: 0
        },
        minHeight: {
            type: Number,
            default: 0
        }
	},
	methods:{
        onChange(val){
            this.checkVal = val.length > 0;
            this.$emit('value', val);
		},
	},
	mounted() {
		this.checkVal = this.value !="" ? true : false;

		// autosize(document.getElementById('textarea'));
	},
	watch: {
		value(val) {
			this.checkVal = val !="" ? true : false;
		},
	}
  }
</script>
<style lang="scss" scoped>
	textarea[name="message"] {
        padding: 0 !important;
    }
	
	.ui-textarea {
		width: 100%;
		position: relative;
		margin-bottom: 31px;
		border-bottom: solid 1px rgba(54,54,54,0.15);
		transition: border-color .5s ease;	

		&--light {
			border-bottom: 1px solid rgba(255,255,255,0.18);

			.ui-textarea__name {
				color: #fff;
			}

			textarea {
				color: #fff !important;
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
			top: 3px;
			// bottom: 13px;
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

		textarea {
			width: 100%;
			background: transparent;
			padding: 0;
			font-size: 10px;
            line-height: 10px;
            text-transform: uppercase;
            color: rgba(55, 57, 62, 0.7);
			border: none;
			min-height: 11px;
			margin-bottom: 9px;
			position: relative;
			bottom: -6px;
			max-height: 66px;
			resize: none;
			overflow-y: auto;

			&:focus {
                outline: none;

				& + .ui-textarea {
					&__name {
						transform: translateX(0px) translateY(-15px) scale(0.7);
						transform-origin: 0 0;
					}
				}
			}

			&::-webkit-scrollbar{
				background: rgba(196, 196, 196, 0.37);
				border-radius: 10px;
				width: 3px;
            }

            &::-webkit-scrollbar-track{
				background: rgba(196, 196, 196, 0.37);
				border-radius: 10px;
            }

            &::-webkit-scrollbar-thumb{
				background: rgba(53, 127, 219, 0.81);
				border-radius: 10px;
				
            }
		}

		&_active {
			.ui-textarea {
				&__name {
					transform: translateX(0px) translateY(-15px) scale(0.7);
					transform-origin: 0 0;
				}
			}
		}

		&_error {
			.ui-textarea {
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
		.ui-textarea {
			margin-bottom: 36px;
			textarea {
				padding-bottom: 4px;
				max-height: 78px;
			}
			&__name {
				left: 1px;
				transform: translateX(-1px) translateY(0px);
			}
		}
	}

	@media (max-width: 640px) {
		.ui-textarea {
			margin-bottom: 6px;
			&__name {
				left: 3px;
				// top: -5px;
				// bottom: 13px;
			}
		}
	}
</style>