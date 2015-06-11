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
