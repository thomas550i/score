	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/Upcoming', {
				templateUrl : 'pages/Upcoming.html',
				controller  : 'UpcomingController'
			})

			// route for the contact page
			.when('/Players', {
				templateUrl : 'pages/Players.html',
				controller  : 'PlayersController'
			})
			
			// route for the contact page
			.when('/MatchDetails', {
				templateUrl : 'pages/MatchDetails.html',
				controller  : 'MatchDetailsController'
			})
			
			// route for the contact page
			.when('/PlayersDetails', {
				templateUrl : 'pages/PlayersDetails.html',
				controller  : 'PlayersDetailsController'
			})
			
			// route for the contact page
			.when('/Old', {
				templateUrl : 'pages/Old.html',
				controller  : 'OldController'
			})
			
			// route for the contact page
			.when('/Gallery', {
				templateUrl : 'pages/Gallery.html',
				controller  : 'GalleryController'
			})
			.otherwise({redirectTo:'/'});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', ['$scope', '$rootScope','util_SERVICE','$location', function($scope,$rootScope,US,$location) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
		
		
		$scope.navpage = function(Mid)
			{
				$location.path( "/"+Mid );
			}
			
	}]);
	
	scotchApp.controller('UpcomingController', ['$scope', '$rootScope','util_SERVICE','$location', function($scope,$rootScope,US,$location) {
		
		US.GetUPCmatches().then(function (response)
										  {
										$scope.UPCM = response.data.matches;
										  });
		
		$scope.navMatchdata = function(Mid)
			{
				$rootScope.Mid = Mid;
				$location.path( "/MatchDetails" );
			}
		
		
	}]);

	scotchApp.controller('OldController', ['$scope', '$rootScope','util_SERVICE','$location', function($scope,$rootScope,US,$location) {
		US.GetOLDmatches().then(function (response)
										  {
										$scope.OLDM = response.data.data;
										  });
		
		$scope.navMatchdata = function(Mid)
			{
				$rootScope.Mid = Mid;
				$location.path( "/MatchDetails" );
			}
	}]);
	
	scotchApp.controller('PlayersController', ['$scope', '$rootScope','util_SERVICE','$location', function($scope,$rootScope,US,$location) {
	
			$scope.navplayerdata = function(pid)
			{
				$rootScope.pid = pid;
				$location.path( "/PlayersDetails" );
			}
	}]);
	
	scotchApp.controller('PlayersDetailsController', ['$scope', '$rootScope','util_SERVICE', function($scope,$rootScope,US) {
	
		
		US.GetPlayerDetails($rootScope.pid).then(function (response)
										  {
										$scope.PDATA = response.data;
										  });
			
	}]);
	
	scotchApp.controller('MatchDetailsController', ['$scope', '$rootScope','util_SERVICE','$location', function($scope,$rootScope,US,$location) {
	
		
		US.GetMatchDetails($rootScope.Mid).then(function (response)
										  {
										$scope.MDATA = response.data;
										  });
		
		$scope.navplayerdata = function(pid)
			{
				$rootScope.pid = pid;
				$location.path( "/PlayersDetails" );
			}
			
	}]);
	
	
	
	
	
scotchApp.directive('loadingss', ['$http', function ($http) {
      return {
          restrict: 'A',
          link: function (scope, element, attrs) {
              scope.isLoading = function () {
                  return $http.pendingRequests.length > 0;
              };
              scope.$watch(scope.isLoading, function (value) {
                  if (value) {
                      $("#loadingss").animate({top: '0px'},800);
                  } else {
                      $("#loadingss").animate({ top: '-100px' },800);
                  }
              });
          }
      };
  } ]);

	
	scotchApp.filter('decodeURIComponent', function() {
    return window.decodeURIComponent;
});