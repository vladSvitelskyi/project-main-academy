(function(angular) {
	angular.module('app')
	.constant('config', {
		base: 'https://api.mlab.com',
		prefix: '/api/1/databases/db_vlad_svitelskyi/collections',
		users: '/users',
		selectsData: '/selectsData',
		apiKey: '?apiKey=fy47MSM5Wn_pJcQAbdqNsDVEFd_svQZe'
	});
})(angular);