(function(){
    
    var app = angular.module('customersApp', ['ngRoute', 'ngAnimate']);  
    
    /* configure different routes to display different views */    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/',
            {
                controller: 'customersCtrl',
                templateUrl: 'views/customers.html'
            })
            .when('/orders/:customerID',
            {
                controller : 'ordersCtrl',
                templateUrl : 'views/orders.html'
            })
            .when('/orders',{
                controller : 'allOrdersCtrl',
                templateUrl : 'views/allorders.html'
            })
            .otherwise({ redirectTo: '/' });
    });
    
}());