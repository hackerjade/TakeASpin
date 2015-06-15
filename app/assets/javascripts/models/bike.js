window.TakeASpin.Models.Bike = Backbone.Model.extend({
  urlRoot: '/api/bikes',

  rentals: function() {
    if (!this._rentals) {
      this._rentals = new TakeASpin.Collections.Rental([], { bike: this });
    }

    return this._rentals;
  },

  owner: function(user) {
    if(!this._ownerName && user) {
      this._ownerName = user.fname + ' ' + user.lname[0] + '.';
    }

    return this._ownerName;
  },

  parse: function(response) {
    if (response.rentals) {
      this.rentals.set(response.rentals);
      delete response.rentals;
    }
    if (response.owner) {
      this.owner(response.owner);
      delete response.owner;
    }

    return response;
  }
});
