window.TakeASpin.Views.NavView = Backbone.View.extend({
  template: JST['navbar'],

  initialize: function(options) {
    this.router = options.router;
    this.collection = options.collection;
  },

  events: {
    'click .dropdown-toggle, .dropdown-menu': "dropMenu",
    'click .log-out': "logOut"
  },

  logOut: function() {
    $.ajax({
      url: '/session',
      type: 'DELETE',
      success: function() {
        window.location = "/";
      },
    });
  },

  dropMenu: function() {
    $(".dropdown-menu").toggle();
  },

  render: function() {
    var content = this.template({ user: window.currentUser});
    this.$el.html(content);

    return this;
  }
});
