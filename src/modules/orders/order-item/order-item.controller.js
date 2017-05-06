angular.module('ordersModule')
.controller('orderItemController', ['$scope', 'ordersService', function($scope, ordersService){
	$scope.orderModel = {};

	$scope.sendData = function() {
		console.log($scope.orderModel);
	};
	
	$scope.selectsDataArr = [];
	$scope.selectsServicesArr = [
		{
			"service": "Set spoiler"
		},
		{	
			"service": "Painting"
		}
	];

	$scope.getDataForSelects = function(type){
		ordersService.getDataForSelects(type)
		.then(function(data){
			$scope.selectsDataArr = data;
		});
	};	
	
	$scope.getDataForSelects();
	
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