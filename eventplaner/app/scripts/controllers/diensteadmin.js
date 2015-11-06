'use strict';

/**
 * @ngdoc overview
 * @name eventplanerApp
 * @description
 * # eventplanerApp
 *
 * Main module of the application.
 */

  angular.module('eventplanerApp')
    .controller('DiensteadminCtrl', function($scope, $http) {
      
    
    	var apiKey = '?apiKey=CNsFxRUttyc359DNst0W6F2US56heEvp';
    	var api = 'https://api.mongolab.com/api/1/databases/eventplaner/collections/';
    	
    	$http.get(api + 'event' + apiKey).then(function(result) {
    		
    		$scope.users = result.data;
    		
    	});
    	
    	$scope.save = function() {
    		console.log('save');
    		$http.post(api + 'event' + apiKey, $scope.user, {}).then(function(result) {
    			console.log(result);
    			$scope.users.push(result.data);
    			$scope.user = {};
    		});
    	};
      
    	$scope.delete = function(id, index) {
    		console.log('delete');
    		var _id = id.$oid;
    		$http.delete(api + 'event/' + _id + apiKey).then(function(result) {
    			$scope.users.splice(index, 1);
    		});
    	};
        	
    	$scope.update = function(user) {
    		var _id = user._id.$oid;
    		console.log(user);
    		$http.put(api + 'event/' + _id + apiKey, user, {}).then(function(result) {
    			console.log('update', result.data);
    		});
    	};

    });
