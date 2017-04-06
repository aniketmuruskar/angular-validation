;(function () {
    'use strict';
	// Define the `validator` module
	angular.module('validator', [
	  'ngMessages',
	])
	.directive("uniqueEmail", ['$q', '$http', function ($q, $http) {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        link: function (scope, element, attrs, controller) {
	            
	            controller.$asyncValidators.verify = function (modelValue, viewValue) {
	                
	                var deferred = $q.defer();
	                var url = document.location.origin + 'app/angular-validator/users.json';
	                
	                $http.get(url, viewValue).then(function (response) {
	                    if(response.data.result) {
	                        deferred.reject();
	                    } else {
	                       deferred.resolve(); 
	                    }
	                }, function(response) {
	                    deferred.reject();
	                });
	                return deferred.promise;
	            };
	        }
	    };
	}])
	.directive("alphaInput", function() {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        link: function (scope, element, attrs, controller) {
	            controller.$validators.alphabet = function (value) {
	                return /^[a-zA-Z ]*$/.test(value); 
	            };
	        }
	    };
	})
	.directive("mobileInput", function() {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        link: function (scope, element, attrs, controller) {
	            controller.$validators.contact = function (value) {
	               return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value);               
	            };
	        }
	    };
	})
	.directive("compareTo", function() {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        scope:{
	          otherModelValue:"=compareTo"  
	        },
	        link: function (scope, element, attrs, controller) {
	            controller.$validators.compare = function (value) {
	                return scope.otherModelValue == value;
	            };
	            scope.$watch("otherModelValue", function () {
	                controller.$validate();
	            });
	        }
	    };
	})
	.directive("priceInput", function() {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        link: function (scope, element, attrs, controller) {
	            controller.$validators.price = function (value) {
	                return /^(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value); 
	            };
	        }
	    };
	})
	.directive("pincodeInput", function() {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        link: function (scope, element, attrs, controller) {
	            controller.$validators.pincode = function (value) {
	                return /^([1-9])([0-9]){5}$/.test(value);
	            };
	        }
	    };
	});
})();