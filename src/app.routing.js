// All Angular routes
angular.module('app')
    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider',  function($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './home.html',
            })
            .state('order', {
                url: '/order',
                templateUrl: './views/orders/order-item/order-item.html',
                controller: 'orderItemController'
                // resolve: {
                //     order: function(ordersService){
                //         console.log("Order resolve!");
                //         return ordersService.getDataForSelects();
                //     }
                // }                
            })
            .state('gallery', {
                url: '/gallery',
                templateUrl: './views/gallery/gallery.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: './views/contact/contact.html',
                controller: 'contactController'
            });
    }]);
