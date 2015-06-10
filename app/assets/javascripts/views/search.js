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
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.$('.sidebar').html(this.listingsIndex.render().$el);
    this.$('.map').html(this.mapView.$el);
    this.mapView.initMap();
    return this;
  }
});
