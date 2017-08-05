export default {
	install: function(Vue, options) {
		Vue.component('fullpage', require('./fullpage.vue'));
		Vue.component('fullpagefooter', require('./fullpagefooter.vue'));
	}
};
