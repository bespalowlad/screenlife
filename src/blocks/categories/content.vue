<template lang="pug">
	//- .content(data-aos="fade")
	.content(data-aos="fade")
		.content__head
			.content__title(v-html="title")
			.content__options
				router-link.content__option(:to="$ml.get('lang_url') + '/apps/'" :key="0" :class="{content__option_active: !$route.params.category || parseInt($route.params.category)}") {{ $ml.get('apps.all') }}
				router-link.content__option(v-for="(item,index) in getAvailableCategories" :key="index+1" :to="$ml.get('lang_url') + '/apps/' + item.slug + '/'" :class="{content__option_active: $route.params.category == item.slug}") {{ item.name }}
			v-select.content__select(@input="onChange" :components="{OpenIndicator}" :options="getOptions(getAvailableCategories)" :value="active" :clearable="false" :searchable="false" label="name")
		.content__cards
			card-default(
				v-for="(item, index) in getCurrentList(list)"
				:key="index"
				:card="item"
				:award="getAwardByApp(item.id)"
				data-aos="fade-up"
			)
		paginate(
			:class="{'hidden': Math.ceil(this.list.length / this.perPage) < 2}"
			v-model="fakePage"
			:page-count="Math.ceil(this.list.length / this.perPage)"
			:container-class="'pagination'"
			:prev-text="prev"
			:next-text="next"
			:click-handler = "clickCallback"
			:page-class="'pagination-item'"
			:page-link-class="'pagination-link'"
		)


</template>

<script>
import vSelect from 'vue-select';

import arrowPrev from '../../assets/img/pagination-arrow-prev.svg';
import arrowNext from '../../assets/img/pagination-arrow-next.svg';

import Card from '../../blocks/includes/card/card-default-app.vue'
import { mapGetters } from 'vuex';

export default {
	name: 'block-content',
	data: function() {
		return {
			page: parseInt(this.$route.params.category) ? this.$route.params.category-1 : !parseInt(this.$route.params.category) ? (this.$route.params.page-1 || 0) : 0,
			fakePage: Number(parseInt(this.$route.params.category) ? this.$route.params.category : !parseInt(this.$route.params.category) ? (this.$route.params.page || 0) : 0),

			arrowPrev: arrowPrev,
			arrowNext: arrowNext,

			isTablet: window.adaptive.isTablet,
			isMobile: window.adaptive.isMobile,

			filteredData: [],
			perPage: 6,
			OpenIndicator: {
                render: createElement => createElement('span', {class: {'custom': true}}),
			},
			active: {}
 		}
	},
	components: {
		'card-default':Card,
		'v-select': vSelect,
	},
	props: {
		list: Array,
		awards: Array,
		title: String
	},
	computed:{
		paginatedData(){
			let start = this.currPage * this.perPage,
				end = start + this.perPage;

			// if(this.activeType == 'All') {
			// 	return this.cardArray.slice(start, end);
			// } else {
			// 	this.filteredData = this.cardArray.filter(item => item.type == this.activeType);

			// 	if(this.filteredData.length > this.perPage) {
			// 		return this.filteredData.slice(start, end);
			// 	}
			// 	return this.filteredData;
			// }
		},
		prev(){
			return `<img class="arrow-prev" src="${this.arrowPrev}">`;
		},
		next(){
			return `<img class="arrow-next" src="${this.arrowNext}">`;
		},
		...mapGetters([
			'getAvailableCategories',
			'getAwardByApp',
		])
	},
	methods: {
		onChange(val) {
			console.log(val);
			this.$router.push({path: this.$ml.get('lang_url') + '/apps/' + (val.slug != '' ? val.slug+'/' : val.slug)})
		},
		setActiveOption() {
			if (this.getOptions(this.getAvailableCategories ? this.getAvailableCategories : []) == undefined) return {};
			let obj = this.getOptions(this.getAvailableCategories).find(item => {
				if (item.slug == '' && this.$route.params.category == undefined) return true;
				return item.slug == this.$route.params.category;
			});
			this.active = obj;
		},
		getCurrentList(list) {
			let p = this.page;
			return list.slice(p*this.perPage, p*this.perPage+this.perPage)
		},
		clickCallback: function(pageNum) {
			this.currPage = pageNum - 1;
			let cat = parseInt(this.$route.params.category) ? false : this.$route.params.category;
			if (cat) {
				this.$router.push({path: this.$ml.get('lang_url') + '/apps/' + cat + '/' + (pageNum == 1 ? '' : pageNum+'/')});
			} else {
				this.$router.push({path: this.$ml.get('lang_url') + '/apps/' + (pageNum == 1 ? '' : pageNum+'/')});
			}
			
		},
		setActiveType(index){
			// activeType = item;
			this.activeType = this.options[index];
			this.currPage = 0; 
			this.setPage = 1;
		},
		getOptions(arr) {
			let a = [{
				name: this.$ml.get('apps.all'),
				slug: ''
			}];
			arr.forEach(item => {
				a.push({
					name: item.name,
					slug: item.slug
				})
			});
			return a;
		}
	},
	mounted() {
		this.setActiveOption();
	},
	watch: {
		getAvailableCategories() {
			this.setActiveOption();
		},
		list() {
			console.log('list ', this.list);
		},
	}
	// watch: {
	// 	setPage(){
	// 		let optionsBlock = document.getElementsByClassName('content__options')[0];

	// 		window.scrollTo({
	// 			top: optionsBlock.getBoundingClientRect().top + pageYOffset - 20,
	// 			behavior: 'smooth'
	// 		});
	// 	}
	// }
}
</script>

