window.TakeASpin.Views.BikeForm = Backbone.View.extend({
  template: JST['bikes/form'],
  className: 'bike-form-show',

  events: {
    'change .form-control.address': 'saveLoc',
    'change .form-control.zip': 'saveLoc',
  },

  initialize: function() {
    this.mapView = new window.TakeASpin.Views.MapShow({
      collection: this.collection
    });
    this.mapView.initMap(13, false);
  },

  render: function() {
    var content = this.template({
      bikes: this.collection,
      bike: this.model
    });

    this.$el.html(content);
    this.$('.map').html(this.mapView.$el);

    return this;
  },

  saveLoc: function() {
    this.address = this.$('.form-control.address').val();
    this.zip = this.$('.form-control.zip').val();
    var filled = this.address && this.zip;
    if (this.address && this.zip) {
      var filter = this.address + ' ' + this.zip;
      this.updateMapLoc(filter);
    }
  },

  updateMapLoc: function(filter) {
    var that = this;
    var geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({
         'address': filter
       }, function(results, status) {
        if (status == window.google.maps.GeocoderStatus.OK) {
          var loc = results[0].geometry.location;
          that.mapView.changePos(loc);
          that.mapView.setZoom(16);
        } else {
            alert("Not found: " + status);
        }
      }
     );

    this.filter = filter;
    this.$('.form-control.address').focus();
  }

});
