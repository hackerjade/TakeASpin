window.TakeASpin.Views.UserShow = Backbone.View.extend({
  template: JST['navs/user_account'],

  render: function() {
    var user = window.currentUser;
    var content = this.template({
      user: user
    });
    this.$el.html(content);
    return this;
  }
});
