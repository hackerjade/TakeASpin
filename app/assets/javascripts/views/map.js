window.TakeASpin.Views.MapShow = Backbone.View.extend({
  className: 'map-canvas',

  initialize: function() {

  },

  initMap: function() {
    var mapOptions = {
      center: { lat: 37.775, lng: -122.425},
      zoom: 15
    };

    this._map = new window.google.maps.Map(this.el, mapOptions);
  }

});
