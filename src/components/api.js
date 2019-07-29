import axios from 'axios';

let endpoint = 'http://screenlife.ribs.pro/screenlife/backend/wp-json/wp/v2';
let lang = window.config.activeLang;

export default {
    feeds: {
        get() {
            return axios.get(endpoint + '/feed/?lang=' + lang);
        }
    },
    apps: {
        get() {
            return axios.get(endpoint + '/apps/?lang=' + lang);
        }
    },
    awards: {
        get() {
            return axios.get(endpoint + '/awards/?lang=' + lang);
        }
    },
    articles: {
        get() {
            return axios.get(endpoint + '/award_articles/?lang=' + lang);
        }
    },
    categories: {
        get() {
            return axios.get(endpoint + '/apps_category/?lang=' + lang);
        }
    },
    feedCategories: {
        get() {
            return axios.get(endpoint + '/feed_category/?lang=' + lang);
        }
    },
    page: {
        get(slug) {
            return axios.get(endpoint + '/vpage/?slug=' + slug + '&lang=' + lang);
        }
    },
    awardsPage: {
        get() {
            return axios.get(endpoint + '/vpage/?slug=awards&lang=' + lang);
        }
    },
    sendFormContact(fd, callback) {
        axios.post('http://screenlife.ribs.pro/screenlife/backend/wp-json/contact-form-7/v1/contact-forms/298/feedback', fd).then(resp => {
            callback(resp);
        });
    },
    sendFormExpert(fd, callback) {
        axios.post('http://screenlife.ribs.pro/screenlife/backend/wp-json/contact-form-7/v1/contact-forms/299/feedback', fd).then(resp => {
            callback(resp);
        });
    },
    sendFormSubsribe(fd, callback) {
        axios.post('', fd).then(resp => {
            callback(resp);
        });
    }
};