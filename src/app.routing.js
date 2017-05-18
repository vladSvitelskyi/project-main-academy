// All Angular routes
angular.module('app')
    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$qProvider', 'localStorageServiceProvider', 'toastrConfig', function($stateProvider, $locationProvider, $urlRouterProvider, $qProvider, localStorageServiceProvider, toastrConfig) {
        angular.extend(toastrConfig, {
            timeOut: 3000,
        });
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
            .state('profile', {
                url: '/profile',
                templateUrl: './views/profile/profile.html',
                controller: 'profileController'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: './views/admin/admin.html',
                controller: 'adminController',
                resolve: {
                    order: function(adminService) {
                        return adminService.getOrders();
                    },
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
            .state('secret', {
                url: '/secret',
                templateUrl: './views/secret/secret.html'
            });
    }]);
