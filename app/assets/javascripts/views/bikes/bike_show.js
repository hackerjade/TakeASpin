TakeASpin.Views.BikeShow = TakeASpin.Mixins.Dateable.extend({
  template: JST['bikes/show'],
  className: 'bike-show',

  events: {
    'dp.hide .time': 'blur',
    'dp.hide .time, .date': 'activateButton',
    'dp.change #pickup-date': 'modReturnDate',
    'dp.change #return-date': 'modPickupDate',
    'dp.change #pickup-time': 'modReturnTime',
    'dp.change #return-time': 'modPickupTime',
    'click .rent-button': 'submitRentalForm'
  },

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
    this.initDates();
    $('[data-toggle="tooltip"]').tooltip();

    return this;
  },

  submitRentalForm: function(evt) {
    if ($(evt.target).hasClass("btn-disabled")) {
      evt.preventDefault();
      return false;
    };

    var data = {
      bike_id: this.model.get('id'),
      user_id: window.currentUserId,
      start_date: this.pickupDate,
      start_time: this.pickupTime,
      end_date: this.returnDate,
      end_time: this.returnTime
    };

    debugger;
    var newRentalRequest = new window.TakeASpin.Models.Rental({rental: data});
        Backbone.history.navigate("rentals", { trigger: true });
    // var that = this;
    //
    // newRentalRequest.save({}, {
    //   success: function() {
    //     // that.collection.add(that.model, { merge: true });
    //   },
    //   error: function() {
    //     alert(arguments[1].responseText);
    //   }
    // });
  },

  activateButton: function(event) {
    this.saveDates();
    if (this.datesFilled()) {

      $('.rent-button').removeClass('btn-disabled');
      $('[data-toggle="tooltip"]').tooltip('destroy');
      // add part to show duration and cost
    } else {
      $('.rent-button').addClass('btn-disabled');
      $('[data-toggle="tooltip"]').tooltip();
    }
  }
});
