<template lang="pug">
    .block(data-aos="fade-up")
        .block__img
            img(:src="url")
</template>

<script>
export default {
    name: 'BlockImg',
    props: {
        url: String
    },
    data: function(){
        return {}
    }
}
</script>

<style lang="scss" scoped>
    .block {
        max-width: 676px;
        margin-bottom: 50px;

        &__img {
            // position: relative;
            // width: 100%;
            // height: auto;
            // padding-bottom: 63.5%;

            img {
                // position: absolute;
                // width: 100%;
                // height: 100%;
                width: 100%;
                height: auto;
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

            &__img {
                // padding-bottom: 67%;
            }
        }
    }
</style>


