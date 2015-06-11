window.TakeASpin.Views.SearchFilterShow = Backbone.View.extend({
  className: 'search-filter container-fluid',
  template: JST['search_filter'],

  initialize: function() {
    this.pickupDate = new window.TakeASpin.Views.SearchDate({
      collection: this.collection},
      {label: 'Pickup'}
    );

    this.returnDate = new window.TakeASpin.Views.SearchDate({
      collection: this.collection},
      {label: 'Return'}
    );
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.$('.date-view').html(this.pickupDate.$el);
    this.$('.date-view').append(this.returnDate.$el);
    this.pickupDate.render();
    this.returnDate.render();
    return this;
  }

});
