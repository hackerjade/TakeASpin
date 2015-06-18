TakeASpin.Mixins.Dateable = Backbone.View.extend({

  blur: function(event) {
    $(event.currentTarget).blur();
  },

  modReturnDate: function(event) {
    var date = event.date;
    if (date); {
      this.$('#return-date').data("DateTimePicker").minDate(date);
    }
  },

  modReturnTime: function(event) {
    var time = event.date;
    if (time); {
      this.$('#return-time').data("DateTimePicker").minDate(time);
    }
  },

  modPickupDate: function(event) {
    var date = event.date;
    if (date); {
      this.$('#pickup-date').data("DateTimePicker").maxDate(date);
    }
  },

  modPickupTime: function(event) {
    var time = event.date;
    if (time); {
      this.$('#pickup-time').data("DateTimePicker").maxDate(time);
    }
  },

  formatDate: function(input) {
    var date = $(input).data('DateTimePicker').date();
    if (date) {
      return date.format('YYYY-MM-DD');
    }
  },

  saveDates: function() {
    this.pickupDate = this.formatDate('#pickup-date');
    this.pickupTime = $('#pickup-time').val();
    this.returnDate = this.formatDate('#return-date');
    this.returnTime = $('#return-time').val();
    console.log(this.pickupDate, this.pickupTime, this.returnDate, this.returnTime);
  },

  datesFilled: function() {
    return !!(this.pickupDate &&
      this.returnDate &&
      this.pickupTime &&
      this.returnTime);
  },

  initDates: function() {
    ['#pickup-date', '#return-date'].forEach(function(input) {
      this.$(input).datetimepicker({
        format: 'MMM-DD',
        minDate: window.moment(),
        maxDate: window.moment().add(3, 'months'),
        showClose: true,
        showClear: true,
        showTodayButton: true
      });
    }.bind(this));

    ['#pickup-time', '#return-time'].forEach(function(input) {
      this.$(input).datetimepicker({
        format: 'h:mm A',
        toolbarPlacement: 'bottom',
        showClose: true,
        showClear: true,
        showTodayButton: true
      });
    }.bind(this));
  }
});
