<template lang="pug">
    .block(data-aos="fade-up")
        .block__table-outer.shadow
            .block__table(@scroll="tableScroll")
                table.table#table
                    tr
                        th(v-for="(th, i) in table.header" :key="i" v-html="th.c" :class="['col-' + (i+1)]")
                        //- th.col-1 Name
                        //- th.col-2 Company
                        //- th.col-3 Rating
                        //- th.col-4 Company
                        //- th.col-5 Price
                        //- th.col-6 Country
                    tr(v-for="(tr, i) in table.body")
                        td(v-for="(td, idx) in tr" :key="idx" v-html="td.c.includes('*check-') ? getCheck(td.c) : td.c.includes('*rating-') ? getRating(td.c) : td.c" :class="['col-' + (idx+1)]")
                        //- td.col-2 Screenlife
                        //- td.col-3
                        //-     img(v-for="item in 5" src="@/assets/img/star-icon.svg")
                        //- td.col-4
                        //-     img(src="@/assets/img/check.svg")
                        //- td.col-5 25$
                        //- td.col-6 USA
                    //- tr
                    //-     td.col-1 Movani Screen Capture Studio
                    //-     td.col-2 Screenlife
                    //-     td.col-3
                    //-         img(v-for="item in 5" src="@/assets/img/star-icon.svg")
                    //-     td.col-4
                    //-         img(src="@/assets/img/check.svg")
                    //-     td.col-5 25$
                    //-     //- td.col-6 USA
                    //- tr
                    //-     td.col-1 Gecata by Movavi
                    //-     td.col-2 Screenlife
                    //-     td.col-3
                    //-         img(v-for="item in 5" src="@/assets/img/star-icon.svg")
                    //-     td.col-4
                    //-         img(src="@/assets/img/check.svg")
                    //-     td.col-5 25$
                    //-     //- td.col-6 USA
                    //- tr
                    //-     td.col-1 Movani Screen Capture Studio
                    //-     td.col-2 Screenlife
                    //-     td.col-3
                    //-         img(v-for="item in 5" src="@/assets/img/star-icon.svg")
                    //-     td.col-4
                    //-         img(src="@/assets/img/check.svg")
                    //-     td.col-5 25$
                    //-     //- td.col-6 USA
                    //- tr
                    //-     td.col-1 Gecata by Movavi
                    //-     td.col-2 Screenlife
                    //-     td.col-3
                    //-         img(v-for="item in 5" src="@/assets/img/star-icon.svg")
                    //-     td.col-4
                    //-         img(src="@/assets/img/check.svg")
                    //-     td.col-5 25$
                        //- td.col-6 USA
</template>

<script>


Number.isInteger = Number.isInteger || function(value) {
  return typeof value === 'number'
         && Number.isFinite(value)
         && !(value % 1);
};



    export default {
        name: 'BlockTable',
        props: {
            table: Object
        },
        data: function(){
            return {}
        },
        methods: {
            getRating(str) {
                let count = Number(str.split('-')[1].split('*')[0]);
                let html = '';
                if (Number.isInteger(count)) {
                    for (let i = 0; i < count; i++) {
                        html += '<img src="'+ require('@/assets/img/star_full.svg') +'">'
                    }
                    for (let i = 0; i < 5-count; i++) {
                        html += '<img src="'+ require('@/assets/img/star_empty.svg') +'">'
                    }
                } else {
                    for (let i = 0; i < count-.5; i++) {
                        html += '<img src="'+ require('@/assets/img/star_full.svg') +'">'
                    }
                    html += '<img src="'+ require('@/assets/img/star_half.svg') +'">'
                    for (let i = 0; i < 5-count-1; i++) {
                        html += '<img src="'+ require('@/assets/img/star_empty.svg') +'">'
                    }
                }
                
                return html;
            },
            getCheck(str) {
                return str.includes('-on*') ? '<img src="'+ require('@/assets/img/check.svg') +'">' : '<img src="'+ require('@/assets/img/check_off.svg') +'">';
            },
            tableScroll(){
                let tableOuter = document.getElementsByClassName('block__table-outer')[0],
                    table = document.getElementsByClassName('block__table')[0],
                    clientWidth = table.clientWidth,
                    scrollWidth = table.scrollWidth,
                    scrollLeft = table.scrollLeft;
                
                if(scrollWidth - clientWidth === scrollLeft) {
                    tableOuter.classList.remove('shadow');
                } else {
                    tableOuter.classList.add('shadow');
                }
                
            }
        },
    }
