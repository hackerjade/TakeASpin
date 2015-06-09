window.TakeASpin.Views.BikesIndex = Backbone.View.extend({

  template: JST['bikes/index'],

  initialize: function() {
    this.listenTo(this.collection, 'sync add remove', this.render);
  },

  render: function() {
    var content = this.template({
      bikes: this.collection
    });

    this.$el.html(content);

    return this;
  }

});
