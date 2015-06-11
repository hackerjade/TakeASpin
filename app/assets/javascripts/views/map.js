window.TakeASpin.Views.MapShow = Backbone.View.extend({
  className: 'map-canvas',

  initialize: function() {
    this._markers = {};

    this.listenTo(this.collection, 'add', this.addMarker);
    this.listenTo(this.collection, 'remove', this.removeMarker);
  },

  addMarker: function(location) {
    if (this._markers[location.id]) { return; }
    var view = this;

    var marker = new window.google.maps.Marker({
      position: { lat: location.get('lat'), lng: location.get('lng') },
      map: this._map,
      icon: '/assets/drop_pin.png'
    });

    window.google.maps.event.addListener(marker, 'click', function (event) {
      this.infoWindow && this.infoWindow.close();
      view.showMarkerInfo(event, location, marker);
    }.bind(this));

    // this._markers[location.id] = marker;
  },

  attachMapListeners: function () {
    window.google.maps.event.addListener(this._map, 'click', this.closeInfoWindow.bind(this));
    // window.google.maps.event.addListener(this._map, 'idle', this.search.bind(this));
  },

  closeInfoWindow: function() {
    this.infoWindow && this.infoWindow.close();
  },
  //
  // search: function () {
  //   var mapBounds = this._map.getBounds();
  //   var ne = mapBounds.getNorthEast();
  //   var sw = mapBounds.getSouthWest();
  //
  //   var filterData = {
  //     lat: [sw.lat(), ne.lat()],
  //     lng: [sw.lng(), ne.lng()]
  //   };
  //
  //   // this.collection.fetch({
  //   //   data: { filter_data: filterData }
  //   // });
  // },

  removeMarker: function (location) {
    var marker = this._markers[location.id];
    marker.setMap(null);
    delete this._markers[location.id];
  },

  showMarkerInfo: function (event, location, marker) {
    var infoView = new window.TakeASpin.Views.InfoShow({ model: location });
    this.infoWindow = new window.google.maps.InfoWindow({
       content: infoView.render().$el.html(),
       maxWidth: 320
     });
     window.google.maps.event.addListener(this.infoWindow, 'domready', function(){
       var content = $('.gm-style-iw');
       content.next("div").hide();
       content.width(375);
     });


     this.infoWindow.open(this._map, marker);
   },

  initMap: function() {
    var mapOptions = {
      center: { lat: 37.775, lng: -122.425},
      zoom: 15
    };

    this._map = new window.google.maps.Map(this.el, mapOptions);
    this.collection.each(this.addMarker.bind(this));
    this.attachMapListeners();
  }

});
