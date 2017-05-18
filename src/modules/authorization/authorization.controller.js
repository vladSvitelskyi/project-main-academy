angular.module('authorizationModule')
    .controller('authorizationController', ['$scope', '$rootScope', '$state', 'authorizationService', 'localStorageService', function($scope, $rootScope, $state, authorizationService, localStorageService) {

        $scope.loginModel = {};
        $scope.registrationModel = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        };

        // sign In
        $scope.login = function() {
            authorizationService.login($scope.loginModel)
                .then(function(user) {
                    if (user) {
                        console.log("Success! You Sign In!")
                        $rootScope.loggedUser = user;
                        localStorageService.set('logged', user);
                        angular.element('#signInModal').modal('close');
                        $scope.loginModel = {};
                        if (user.role == 'admin') {
                            $state.go('admin');
                            return;
                        }
                        $state.go('profile');
                    } else {
                        $scope.warning = 'Incorrect email or password';
                        setTimeout(function() {
                            $scope.$apply(function() {
                                $scope.warning = '';
                            });
                        }, 3000);
                        console.log("Error! You dont Sign In");
                    }
                })
        };

        // sign Up
        $scope.registration = function() {
            authorizationService.registration($scope.registrationModel)
                .then(function(user) {
                    $rootScope.registeredUser = user;
                    angular.element('#signInModal').modal('close');
                    $scope.registrationModel = {};
                });
        };
    }])
