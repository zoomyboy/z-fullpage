var heading = require('z-ui/heading/appheading.vue');

module.exports = [
	{
		path: '/login',
		name: 'login.index',
		props: {
			heading: {
				title: 'Login',
				line: true,
				small: true
			}
		},
		components: {
			default: require('...Component...'),
			heading
		}
	}
];
