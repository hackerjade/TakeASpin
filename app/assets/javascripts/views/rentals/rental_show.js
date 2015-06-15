window.TakeASpin.Views.RentalShow = Backbone.View.extend({
  template: JST['rentals/show'],
  className: 'rental',

  formatDates: function() {
    var dates = [
      window.moment(this.model.get('start_date')).format('ddd, MMM d'),
      window.moment(this.model.get('start_time')).format('h:mm A'),
      window.moment(this.model.get('end_date')).format('ddd, MMM d'),
      window.moment(this.model.get('end_time')).format('h:mm A')
    ];

    return dates;
  },

  render: function() {
    var dates = this.formatDates();
    var content = this.template({
      rental: this.model,
      dates: dates
    });
    this.$el.html(content);
    return this;
  }
});
