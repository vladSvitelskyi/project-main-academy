angular.module('ordersModule')
.controller('orderItemController', ['$scope', 'ordersService', 'order', 'toastr', function($scope, ordersService, order, toastr){
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

	// FUNCTIONS
	$scope.getDataForSelects = function(type){
		ordersService.getDataForSelects(type)
		.then(function(data){
			$scope.selectsDataArr = data;
		});
	};	

	$scope.sendData = function() {
		// validation
		var flag = 6;
		for(key in $scope.orderModel) {
			if ($scope.orderModel[key] !== 'string') {
				flag --;
				console.log("flag = ", flag);
			}
		}
		if (angular.equals({}, $scope.orderModel)) {
			toastr.warning('Please, fill all the fields.');
		} else {
			if (flag != 0) {
				toastr.warning('Some fields are empty.');
			} else {
				$scope.orderModel.brand = $scope.orderModel.data.brand;
				delete $scope.orderModel.data;;
				ordersService.sendOrder($scope.orderModel);
				toastr.success('Success! Your order accepted.');
			}	
		}
	};
	
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