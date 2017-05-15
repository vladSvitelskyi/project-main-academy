(function(angular) {
	angular.module('app')
	.constant('config', {
		base: 'https://api.mlab.com',
		prefix: '/api/1/databases/db_vlad_svitelskyi/collections',
		users: '/users',
		usersParams: function(email, password) {
			return '?q={"email": \''+email+'\', "password": \''+password+'\'}';
		},
		selectsData: '/selectsData',
		orders: '/orders',
		apiKey: '?apiKey=fy47MSM5Wn_pJcQAbdqNsDVEFd_svQZe',
		apiKeyWithParams: '&apiKey=fy47MSM5Wn_pJcQAbdqNsDVEFd_svQZe'
	});
})(angular);