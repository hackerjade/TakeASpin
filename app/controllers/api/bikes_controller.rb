class Api::BikesController < ApplicationController
  def index
    @bikes = Bike.all
    render json: @bikes
  end

  def show
    @bike = Bike.first
    render json: @bike
  end

  def search
    @bikes = filter_bikes(filter_options)
    render json: @bikes
  end

  private
  def bike_params
    params.require(:bike).permit(:model, :make, :lat, :lng);
  end

  def filter_bikes(filter_data)
    binds = {
      lat_min: filter_data['lat'][0],
      lat_max: filter_data['lat'][1],
      lng_min: filter_data['lng'][0],
      lng_max: filter_data['lng'][1]
    }
    if binds[:lng_min].to_f > binds[:lng_max].to_f
      Bike.where(<<-SQL, binds)
        bikes.lng BETWEEN :lng_min AND 180
          OR bikes.lng BETWEEN -180 AND :lng_max
      SQL
    else
      result = Bike.where(<<-SQL, binds)
        bikes.lat BETWEEN :lat_min AND :lat_max
          AND bikes.lng BETWEEN :lng_min AND :lng_max
      SQL
      result
    end
  end

  def filter_options
    options = params[:filter_data] || {}
    defaults = {
      'lat' => [37.67767358309138, 37.8887756788066],
      'lng' => [-122.56501542968749, -122.26838457031249]
    }

    defaults.merge(options)
  end
end
