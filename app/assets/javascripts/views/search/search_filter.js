window.TakeASpin.Views.SearchFilterShow = Backbone.View.extend({
  className: 'search-filter container-fluid',
  template: JST['search_filter'],
  initialize: function(){
    this.dateView = new window.TakeASpin.Views.SearchDate({
          collection: this.collection
    });
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    var count = this.collection.models.length;
    var content = this.template({
      count: count
    });
    this.$el.html(content);

    this.$('.date-view').html(this.dateView.$el);
    this.dateView.render();
    return this;
  }

});
