window.TakeASpin.Views.SearchDate = Backbone.View.extend({
  template: JST['search_date'],

  className: 'date',

  events: {
    'dp.hide .time': 'blur',
    'dp.hide .time, .date': 'saveDates',
    'dp.change #pickup-date': 'modReturnDate',
    'dp.change #return-date': 'modPickupDate',
  },

  modReturnDate: function(event) {
    var date = event.date;
    if (date); {
      this.$('#return-date').data("DateTimePicker").minDate(date);
    }
  },

  modPickupDate: function(event) {
    var date = event.date;
    if (date); {
      this.$('#pickup-date').data("DateTimePicker").maxDate(date);
    }
  },

  saveDates: function(event) {
    this.pickupDate = $('#pickup-date').val();
    this.pickupTime = $('#pickup-time').val();
    this.returnDate = $('#return-date').val();
    this.returnTime = $('#return-time').val();
    // console.log(this.pickupDate, this.returnDate, this.pickupTime, this.returnTime);
    // if (this.pickupDate && this.returnDate && this.pickupTime && this.returnTime) {
    //   this.collection.fetch({
    //     data: { filter_data: }
    //   })
    // }
  },

  blur: function(event) {
    $(event.currentTarget).blur();
  },

  render: function() {
    var content = this.template();

    this.$el.html(content);
    this.formatDates();
    return this;
  },

  formatDates: function() {
    ['#pickup-date', '#return-date'].forEach(function(input) {
      this.$(input).datetimepicker({
        format: 'MMM-DD',
        minDate: moment(),
        maxDate: moment().add(3, 'months'),
        showClose: true,
        showClear: true,
        showTodayButton: true
      });
    }.bind(this));

    ['#pickup-time', '#return-time'].forEach(function(input) {
      this.$(input).datetimepicker({
        format: 'H:mm A',
        minDate: moment(),
        maxDate: moment().add(3, 'months'),
        toolbarPlacement: 'bottom',
        showClose: true,
        showClear: true,
        showTodayButton: true
      });
    }.bind(this));
  }
});
