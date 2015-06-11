window.TakeASpin.Collections.Bikes = Backbone.Collection.extend({
  model: window.TakeASpin.Models.Bike,
  url: '/api/bikes/search',

  getOrFetch: function(id) {
    var bike = this.get(id);
    var that = this;

    if (!bike) {
      bike = new window.TakeASpin.Models.Bike({ id: id });
      bike.fetch({
        success: function() {
          that.add(bike);
        }
      });
    } else {
      bike.fetch();
    }

    return bike;
  }

});

window.TakeASpin.Collections.bikes = new window.TakeASpin.Collections.Bikes();
