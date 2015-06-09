window.TakeASpin = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new window.TakeASpin.Routers.Bikes({
      $rootEl: $('#content'),
      collection: window.TakeASpin.Collections.bikes
    });

    Backbone.history.start();
  }
};

$(window.TakeASpin.initialize);
