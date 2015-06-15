window.TakeASpin.Collections.Bikes = Backbone.Collection.extend({
  model: window.TakeASpin.Models.Bike,
  url: '/api/bikes/search',

  initialize: function() {
    this.filterData = {
      lat: [37.67767358309138, 37.8887756788066],
      lng: [-122.56501542968749, -122.26838457031249],
      start_date: '2015-03-23',
      start_time: '00:00:00',
      end_date: '2015-03-25',
      end_time: '00:00:00'
    };
  },

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
  },

  filterBikes: function() {
    this.fetch({
      data: { filter_data: this.filterData }
    });
  }

});

window.TakeASpin.Collections.bikes = new window.TakeASpin.Collections.Bikes();
