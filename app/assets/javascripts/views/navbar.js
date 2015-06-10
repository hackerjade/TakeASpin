window.TakeASpin.Views.NavView = Backbone.View.extend({
  template: JST['navbar'],

  initialize: function(options) {
    this.router = options.router;
    this.collection = options.collection;
  },

  events: {
    'click .dropdown-toggle': "dropMenu"
  },

  dropMenu: function() {
    $(".dropdown-menu").toggle();
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
});
