import Vue from 'vue';
import VueRouter from 'vue-router';
import {store} from './components/store.js';
import {VueMasonryPlugin} from 'vue-masonry';
import VueScrollTo from 'vue-scrollto';
import VueTextareaAutosize from 'vue-textarea-autosize';
import Paginate from 'vuejs-paginate';
import VueStickyKit from 'vue-stickykit';
import Meta from 'vue-meta';

//Pages
import Main from './pages/main.vue';
import SelectionOne from './pages/selection-one.vue';
import Application from './pages/application.vue';
import Winners from './pages/winners.vue';
import About from './pages/about.vue';
import OneWinner from './pages/one-winner.vue';
import Categories from './pages/categories.vue';
import PrivacyPolicy from './pages/privacyPolicy.vue';
import Privacy from './pages/privacy.vue';

// Vue.use($store);
Vue.use(VueRouter);
Vue.use(VueMasonryPlugin);
Vue.use(VueTextareaAutosize);
Vue.component('paginate', Paginate);
Vue.use(VueStickyKit);
Vue.use(Meta);
import './components/lang.js';

var browserDetecter = function() {

    var browser = 'unknown';

    var is_chrome = !!window.chrome && !is_opera;
    if (is_chrome) {
        browser = 'chrome';
    }
    var is_explorer= typeof document !== 'undefined' && !!document.documentMode;
    if (is_explorer) {
        browser = 'ie';
    }
    var is_firefox = typeof window.InstallTrigger !== 'undefined';
    if (is_firefox) {
        browser = 'firefox';
    }
    var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (is_safari) {
        browser = 'safari';
    }
    var is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    if (is_opera) {
        browser = 'is_opera';
    }

    if (window.navigator.userAgent.indexOf("Edge") > -1) {
        browser = 'edge';
    }

    window.browser = browser;
    document.body.classList.add('browser-' + browser);
};
browserDetecter();


let langCode = '';
if (window.config.activeLang != window.config.langDefault) {
	langCode = '/:lang'
}

const routesList = [
    {path: langCode+'/', name: 'main', component: Main },
    {path: langCode+'/feed/:slug/', name: 'selection-one', component: SelectionOne},
    {path: langCode+'/apps/', name: 'Categories', component: Categories},
    {path: langCode+'/apps/:category/', name: 'categories', component: Categories},
    {path: langCode+'/apps/:category/:page/', name: 'categoriesPage', component: Categories},
    {path: langCode+'/app/:slug/', name: 'application', component: Application},
    {path: langCode+'/awards/', name: 'winners', component: Winners},
    {path: langCode+'/awards/:slug/', name: 'one-winner', component: OneWinner},
    {path: langCode+'/about/', name: 'about', component: About},
    {path: langCode+'/terms-of-use/', name: 'terms', component: PrivacyPolicy},
    {path: langCode+'/privacy-policy/', name: 'privacyPolicy', component: Privacy},
];

// ADAPTIVE DETECTOR

window.adaptive = {
    isMobile:true,
    isTablet:false
};
var adaptiveFunc = function() {
    if(document.documentElement.clientWidth < 960) {
        if(document.documentElement.clientWidth < 640) {
            window.adaptive.isMobile = true;
        } else {
            window.adaptive.isTablet = true;
        }
    } else {
        window.adaptive.isMobile = false;
        window.adaptive.isTablet = false;
    }
}
window.addEventListener('resize', function(){
    adaptiveFunc();
});




const router = new VueRouter({
	mode: 'history',
    routes: routesList,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            VueScrollTo.scrollTo(to.hash, 700);
            return { selector: to.hash }
        } 
        else {
            return { x: 0, y: 0 }
        }
    },
});

new Vue({
	el: "#app",
	router: router,
    store: store,
});