</script>

<style lang="scss" scoped>
    .block {
        max-width: 676px;
        margin-bottom: 50px;

        &__table-outer {
            position: relative;

            &:before {
                content: '';
                position: absolute;
                z-index: 2;
                top: 0;
                right: 0;
                height: 100%;
                width: 50px;
                background: linear-gradient(to right, transparent 0%, #F8FAFF 100%);
                background: -webkit-gradient(linear, right top, right bottom, color-stop(0%,rgba(255,255,255,0)), color-stop(100%,#F8FAFF)); /* Safari4+ */
                background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%,#F8FAFF 100%); /* Safari5.1+ */
                pointer-events: none;
                transition: all .5s ease;
                opacity: 0;
            }
            
            &.shadow {
                position: relative;
                z-index: 1;

                &:before {
                   opacity: 1;
                }
            }
        }

        &__table {
            overflow-x: scroll;
            width: 100%;
            border: 1px solid #E9EEF7;
            box-sizing: border-box;
            border-radius: 6px;
            margin-top: 55px;
            position: relative;
            text-align: center;

            &::-webkit-scrollbar{
                height:3px;
                position: relative;
                z-index: 3;
            }

            &::-webkit-scrollbar-track{
                border-radius: 5px;
                background: #EBF2FD;
                position: relative;
                z-index: 3;
            }

            &::-webkit-scrollbar-thumb{
                background: rgba(53, 127, 219, 0.42);
                border-radius: 5px;
                position: relative;
                z-index: 3;
            }
        }
    }

    .table {
        border-collapse: collapse;

        th {
            font-family: 'SFProDisplay';
font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            color: #357FDB;
            min-width: 153px;
            text-align: center;
            padding: 0 10px;
            
            // &:first-child {
            //     padding-left: 50px;
            // }
            

            // &:first-child {
            //     min-width: 184px;
            //     text-align: left;
            //     padding-left: 34px;
            // }
        }

        .col-1 {
            min-width: 184px;
            text-align: left;
            padding-left: 34px;
        }

        // .col-4 {
        //     min-width: 120px;
        //     text-align: center;
        //     padding-left: 0;
        // }

        // .col-5 {
        //     min-width: 102px;
        //     padding-left: 0;
        //     text-align: center;
        // }

        tr {
            height: 60px;

            &:first-child {
                height: 58px;
                background: linear-gradient(116.65deg, #F2F6FF 10.55%, #E4EDFD 107.49%), rgb(74, 117, 216) !important;
            }

            &:nth-child(odd) {
                td:first-child {
                    background: #F5F8FF;
                }
            }

            &:nth-child(odd) {
                background: #F5F8FF;
            }

            td:first-child {
                position: sticky;
                z-index: 2;
                left: 0;
                top: auto;
                background: #fff;
                opacity: 1;
                padding-left: 34px;
                // padding: 0 30px 0 34px;
                // padding: 0 10px;
                // text-align: left;

                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 100%;
                    width: 1px;
                    background: #E9EEF7;
                }
            }

            th:first-child {
                position: sticky;
                z-index: 2;
                left: 0;
                top: auto;
                opacity: 1;
                background:#F2F6FF;

                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 100%;
                    width: 1px;
                    background: #E9EEF7;
                }
            }
        }

        td {
            padding: 19px 0;
            text-align: center;
            font-family: 'Roboto';
font-weight: normal;
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 22px;
            color: #35343E;
            opacity: 0.7;
            min-width: 153px;

            &.col-1 {
                // min-width: 184px;
                font-family: 'SFProDisplay';
font-weight: normal;
                font-size: 14px;
                line-height: 19px;
                color: #37393E;
                opacity: 0.75;
            }

            &.col-3 {
                & > * {
                    &:not(:last-child) {
                        margin-right: 7px;
                    }
                }
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

            &__table-outer {
                width: 106%;
            }

            &__table {
                margin-top: 40px;
            }
        }

        .table {
            th.col-1 {
                min-width: 170px;
            }

            th.col-2 {
                padding-left: 43px;
            }

            th.col-3 {
                padding-left: 30px;
            }

            td.col-1 {
                min-width: 170px;
                padding: 0 30px 0 32px !important;
            }

            td.col-3 {
                text-align: left;
                padding-left: 9px;

                & > * {
                    &:not(:last-child) {
                        margin-right: 6px;
                    }
                }
            }
        }
    }
</style>


