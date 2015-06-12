window.TakeASpin.Routers.Bikes = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.collection;
  },

  routes: {
    "": "index",
    "tour": "itWorks",
    "bikes/new": "new",
    "bikes/:id": "show",
    "bikes/:id/edit": "edit"
  },

  index: function() {
    this.collection.fetch();
    var view = new window.TakeASpin.Views.SearchShowView({
      collection: this.collection
    });

    this._swapViews(view);
  },

  new: function() {
    var newBike = new window.TakeASpin.Models.Bike();
    var view = new window.TakeASpin.Views.BikeForm({
      collection: this.collection,
      model: newBike
    });

    this._swapViews(view);
  },

  show: function(id) {
    var bike = this.collection.getOrFetch(id);
    var view = new window.TakeASpin.Views.BikeShow({
      model: bike
    });

    this._swapViews(view);
  },

  edit: function(id) {
    var bike = this.collection.getOrFetch(id);
    var view = new window.TakeASpin.Views.BikeForm({
      collection: this.collection,
      model: bike
    });

    this._swapViews(view);
  },

  itWorks: function() {
    var view = new window.TakeASpin.Views.ItWorksShow();
    this._swapViews(view);
  },

  _swapViews: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
