window.TakeASpin.Views.listingsIndex = Backbone.View.extend({
  template: JST['listing'],
  className: 'listing',

  initialize: function() {
    this.searchFilter = new window.TakeASpin.Views.SearchFilterShow({
      collection: this.collection
    });

    this.bikeList = new window.TakeASpin.Views.BikeListShow({
      collection: this.collection
    });
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.$('.search-filter').html(this.searchFilter.$el);
    this.collection.each(function(bike) {
      var bikeList = new window.TakeASpin.Views.BikeListShow({
        model: bike
      });
      this.$('.bike-list').append(bikeList.$el);
      bikeList.render();
    });
    this.searchFilter.render();
    return this;
  }

});
