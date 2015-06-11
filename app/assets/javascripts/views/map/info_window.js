window.TakeASpin.Views.InfoShow = Backbone.View.extend({
  template: JST['map/info_window'],

  render: function() {
    var content = this.template({
      bike: this.model
    });

    this.$el.html(content);
    return this;
  }
});
