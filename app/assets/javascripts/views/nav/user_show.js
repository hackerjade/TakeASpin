window.TakeASpin.Views.UserShow = Backbone.View.extend({
  template: JST['navs/user_account'],

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
