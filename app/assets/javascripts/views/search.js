window.TakeASpin.Views.SearchShowView = Backbone.View.extend({
  template: JST['search'],
  className: 'search-page',

  events: {
    'change .search-input.location-input': 'updateMapLoc',
  },

  initialize: function() {
    this.listingsIndex = new window.TakeASpin.Views.listingsIndex({
      collection: this.collection
    });
    this.mapView = new window.TakeASpin.Views.MapShow({
      collection: this.collection
    });
    this.mapView.initMap();
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.$('.map-sidebar').html(this.listingsIndex.$el);
    this.$('.map').html(this.mapView.$el);
    this.listingsIndex.render();
    return this;
  },

  updateMapLoc: function() {
    var that = this;
    var filter = this.$('.search-input.location-input').val();
    var geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({
         'address': filter
       }, function(results, status) {
        if (status == window.google.maps.GeocoderStatus.OK) {
          var loc = results[0].geometry.location;
          that.mapView.changePos(loc);
        } else {
            alert("Not found: " + status);
        }
      }
     );

    this.filter = filter;
    this.$('.searchbar input').focus();
  }
});
