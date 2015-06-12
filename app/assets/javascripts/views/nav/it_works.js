window.TakeASpin.Views.ItWorksShow = Backbone.View.extend({
  template: JST['navs/it_works'],

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
