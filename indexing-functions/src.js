module.exports = {
  index: function(array){
    return array.reduce(function(result, element){
      result[element.id.toString()] = element;
      return result;
    }, {});
  },

  groupByCustomer: function(array){
    return array.reduce(function(result, order){
      result[order.customerId] = result[order.customerId] || [];
      result[order.customerId].push(order);
      return result;
    }, {});
  }
}
