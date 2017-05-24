// All Angular modules
angular.module('app', [
        'ui.router',
        'LocalStorageModule',
        'ui.materialize',
        'ngMap',
        'toastr',
        'authorizationModule',
        'ordersModule',
        'contactModule',
        'profileModule',
        'adminModule'
    ])
    .controller('mainController', ['$scope', '$rootScope', '$state', 'localStorageService', function($scope, $rootScope, $state, localStorageService) {
        $rootScope.$on('$stateChangeSuccess', function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            if (error === 'not authorized') {
                return $state.go('secret');
            }
        });
        $scope.signOut = function() {
            delete $rootScope.loggedUser;
            localStorageService.remove('logged');
            return $state.go('home');
        };
    }])
    .run(function($rootScope, localStorageService) {
        $rootScope.loggedUser = localStorageService.get('logged');
    })
