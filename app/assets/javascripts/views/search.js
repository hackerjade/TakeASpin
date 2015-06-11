window.TakeASpin.Views.SearchShowView = Backbone.CompositeView.extend({
  template: JST['search'],

  className: 'search-page',

  initialize: function() {
    this.mapView = new window.TakeASpin.Views.MapShow({
      collection: this.collection
    });

    this.listingsIndex = new window.TakeASpin.Views.listingsIndex({
      collection: this.collection
    });

    this.listenTo(this.collection, 'sync add remove', this.render)
  },

  events: {
    'change .search-input.location-input': 'fetchCollection',
   // 'keyup .searchbar input': 'fetchCollection'
  },

  fetchCollection: function(event){
  //  event.preventDefault();
   //
   var filter = this.$('.search-input.location-input').val();
   var geocoder = new google.maps.Geocoder();
   geocoder.geocode(
        {'address': filter},
        function(results, status) {
          debugger;
            if (status == google.maps.GeocoderStatus.OK) {
                var loc = results[0].geometry.location;
                // use loc.lat(), loc.lng()
            }
            else {
                alert("Not found: " + status);
            }
        }
    );
  //  this.collection.fetch({ data: { search: filter } });
  //  this.filter = filter;
  //  this.$('.searchbar input').focus();
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.$('.map-sidebar').html(this.listingsIndex.$el);
    this.$('.map').html(this.mapView.$el);
    this.listingsIndex.render();
    this.mapView.initMap();
    return this;
  }
});