<style lang="scss" scoped>
/deep/ .pagination {
	display: flex !important;	
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;

	&.visible {
		opacity: 1;
		// pointer-events: all;
	}

	&.hidden {
		opacity: 0;
		// pointer-events: none;
	}
}

/deep/ .arrow-next {
	margin-left: 16px;
}

/deep/ .arrow-prev {
	margin-right: 16px;
}

/deep/ .pagination-item {
	font-family: 'SFProDisplay';
	font-weight: 700;
	font-size: 11px;
	line-height: 19px;
	text-align: center;
	letter-spacing: 1px;
	text-transform: uppercase;
	color: #37393E;
	margin: 0 7px;

	&.active {
		width: 25px;
		height: 25px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid rgba(53, 127, 219, 0.17);
		color: #357FDB;
		margin: 0 6px;
	}
}

/deep/ .pagination-link {
	padding-left: 2px;
}

/deep/ .card {
	backface-visibility: hidden;
	transform-origin: 10% 50%;

	margin-right: 23px;
	margin-bottom: 23px;
	width: calc(100% / 3 - 16px);
	display: inline-flex;
	flex-direction: column;
	justify-content: stretch;

	&:nth-child(3n+3) {
		margin-right: 0;
	}

	&-move { transition: all 600ms ease-in-out 50ms }
	&-enter-active { transition: all 300ms ease-out }

	&-leave-active {
		transition: all 200ms ease-in;
		position: absolute;
		z-index: 0;
	}

	&-enter,
	&-leave-to { opacity: 0 }
	&-enter { transform: scale(0.9) }
}

