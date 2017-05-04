angular.module('ordersModule')
.controller('orderItemController', ['$scope', 'ordersService', function($scope, ordersService){
	console.log("orderItemCtrl is working!");

	$scope.getOrderModel = {
		"_id": {
			"$iod": ''
		},
		brand: '',
		model: '',
		service: ''
	};
	// $scope.postOrderModel = {
	// 	brand: '',
	// 	model: '',
	// 	service: '',
	// 	firstName: '',
	// 	phone: '',
	// 	date: ''
	// };
	
	$scope.selectsDataArr = [];

	$scope.getDataForSelects = function(type){
		ordersService.getDataForSelects(type)
		.then(function(data){
			$scope.selectsDataArr = data;
			console.log("Selects Data Arr", $scope.selectsDataArr);
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
	$scope.today = 'Today';
	$scope.clear = 'Clear';
	$scope.close = 'Close';
	var days = 31;
	$scope.minDate = (new Date($scope.currentTime.getTime() - ( 1000 * 60 * 60 *24 * days ))).toISOString();
	$scope.maxDate = (new Date($scope.currentTime.getTime() + ( 1000 * 60 * 60 *24 * days ))).toISOString();
	$scope.onStart = function () {
	    console.log('onStart');
	};
	$scope.onRender = function () {
	    console.log('onRender');
	};
	$scope.onOpen = function () {
	    console.log('onOpen');
	};
	$scope.onClose = function () {
	    console.log('onClose');
	};
	$scope.onSet = function () {
	    console.log('onSet');
	};
}]);