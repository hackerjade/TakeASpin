window.TakeASpin.Models.Bike = Backbone.Model.extend({
  urlRoot: '/api/bikes',

  parse: function(response) {
    if (response.rentals) {
      this.rentals.set(response.rentals);
      delete response.rentals;
    }
    return response;
  }
});
