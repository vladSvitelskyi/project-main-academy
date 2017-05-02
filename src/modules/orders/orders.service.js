angular.module('ordersModule')
    .factory('ordersService', ['$http', 'config', function($http, config) {
        console.log("OrdersService is working!");
        var publicMethods = {
            getDataForSelects: function(type) {
                return $http.get(config.base + config.prefix + config.orders + config.apiKey)
                    .then(function(response) {
                        console.log("Get data for selects!", response.data);                        
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            },
            postOrder: function(order) {
                return $http.post(config.base + config.prefix + config.orders + config.apiKey, order)
                    .then(function(response) {
                        console.log("Post this order!", response);
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            }
        };

        return publicMethods;
    }]);
