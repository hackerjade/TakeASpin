TakeASpin.Views.SearchDate = TakeASpin.Mixins.Dateable.extend({
  template: JST['search_date'],
  className: 'date',

  events: {
    'dp.hide .time': 'blur',
    // 'dp.hide .time, .date': 'filterBikes',
    'dp.change #pickup-date': 'modReturnDate',
    'dp.change #return-date': 'modPickupDate',
    'dp.change #pickup-time': 'modReturnTime',
    'dp.change #return-time': 'modPickupTime',
  },

  render: function() {
    var content = this.template();

    this.$el.html(content);
    this.initDates();
    return this;
  },

  filterBikes: function(event) {
    // this.saveDates();
    // if (this.datesFilled()) {
    //   var filterDates = {
    //     start_date: this.pickupDate,
    //     start_time: this.pickupTime,
    //     end_date: this.returnDate,
    //     end_time: this.returnTime
    //   };

      // this.collection.fetch({
      //   data: { filter_data: filterDates }
      // });
    // }
  }
});
