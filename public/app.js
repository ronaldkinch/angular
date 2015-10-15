(function() {
  var app = angular.module('gemStore', ['store-products']);

  app.controller('StoreController', [ '$http', function($http) {
    var store = this;
    store.products = [];
    $http.get('/products.json').success(function(data) {
      store.products = data;
    });
  }]);

  // $http.post('/path/to/resource.json', { param: 'value' });
  // $http.delete('/path/to/resource.json');
  // $http({ method: 'OPTIONS', url: '/path/to/resource.json' });
  // $http({ method: 'PATCH', url: '/path/to/resource.json' });
  // $http({ method: 'TRACE', url: '/path/to/resource.json' });

  app.controller('ReviewController', function() {
    this.review = {};
    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};    };
  });
})();
