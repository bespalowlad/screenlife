import Vue from 'vue'
import Vuex from 'vuex'
import $api from '@/components/api.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        feeds: [],
        apps: [],
        categories: [],
        feedCategories: [],
        awards: [],
        articles: [],
        main: {
            isEmpty: true
        },
        seomain: [],
        about: {
            isEmpty: true
        },
        seoabout: [],
        terms: {
            isEmpty: true
        },
        seoterms: [],
        privacy: {
            isEmpty: true
        },
        seoprivacy: [],
        awardsPage: {
            isEmpty: true
        },
        seoAwardsPage: [],
        apps_page: {
            isEmpty: true
        },
        seoapps_page: [],
        feedsLoaded: false,
        appsLoaded: false,
        categoriesLoaded: false,
        feedCategoriesLoaded: false,
        awardsLoaded: false,
        articlesLoaded: false,
    },
    mutations: {
        SET_FEEDS: (state, payload) => {
            state[payload.name] = payload.data;
            state.feedsLoaded = true;
        },
        SET_APPS: (state, payload) => {
            state[payload.name] = payload.data;
            state.appsLoaded = true;
        },
        SET_ARTICLES: (state, payload) => {
            state[payload.name] = payload.data;
            state.articlesLoaded = true;
        },
        SET_AWARDS: (state, payload) => {
            state[payload.name] = payload.data;
            state.awardsLoaded = true;
        },
        SET_CATEGORIES: (state, payload) => {
            state[payload.name] = payload.data;
            state.categoriesLoaded = true;
        },
        SET_FEED_CATEGORIES: (state, payload) => {
            state[payload.name] = payload.data;
            state.feedCategoriesLoaded = true;
        },
        SET_PAGE: (state, payload) => {
            state[payload.name] = payload.data;
        },
        SET_AWARDSPAGE: (state, payload) => {
            state[payload.name] = payload.data;
        }
    },
    getters: {
        getArticleBySlug: state => slug => {
            return state.articles.find(item => item.slug == slug) || {};
        },
        getAppsByAward: state => id => {
            return state.apps.filter(item => {
                return item.acf.info.awards && item.acf.info.awards.ID == id;
            });
        },
        getArticlesByAward: state => id => {
            return state.articles.filter(item => item.acf.info.award == id) || [];
        },
        getAppByArticle: state => id => {
            let obj = state.articles.find(item =>item.id == id);
            if (obj) {
                let id2 = Number(obj.acf.info.apps_1[0]);
                return state.apps.find(item => item.id == id2);
            }
            return {};
        },
        // getAvailableAwards: state => {
        //     return state.awards.filter(item => item.acf.info)
        //     // let ids = [];
        //     // state.awards.forEach(item => {
        //     //     if (item.acf.info.awards && ids.indexOf(item.acf.info.awards.ID) == -1) {
        //     //         ids.push(item.acf.info.awards.ID);
        //     //     }
        //     // });
        //     // return state.awards.filter(item => {
        //     //     return ids.indexOf(item.id) != -1;
        //     // });
        // },
        getRelativeFeeds: state => (category, feedId) => {
            // if (!category) return state.apps;
            // let ids = [];
            // let arr = state.apps.filter(item => item.apps_category[0] == category);
            // arr.forEach(item => {
            //     ids.push(item.id);
            // });
            // return state.feeds.filter(item => item.acf.settings.feed_card_type == '4' && ids.indexOf(Number(item.acf.content.apps_1[0].ID)) != -1).slice(0, 3);
            // console.log(state.feeds.filter(item => item.acf.settings.feed_card_type == '4' && item.feed_category[0] == category).slice(0, 3));
            return state.feeds.filter(item => (item.acf.settings.feed_card_type == '4' || item.acf.settings.feed_card_type == '3' || item.acf.settings.feed_card_type == '2') && item.feed_category[0] == category && item.id != feedId).slice(0, 3);
        },
        getAwardByApp: state => id => {
            return state.awards.find(item => item.acf.winners && item.acf.winners.indexOf(id) != -1);
        },
        getAwardById: state => id => {
            return state.awards.find(item => item.id == id);
        },
        getFeedBySlug: state => slug => {
            return state.feeds.find(item => item.slug == slug) || {};
        },
        getAppById: state => id => {
            return state.apps.find(item => item.id == id) || {};
        },
        getAppBySlug: state => slug => {
            return state.apps.find(item => item.slug == slug) || {};
        },
        getCategoryById: state => id => {
            return state.categories.find(item => item.id == id) || {};
        },
        getLastWinner: state => {
            return state.apps.filter(item => item.acf.info.winner).sort((a, b) => a.date - b.date)[0];
        },
        getArticleByApp: state => id => {
            return state.articles.find(item => item.acf.info.apps_1[0] == id);
        },
        getAvailableCategories: state => {
            let arr = [];
            let ids = [];
            state.apps.forEach(item => {
                if (ids.indexOf(item.apps_category[0]) == -1) {
                    ids.push(item.apps_category[0]);
                }
            });

            ids.forEach(item => {
                let obj = state.categories.find(c => c.id == item);
                if (obj) arr.push(obj);
            });

            return arr;
        },
        getCategoryIdBySlug: state => slug => {
            return state.categories.find(item => item.slug == slug) || {};
        },
        getAppsByCategory: state => id => {
            if (!id) return state.apps;
            return state.apps.filter(item => item.apps_category[0] == id);
        },
        getFeedCategoryById: state => id => {
            return state.feedCategories.find(item => item.id == id) || {};
        }
    },
	actions: {
        GET_FEEDS: async (context) => {
            let {data} = await $api.feeds.get();
            context.commit('SET_FEEDS', {name: 'feeds', data: data});
        },
        GET_APPS: async (context) => {
            let {data} = await $api.apps.get();
            context.commit('SET_APPS', {name: 'apps', data: data});
        },
        GET_AWARDS: async (context) => {
            let {data} = await $api.awards.get();
            context.commit('SET_AWARDS', {name: 'awards', data: data});
        },
        GET_CATEGORIES: async (context) => {
            let {data} = await $api.categories.get();
            context.commit('SET_CATEGORIES', {name: 'categories', data: data});
        },
        GET_FEED_CATEGORIES: async (context) => {
            let {data} = await $api.feedCategories.get();
            context.commit('SET_FEED_CATEGORIES', {name: 'feedCategories', data: data});
        },
        GET_PAGE: async (context, slug) => {
            let {data} = await $api.page.get(slug);
            if (slug == 'apps_page') {
                context.commit('SET_PAGE', {name: slug, data: data[0]});
                context.commit('SET_PAGE', {name: 'seo' + slug, data: data[0].yoast_meta});
            } else {
                context.commit('SET_PAGE', {name: slug, data: data[0].acf});
                context.commit('SET_PAGE', {name: 'seo' + slug, data: data[0].yoast_meta});
            }
        },
        GET_AWARDSPAGE: async (context) => {
            let {data} = await $api.awardsPage.get();
            context.commit('SET_AWARDSPAGE', {name: 'awardsPage', data: data[0].acf});
            context.commit('SET_AWARDSPAGE', {name: 'seoAwardsPage', data: data[0].yoast_meta});
        },
        GET_ARTICLES: async (context) => {
            let {data} = await $api.articles.get();
            context.commit('SET_ARTICLES', {name: 'articles', data: data});
        }
    }
});