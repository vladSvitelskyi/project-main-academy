angular.module('authorizationModule')
    .factory('authorizationService', ['$http', 'config', function($http, config) {
        var publicMethods = {
            login: function(data) {
                return $http.get(config.base + config.prefix + config.users + config.usersParams(data.email, data.password) + config.apiKeyWithParams)
                    .then(function(response) {
                        return response.data[0];
                    })
                    .catch(function(err) {
                        console.log(err);
                    })
            },
            registration: function(data) {
                return $http.post(config.base + config.prefix + config.users + config.apiKey, data)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log(err);
                    })
            }
        };
        return publicMethods;
    }]);
