window.TakeASpin.Views.BikeShow = Backbone.View.extend({
  template: JST['bikes/show'],
  className: 'bike-show',

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
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
    var data = {
      bike_id: this.model.get('id'),
      user_id: window.currentUserId,
      // user_id: null,
      start_date: this.pickupDate,
      start_time: this.pickupTime,
      end_date: this.returnDate,
      end_time: this.returnTime
    };
    var that = this;

    var newRentalRequest = new window.TakeASpin.Models.Rental({rental: data});
    newRentalRequest.save({}, {
      success: function() {
        // that.collection.add(that.model, { merge: true });
        Backbone.history.navigate("rentals", { trigger: true });
      },
      error: function() {
        alert(arguments[1].responseText);
      }
    });
  },

  modReturnDate: function(event) {
    var date = event.date;
    if (date); {
      this.$('#return-date').data("DateTimePicker").minDate(date);
    }
  },

  saveDates: function(event) {
    this.pickupDate = $('#pickup-date').data('DateTimePicker').date()._d;
    this.pickupTime = $('#pickup-time').val();
    this.returnDate = $('#return-date').data('DateTimePicker').date()._d;
    this.returnTime = $('#return-time').val();
    if (this.datesFilled()) {
      $('.rent-button').removeClass('disabled');
      // add part to show duration and cost
    } else {
      $('.rent-button').addClass('disabled');
      // add popup button to tell user to fill in dates
    }
  },

  datesFilled: function() {
    return !!(this.pickupDate && this.returnDate && this.pickupTime && this.returnTime);
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
        extraFormats: ["yymmdd"],
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
