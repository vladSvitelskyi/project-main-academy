// All Angular routes
(function(angular) {
    angular.module('app')
    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise("/");
        	$stateProvider
        	.state('home', {
        		url: '/',
        		templateUrl: './home.html',
        	})
        	.state('order', {
        		url: '/orders',
        		templateUrl: './views/orders/order-item/order-item.html',
        		controller: 'orderItemController'
        	})
            .state('gallery', {
                url: '/gallery',
                templateUrl: './views/gallery/gallery.html',
            });           
    }]);
})(angular);