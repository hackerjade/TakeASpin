module Api
  class BikesController < ApplicationController
    def index
      @bikes = Bike.all
      render :json => @bikes
    end

    def show
      @bike = Bike.first
      render :json => @bike
    end

    private
    def bike_params
      params.require(:bike).permit(:model, :make);
    end
  end
end
