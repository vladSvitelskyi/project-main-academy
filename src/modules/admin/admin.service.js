angular.module('adminModule')
.factory('adminService', ['$http', 'config', function($http, config){
        var publicMethods = {
            getOrders: function(type) {
                return $http.get(config.base + config.prefix + config.orders + config.apiKey)
                    .then(function(response) {                      
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            },
            updateOrder: function(item) {
                return $http.put(config.base + config.prefix + config.orders + '/' + item._id.$oid + config.apiKey, item)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log(err);
                    })
            },            
            deleteOrder: function(orderId) {
                return $http.delete(config.base + config.prefix + config.orders + '/' + orderId + config.apiKey)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log(err);
                    })
            }
        };
        return publicMethods;
}])
