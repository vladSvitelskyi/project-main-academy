(function(angular) {
	angular.module('app')
	.constant('config', {
		base: 'https://api.mlab.com',
		prefix: '/api/1/databases/db_vlad_svitelskyi/collections',
		users: '/users',
		orders: '/orders',
		apiKey: '?apiKey=fy47MSM5Wn_pJcQAbdqNsDVEFd_svQZe'
	});
})(angular);