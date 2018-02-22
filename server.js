var express = require('express');
    app = express();

app.use(express.static(__dirname, '/'));


app.get('/customers/:id', function(req, res){
    var customerID = parseInt(req.params.id);
    var data = {};
    for(var i = 0, len = customers.length; i < len; i++) {
        if  (customers[i].id === customerID) {
            data = customers[i];
            break;
        }
    }
    res.json(data);
});

app.get('/customers', function(req, res) {
    res.json(customers);
    //res.json(500, {error : 'An error has occurred...dummy!'});
});

app.get('/orders', function(req, res) {
    var orders = [];
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].orders) {
            for (var j=0,ordersLen=customers[i].orders.length;j<ordersLen;j++) {
                orders.push(customers[i].orders[j]);   
            }
        }
    }  
    res.json(orders);
});

app.delete('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = { status: true };
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           customers.splice(i,1);
           data = { status: true };
           break;
        }
    }  
    res.json(data);
});

app.listen(8080);
console.log('Express listening on port 8080');

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
            },{
                id : 4,
                joined: '2010-12-21',
                name : 'Jessica', 
                city :'SLC', 
                orderTotal: 400,
                orders : [
                    {
                        id : 8,
                        product : 'REI Gift Card',
                        total : 400
                    }
                ]
            },
            {
                id : 5,
                joined: '2008-03-10',
                name : 'Kevin', 
                city :'San Francisco', 
                orderTotal: 900,
                orders : [
                    {
                        id : 9,
                        product : 'Laptop',
                        total : 900
                    }
                ]
            }
    
        ];  