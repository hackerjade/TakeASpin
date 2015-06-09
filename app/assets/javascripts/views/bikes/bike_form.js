window.TakeASpin.Views.BikeForm = Backbone.View.extend({

  template: JST['bikes/form'],

  render: function() {
    var content = this.template({
      bikes: this.collection,
      bike: this.model
    });

    this.$el.html(content);

    return this;
  }

});
