angular.module('ordersModule')
.controller('orderItemController', ['$scope', 'ordersService', 'order', function($scope, ordersService, order){
	// VARIABLES
	$scope.orderModel = {};
	$scope.selectsDataArr = order;
	$scope.selectsServicesArr = [
		{
			"service": "Set spoiler"
		},
		{	
			"service": "Painting"
		}
	];

	$scope.messageForToast = 'toast';

	// FUNCTIONS
	$scope.getDataForSelects = function(type){
		ordersService.getDataForSelects(type)
		.then(function(data){
			$scope.selectsDataArr = data;
		});
	};	
	
	// $scope.getDataForSelects();
	console.log(order);

	$scope.sendData = function() {
		console.log("Order model: ", $scope.orderModel);
		// validation
		var flag = 6;
		for(key in $scope.orderModel) {
			if ($scope.orderModel[key] !== 'string') {
				flag --;
				console.log("flag = ", flag);
			}
		}
		if (angular.equals({}, $scope.orderModel)) {
			alert("Please, fill all the fiels.");
			$scope.messageForToast = 'Please, fill all the fiels.';
		} else {
			if (flag != 0) {
				alert("Some fiels are empty!");
				$scope.messageForToast = 'Some fiels are empty.';				
			} else {
				console.log($scope.orderModel);
				$scope.orderModel.brand = $scope.orderModel.data.brand;
				delete $scope.orderModel.data;
				console.log($scope.orderModel);
				ordersService.sendOrder($scope.orderModel);
				alert("Good! Your order accepted!");
				$scope.messageForToast = 'Good! Your order accepted!';
			}	
		}
	};
	
	
	// $scope.postOrder = function(){
	// 	ordersService.postOrder($scope.postOrderModel);
	// };


	// Input Date
	var currentTime = new Date();
	$scope.currentTime = currentTime;
	$scope.month = ['Januar', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	$scope.monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	$scope.weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	$scope.weekdaysLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
	$scope.disable = [false, 7];
	var days = 0;
	$scope.minDate = (new Date($scope.currentTime.getTime() - ( 1000 * 60 * 60 *24 * days ))).toISOString();
}]);