angular.module('contactModule')
.controller('contactController', ['$scope', function($scope){
	$scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzBGuhvUWDbjHtBJDa3O6SB7344Rf9JpM";
	$scope.testCords = [49.23278, 28.48565];
}]);