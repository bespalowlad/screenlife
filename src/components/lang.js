import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'
 
Vue.use(MLInstaller);
 
export default new MLCreate({
  initial: window.config.activeLang,
  save: process.env.NODE_ENV === 'production',
  languages: [
	new MLanguage('ru').create({
		lang: 'ru',
		lang_url: '/ru',
		title: 'RU',
		btns: {
			download: 'Скачать',
			more_details: 'Больше',
			open_more: 'Смотреть',
			copied: 'Скопировано!',
			send: 'Отправить'
		},
		menu: {
			awards: 'Награды',
			apps: 'Приложения',
			about: 'О нас',
			privacy: 'Политика конфиденциальности',
			terms: 'Условия использования',
			developed: 'Разработано'
		},
		apps: {
			see_all: 'Смотреть все',
			specifications: 'Спецификации',
			all: 'Все'
		},
		feeds: {
			similar_articles: 'Похожие статьи'
		},
		awards: {
			nomination: 'Номинация',
			award_date: 'Дата',
			jury: 'Жюри'
		},
		share: {
			share: 'Поделиться:'
		},
		forms: {
			subscribe: 'Подписаться',
			thanks: 'Спасибо!',
			thanks_text: 'Ваш запрос отправлен успешно!',
			thanks_ok: 'ОК',
			request_title: 'Мы ответим на ваши вопросы!',
			name: 'Имя',
			message: 'Ваше сообщение',
			email: 'E-mail',
			become_expert: 'Стать экспертом!',
			expert_title: 'Хочешь стать экспертом? Заполни форму!',
			error: 'Введите '
		}

	}),
	new MLanguage('en').create({
		lang: 'en',
		lang_url: '',
		title: 'EN',
		btns: {
			download: 'Download',
			open_more: 'Open more',
			more_details: 'More details',
			copied: 'Copied!',
			send: 'Send'
		},
		menu: {
			awards: 'Awards',
			apps: 'Applications',
			about: 'About',
			privacy: 'Privacy Policy',
			terms: 'Terms of Use',
			developed: 'Developed by'
		},
		apps: {
			see_all: 'See all',
			specifications: 'Specifications',
			all: 'All'
		},
		feeds: {
			similar_articles: 'Similar articles'
		},
		awards: {
			nomination: 'Nomination',
			award_date: 'Award date',
			jury: 'Jury'
		},
		share: {
			share: 'Share:'
		},
		forms: {
			subscribe: 'Subscribe to news',
			thanks: 'Thank you!',
			thanks_text: 'Your application has been sent successfully. The manager will contact you shortly.',
			thanks_ok: 'OK',
			request_title: 'We will answer your questions!',
			name: 'Name',
			message: 'Your message',
			email: 'E-mail',
			become_expert: 'Become an expert!',
			expert_title: 'Want to become an expert? Fill out the application form',
			error: 'Please enter your '
		}
	})
  ]
})