(function() {
    
    var ordersCtrl = function ($scope, $routeParams, customersFactory){
        var customerID = $routeParams.customerID; /* links to ".when('/orders/:customerID'," in app.js */
        $scope.customer = null;
        
        //create a function to determine the customerID
        function init() {            
            //search the customers for the customerID
           //$scope.customers = customersFactory.getCustomers(); /* this function is in customersFactory */
            customersFactory.getCustomer(customerID)
            .success(function(customer){
                $scope.customer = customer;   //set the scope to the data returned by the customersFactry function
            })
            .error(function(data, status, headers, config){
                //handle error
            });
        }           
       
        //call init function after customers are loaded
       init();
    };
    //handle DI to eliminate minification errors
    ordersCtrl.$inject = ['$scope', '$routeParams', 'customersFactory'];
    //define the controller in angular, bind it to the module
    angular.module('customersApp')
        .controller('ordersCtrl', ordersCtrl);
}());