.pagination {
	position: relative;
	display: inline-block;
	white-space: nowrap;
	&__arrow {
		position: absolute;
		top: calc(50% + 2px);
		border-top: 1px solid rgba(#37393E, .24);
		border-left: 1px solid rgba(#37393E, .24);
		width: 6px;
		height: 6px;

		&-left {
			left: -20px;
			transform: translateY(-50%) rotate(-45deg);
		}

		&-right {
			right: -20px;
			transform: translateY(-50%) rotate(135deg);
		}
	}

	&__num {
		position: relative;
		display: inline-block;
		margin-right: 20px;

		font-family: 'SFProDisplay';
		font-weight: 600;
		font-size: 11px;
		line-height: 19px;
		text-align: center;
		letter-spacing: 1px;
		text-transform: uppercase;

		color: #37393E;
		&:nth-last-child(2) {
			margin-right: 0;
		}
		&:before {
			content: "";
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			width: 25px;
			height: 25px;
			border: 2px solid rgba(#357FDB, 0);
			border-radius: 50%;

			transition: border-color .5s ease;
		}
		&_active {
			&:before {
				border: 2px solid rgba(#357FDB, .17);
			}
		}
	}
}

.content {
	display: block;
	width: 100%;
	max-width: calc(1195px + 60px);
	margin: 0 auto;
	padding: 0 30px;
	padding-top: 148px;

	/deep/ .vs--single.vs--open .vs__selected {
        position: static !important;
    }

	&__select {
            display: none;
            max-width: 374px;
            margin: 0 auto 40px auto;
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
                    background-image: url('../../assets/img/v-select-arrow.svg');
                }
            }
        }
	
	&__location {
		margin-bottom: 40px;
	}
	&__pagination {
		display: block;
		margin: 0 auto;
		width: 155px;
		margin-bottom: 100px;
	}
	&__cards {
		margin-bottom: 5px;
	}
	&__title {
		font-family: 'SFProDisplay';
		font-weight: 700;
		font-size: 45px;
		line-height: 59px;
		text-align: center;
		letter-spacing: 1px;
		text-transform: uppercase;

		color: #3D4950;

		margin-bottom: 76px;
	}
	&__options {
		margin-bottom: 28px;
		text-align: center;
	}
	&__option {
		position: relative;
		display: inline-block;
		margin-right: 36px;

		font-family: 'SFProDisplay';
		font-weight: normal;
		font-size: 15px;
		line-height: 19px;

		color: rgba(#3D4950,.45);

		transition: color .5s ease;
		&:last-child {
			margin-right: 0;
		}
		&:before {
			content: "";
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			width: 0;
			height: 1px;
			bottom: -1px;
			background-color: rgba(#357FDB,.3);

			transition: width .5s ease;
		}
		&_active {
			color: #3D4950;
			&:before {
				width: 100%;
			}
		}
	}
	.card {
		// display: inline-block;
		// margin-right: 23px;
		// margin-bottom: 19px;
		// &:nth-child(3n+3) {
		// 	margin-right: 0;
		// }
		&__body {
			padding: 34px 48px 42px 48px;
		}
		&__text {
			margin-bottom: 23px;
		}
	}
}

@media (max-width: 1200px) {
	.content {
		&__cards {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-around;
			align-items: stretch;
			align-content: stretch;
			margin-left: -23px;

			/deep/ .card {
				height: auto;
				min-height: 400px;
				width: calc(100% / 2 - 16px);
				margin-right: 23px;

				&:nth-child(2n+2) {
					margin-right: 0;
				}
				&:nth-child(3n+3) {
					margin-right: 23px;
				}
				&__body {
					padding: 32px 18px 42px 18px;
				}
			}
		}
	}
}

@media (max-width: 960px) {
	.content {
		&__cards {
			margin-left: 0;
			
			/deep/ .card {
				margin-right: 0;

				&:nth-child(3n+3) {
					margin-right: 0 !important;
				}
			}
		}
	}
}

@media (max-width: 640px) {
	.content {
		// max-width: 374px;
		padding-top: 118px;

		&__options {
			display: none;
		}

		&__select {
			display: block;

			/deep/ .vs__selected {
				margin-top: 3px;
			}
		}

		&__title {
			font-size: 36px;
			line-height: 43px;
			margin-bottom: 27px;
		}

		&__cards {
			margin-bottom: 2px;

			/deep/ .card {
				width: 100%;
				margin-bottom: 19px;

				&__header {
					height: 195px;
				}
				&__body {
					padding: 34px 48px 35px 48px;
				}
				&__text {
					max-width: none;
					margin-bottom: 31px;
				}
			}
		}

		&__pagination {
			margin-bottom: 49px;
		}
	}
}
</style>