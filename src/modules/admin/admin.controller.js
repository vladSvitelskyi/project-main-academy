angular.module('adminModule')
    .controller('adminController', ['$scope', 'adminService', '$state', '$timeout', function($scope, adminService, $state, $timeout) {
        $scope.orderModel = [];

        $scope.deleteOrder = function(orderId) {
            adminService.deleteOrder(orderId)
            .then(function(){
            	for (var i = 0; i < $scope.orderModel.length; i++) {
            		if ($scope.orderModel[i]._id.$oid == orderId) {
            			$scope.orderModel.splice(i, 1);
            		}
            	}
            })
        };
        $scope.changeStatus = function(order) {
        	order.status ? order.status = false : order.status = true;
        	adminService.updateOrder(order);
        };

        getOrders();

        function getOrders() {
            adminService.getOrders()
                .then(function(data) {
                    $scope.orderModel = data;
                });
        }


    }])
