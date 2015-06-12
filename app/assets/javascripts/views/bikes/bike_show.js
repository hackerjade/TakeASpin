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

    return this;
  }
});
