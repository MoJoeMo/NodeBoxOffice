(function() {
    var customersFactory = function() {
        //set data
        var customers = [
            {
                id : 1,
                joined: '2001-12-02', 
                name : 'Joey', 
                city : 'Gilbert', 
                orderTotal: 9.9956,
                orders : [
                    {
                        id : 1,
                        product : 'Drum Sticks',
                        total : 9.9956
                    },
                    {
                        id : 2,
                        product : 'Drum Set',
                        total : 399.9956
                    }
                ]
            }, 
            {
                id : 2,
                joined: '2010-02-02',
                name : 'Zach', 
                city :'SLC', 
                orderTotal: 19.956,
                orders : [
                    {
                        id : 2,
                        product : 'REI Gift Card',
                        total : 50
                    }
                ]
            }, 
            {
                id : 3,
                joined: '2015-01-01', 
                name : 'Harley', 
                city : 'Washington, D.C.', 
                orderTotal: 109.6,
                orders : [
                    {
                        id : 3,
                        product : 'Legos - DeathStar',
                        total : 99.99
                    },
                    {
                        id : 4,
                        product : 'Legos - XWing',
                        total : 39.99
                    }
                ]
            }
        ];  
        var factory = {};
        factory.getCustomers = function() {
            return customers;
        };
        factory.getCustomer = function(customerID) {
            for (var i = 0, len = customers.length; i < len; i++) { 
                if (customers[i].id === parseInt(customerID)) {  /* this converts the var declared above */
                    return customers[i];
                    break;
                }
            }
            return {};
        }
        return factory;
    };
    angular.module('customersApp').factory('customersFactory', customersFactory);
}());