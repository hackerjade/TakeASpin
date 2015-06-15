window.TakeASpin.Views.BikeListShow = Backbone.View.extend({
  className: 'bike-listing',
  template: JST['bike_list_item'],

  render: function() {
    var imgUrl = this.model.get('image_url');
    var content = this.template({
      bike: this.model,
      image: imgUrl
    });
    this.$el.html(content);
    return this;
  }
});
