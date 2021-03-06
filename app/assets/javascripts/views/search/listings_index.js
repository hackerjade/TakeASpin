window.TakeASpin.Views.ListingsIndex = Backbone.CompositeView.extend({
  template: JST['listing'],
  className: 'listing',

  initialize: function() {
    var searchFilter = new window.TakeASpin.Views.SearchFilterShow({
      collection: this.collection
    });
    this.addSubview(".search-filter", searchFilter);
    this.collection.each(this.addBike.bind(this));
    this.listenTo(this.collection, "add", this.addBike);
    this.listenTo(this.collection, "remove", this.removeBike);
  },

  addBike: function(bike){
    var bikeView = new window.TakeASpin.Views.BikeListShow({
      model: bike
    });
    this.addSubview(".first-child", bikeView);
  },

  removeBike: function(bike){
    this.removeModelSubview('.first-child', bike);
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

});
