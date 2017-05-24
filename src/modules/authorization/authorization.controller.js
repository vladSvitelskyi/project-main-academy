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
                        $scope.message = 'Incorrect email or password';
                        setTimeout(function() {
                            $scope.$apply(function() {
                                $scope.message = '';
                            });
                        }, 3000);
                    }
                })
        };

        // sign Up
        $scope.registration = function() {
            if ($scope.registrationModel.firstName == '' || $scope.registrationModel.lastName == '' || $scope.registrationModel.email == '' || $scope.registrationModel.password == '') {
                $scope.message = 'Some fields are empty';
                setTimeout(function() {
                    $scope.$apply(function() {
                        $scope.message = '';
                    });
                }, 3000);
            } else {
                authorizationService.registration($scope.registrationModel)
                    .then(function(user) {
                        $rootScope.loggedUser = user;
                        localStorageService.set('logged', user);
                        angular.element('#signUpModal').modal('close');
                        $scope.registrationModel = {};
                        $state.go('profile');
                        // angular.element('#signInModal').modal('open');
                    });
            }
        }
    }])
