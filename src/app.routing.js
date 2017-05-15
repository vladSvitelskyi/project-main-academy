// All Angular routes
angular.module('app')
    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$qProvider', 'localStorageServiceProvider', function($stateProvider, $locationProvider, $urlRouterProvider, $qProvider, localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('localPrefix')
            .setStorageType('localStorage')
            .setNotify(true, true);
        $qProvider.errorOnUnhandledRejections(false);
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
                controller: 'orderItemController',
                resolve: {
                    order: function(ordersService) {
                        console.log("Order resolve!");
                        return ordersService.getDataForSelects();
                    }
                }
            })
            .state('gallery', {
                url: '/gallery',
                templateUrl: './views/gallery/gallery.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: './views/contact/contact.html',
                controller: 'contactController'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: './views/admin/admin.html',
                controller: 'adminController',
                resolve: {
                    check: function($rootScope, $location, $state, $q) {
                        var defered = $q.defer();
                        if (!$rootScope.loggedUser || $rootScope.loggedUser.role !== 'admin') {
                            defered.reject('not authorized');
                        } else {
                            defered.resolve();
                        }
                        return defered.promise;
                    }
                }
            })
    }]);
