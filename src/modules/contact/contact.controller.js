angular.module('contactModule')
.controller('contactController', ['$scope', function($scope){
	console.log("contactCtrl is working!");
	$scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzBGuhvUWDbjHtBJDa3O6SB7344Rf9JpM";
}]);