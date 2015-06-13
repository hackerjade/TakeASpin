window.TakeASpin.Views.BikeShow = Backbone.View.extend({
  template: JST['bikes/show'],
  className: 'bike-show',

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    console.log('rendering');
    var imgUrl = this.model.get('image_url');
    var content = this.template({
      image: imgUrl,
      bike: this.model
    });

    this.$el.html(content);
    this.formatDates();

    return this;
  },

  events: {
    'dp.hide .time': 'blur',
    'dp.hide .time, .date': 'saveDates',
    'dp.change #pickup-date': 'modReturnDate',
    'dp.change #return-date': 'modPickupDate',
    'click .rent-button': 'submitRentalForm'
  },

  submitRentalForm: function() {
    alert('rent!');
  },

  modReturnDate: function(event) {
    var date = event.date;
    if (date); {
      this.$('#return-date').data("DateTimePicker").minDate(date);
    }
  },

  saveDates: function(event) {
    this.pickupDate = $('#pickup-date').val();
    this.pickupTime = $('#pickup-time').val();
    this.returnDate = $('#return-date').val();
    this.returnTime = $('#return-time').val();
    // console.log(this.pickupDate, this.returnDate, this.pickupTime, this.returnTime);
    // if (this.pickupDate && this.returnDate && this.pickupTime && this.returnTime) {
    //   this.fetchBikes(event)
    // }
  },

  modPickupDate: function(event) {
    var date = event.date;
    if (date); {
      this.$('#pickup-date').data("DateTimePicker").maxDate(date);
    }
  },

  blur: function(event) {
    $(event.currentTarget).blur();
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
