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
	                var url = 'users.json';
	                var registerEmails = [];
	                
	                $http.get(url, viewValue).then(function (response) {
	                	registerEmails = response.data.emails;
	                	angular.forEach(registerEmails, function(value, key) {
						  if(value == viewValue) {
					  		deferred.reject();
						  }
						});
	                    deferred.resolve();
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
	.directive("strongPassword", function() {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        link: function (scope, element, attrs, controller) {
	        	
	            controller.$validators.pwdmax = function (value) {
	            	if(angular.isDefined(value)) {
	            		return value.length <= 15;
	            	}
	            };
	            controller.$validators.pwdmin = function (value) {
	            	if(angular.isDefined(value)) {
	            		return value.length >= 6;
	            	}
	            };
	            controller.$validators.specialcharrule = function (value) {
	                return /^(?=.*[\!\@\#\$\%\^\&\*])/.test(value);
	            };
	            controller.$validators.digitrule = function (value) {
	                return /^(?=.*[0-9])/.test(value);
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
	})
	.directive("fileInput", function() {
		return {
	        restrict: "A",
	        require: "?ngModel",
	        link: function (scope, element, attrs, ngModelCtrl) {
	        	if (attrs.type !== 'file' || !angular.isDefined(ngModelCtrl)) {
					return;
				};

				element.on('change', updateModel);
				scope.$on('$destroy', function () {
					element.off('change', updateModel);
				});

				if (attrs.maxsize) {
					var maxsize = parseInt(attrs.maxsize);
					ngModelCtrl.$validators.maxsize = function(modelValue, viewValue) {
						var value = modelValue || viewValue;
						if (!angular.isArray(value)) {
							value = [value];
						}
						for (var i = value.length - 1; i >= 0; i--) {
							if (value[i] && value[i].size && value[i].size > maxsize) {
								return false;
							}
						}
						return true;
					};
				};

				if (attrs.accept) {
					var accept = attrs.accept.split(',');
					ngModelCtrl.$validators.validtype = function(modelValue, viewValue) {
						var value = modelValue || viewValue;
						if (!angular.isArray(value)) {
							value = [value];
						}
						for (var i = value.length - 1; i >= 0; i--) {
							if (value[i] && accept.indexOf(value[i].type) === -1) {
								return false;
							}
						}
						return true;
					};
				}
				function updateModel (event) {
					var files = event.target.files;
					if (!angular.isDefined(attrs.multiple)) {
						files = files[0];
					} else {
						files = Array.prototype.slice.apply(files);
					}
					ngModelCtrl.$setViewValue(files, event);
				}
	        }
	    };
	});
})();