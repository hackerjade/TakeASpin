window.TakeASpin.Collections.Rentals = Backbone.Collection.extend({
  model: window.TakeASpin.Models.Rental,
  url: '/api/bike_rental_requests'
});
