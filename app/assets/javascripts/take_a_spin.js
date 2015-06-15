window.TakeASpin = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    var collection = new window.TakeASpin.Collections.Bikes();
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
