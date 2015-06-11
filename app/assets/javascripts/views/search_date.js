window.TakeASpin.Views.SearchDate = Backbone.View.extend({
  template: JST['search_date'],

  className: 'date',
  
  initialize: function(collection, options) {
    this.label = options.label;
  },

  render: function() {
    var content = this.template({
      label: this.label
    });

    this.$el.html(content);
    return this;
  }
});
