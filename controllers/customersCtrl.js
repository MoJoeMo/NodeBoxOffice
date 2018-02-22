/*  BEST PRACTICES OPTION */
(function() {
    
    var customersCtrl = function ($scope, $log, $window, customersFactory, appSettings){
        //set default values
        $scope.sortBy = 'name';
        $scope.reverse = false;        
        $scope.customers = [];      //we need a var to deal with customers
        $scope.appSettings = appSettings;
        
        function init() {
            //$scope.customers = customersFactory.getCustomers(); /* this function is in customersFactory */
            customersFactory.getCustomers()
            .success(function(customers){
                $scope.customers = customers;   //set the scope to the data returned by the customersFactry function
            })
            .error(function(data, status, headers, config){
                $log.log(data.error + ' ' + status);
            });
        }
        init();
         //function to sort data
        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };  
        
        $scope.deleteCustomer = function(customerId) {
            customersFactory.deleteCustomer(customerId)
                .success(function(status) {
                    if (status) {
                        for (var i=0,len=$scope.customers.length;i<len;i++) {
                            if ($scope.customers[i].id === customerId) {
                               $scope.customers.splice(i,1);
                               break;
                            }
                        }  
                    }
                    else {
                        $window.alert('Unable to delete customer');   
                    }
                    
                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        };
    };
    //handle DI to eliminate minification errors
    customersCtrl.$inject = ['$scope', '$log', '$window', 'customersFactory', 'appSettings'];
    //define the controller in angular, bind it to the module
    angular.module('customersApp')
        .controller('customersCtrl', customersCtrl);
}());

/*

new options

*/
/*
    OPTION 1
app.controller('customersCtrl', function($scope) {
    //set default values
    $scope.sortBy = 'name';
    $scope.reverse = false;
    //set data
    $scope.customers = customers=[{joined: '2001-12-02', name : 'Joey', city : 'Gilbert', orderTotal: 9.9956}, {joined: '2010-02-02',name : 'Zach', city :                                              'SLC', orderTotal: 19.956}, {joined: '2015-01-01', name : 'Harley', city : 'Washington, D.C.', orderTotal: 109.6}];
    //function to sort data
    $scope.doSort = function(propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
    }
});*/
/*
    OPTION 2
(function() {
    angular.module('customersApp')
        .controller('customersCtrl', function($scope) {
        //set default values
        $scope.sortBy = 'name';
        $scope.reverse = false;
        //set data
        $scope.customers = customers=[{joined: '2001-12-02', name : 'Joey', city : 'Gilbert', orderTotal: 9.9956}, {joined: '2010-02-02',name : 'Zach', city :                                              'SLC', orderTotal: 19.956}, {joined: '2015-01-01', name : 'Harley', city : 'Washington, D.C.', orderTotal: 109.6}];
        //function to sort data
        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        }
    });
}());
*/
