var Indexor = require('../src.js');

var customers = [
  {id: 1, name: 'Gertrude'},
  {id: 2, name: 'Taurean'},
  {id: 3, name: 'Vincent'},
  {id: 4, name: 'Blaze'},
  {id: 5, name: 'Carli'},
  {id: 6, name: 'Rebekah'},
];

var orders = [
  {id: 1, customerId: 1, date: '5/5/2012'},
  {id: 2, customerId: 1, date: '6/2/2014'},
  {id: 3, customerId: 2, date: '5/16/2015'},
  {id: 4, customerId: 3, date: '1/1/2012'},
  {id: 5, customerId: 4, date: '1/24/2014'},
  {id: 6, customerId: 2, date: '7/26/2014'},
];

describe('Indexor.index', function(){
  it('takes an array of objects and creats a new object whose properties are the id and the value is the object the id corresponds to', function(){
    expect(Indexor.index(customers)).toEqual({
      '1': { id: 1, name: 'Gertrude' },
      '2': { id: 2, name: 'Taurean' },
      '3': { id: 3, name: 'Vincent' },
      '4': { id: 4, name: 'Blaze' },
      '5': { id: 5, name: 'Carli' },
      '6': { id: 6, name: 'Rebekah' }
    });
  });
});

describe('Indexor.groupByCustomer', function(){
  it('takes an array of objects creates a key for each customer ID and a value of an arrya that holds all the order objects corresponding to that customer ID', function(){
    expect(Indexor.groupByCustomer(orders)).toEqual({
      '1': [
        { id: 1, customerId: 1, date: '5/5/2012' },
        { id: 2, customerId: 1, date: '6/2/2014' }
      ],
      '2': [
        { id: 3, customerId: 2, date: '5/16/2015' },
        { id: 6, customerId: 2, date: '7/26/2014' }
      ],
      '3': [
        { id: 4, customerId: 3, date: '1/1/2012' }
      ],
      '4': [
        { id: 5, customerId: 4, date: '1/24/2014' }
      ]
    });
  });
});
