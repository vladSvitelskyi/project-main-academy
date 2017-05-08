angular.module('ordersModule')
    .factory('ordersService', ['$http', 'config', function($http, config) {
        var publicMethods = {
            getDataForSelects: function(type) {
                return $http.get(config.base + config.prefix + config.selectsData + config.apiKey)
                    .then(function(response) {                        
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            },
            sendOrder: function(order) {
                return $http.post(config.base + config.prefix + config.orders + config.apiKey, order)
                    .then(function(response) {
                        console.log("Send order!", response);
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            }
        };
        return publicMethods;
    }]);
