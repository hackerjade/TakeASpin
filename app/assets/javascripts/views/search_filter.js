window.TakeASpin.Views.SearchFilterShow = Backbone.View.extend({
  className: 'search-filter container-fluid',
  template: JST['search_filter'],
  initialize: function(){
    this.dateView = new window.TakeASpin.Views.SearchDate({
          collection: this.collection
    });
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);

    this.$('.date-view').html(this.dateView.$el);
    this.dateView.render();
    return this;
  }

});
