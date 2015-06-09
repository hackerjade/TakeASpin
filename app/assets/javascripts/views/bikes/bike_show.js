window.TakeASpin.Views.BikeShow = Backbone.View.extend({
  template: JST['bikes/show'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({
      bike: this.model
    });

    this.$el.html(content);

    return this;
  }
});
