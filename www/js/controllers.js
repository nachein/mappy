angular.module('mappy.controllers', [])

.controller('MapCtrl', function($scope) {
	//map with venue position
	$scope.position = {
		lat: -34.892589,
		lng: -56.194638
	};

	$scope.$on('mapInitialized', function(event, map) {
		$scope.map = map;

		navigator.geolocation && navigator.geolocation.getCurrentPosition(function(currPosition){
			console.log(currPosition);
			/*
			$scope.position.lat = ;
			$scope.position.lng = ;

			console.log(google);
			$scope.map,setCenter($scope.position);
			console.log($scope.position);
*/
			var myLatLng = new google.maps.LatLng(currPosition.coords.latitude, currPosition.coords.longitude);
			map.setCenter(myLatLng);
		});
	});
})
.controller('SettingsCtrl', function($scope) {});

// .controller('ChatsCtrl', function($scope, Chats) {
//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   }
// })
