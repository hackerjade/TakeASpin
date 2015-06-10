window.TakeASpin = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var collection = window.TakeASpin.Collections.bikes;
    var router = new window.TakeASpin.Routers.Bikes({
      $rootEl: $('#content'),
      collection: collection
    });

    var navbar = new window.TakeASpin.Views.NavView({
      router: router,
      collection: collection
    });

    $('#nav').html(navbar.render().$el);

    Backbone.history.start();
  }
};

$(window.TakeASpin.initialize);
