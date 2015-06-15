class Api::BikesController < ApplicationController
  def index
    @bikes = Bike.all
    render json: @bikes
  end

  def show
    @bike = Bike.find(params['id'])
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
      lng_max: filter_data['lng'][1],
      start_date: filter_data['start_date'],
      start_time: filter_data['start_time'],
      end_date: filter_data['end_date'],
      end_time: filter_data['end_time']
    }

    in_view_bike_ids = find_bikes_in_view(binds)
    available_bike_ids = find_available_bikes(binds)

    ids = (in_view_bike_ids && available_bike_ids).uniq
    bikes = ids.map{ |id| Bike.find_by_id(id) }
  end

  def find_available_bikes(binds)
    nonconflicting_requests = BikeRentalRequest.where(<<-SQL, binds)
      ( (start_date > :end_date) OR (end_date < :start_date) )
    SQL
    available_bike_ids = nonconflicting_requests.map { |request| request.bike.id }
  end

  def find_bikes_in_view(binds)
    if binds[:lng_min].to_f > binds[:lng_max].to_f
      in_view_bikes = Bike.where(<<-SQL, binds)
        bikes.lng BETWEEN :lng_min AND 180
          OR bikes.lng BETWEEN -180 AND :lng_max
      SQL
    else
      in_view_bikes = Bike.where(<<-SQL, binds)
        bikes.lat BETWEEN :lat_min AND :lat_max
          AND bikes.lng BETWEEN :lng_min AND :lng_max
      SQL
    end

    in_view_bikes.pluck(:id)
  end

  def filter_options
    options = params[:filter_data] || {}
    defaults = {
      'lat' => [37.67767358309138, 37.8887756788066],
      'lng' => [-122.56501542968749, -122.26838457031249],
      'start_date' => '2015-03-24',
      'start_time' => '00:00:00',
      'end_date' => '2015-03-24',
      'end_time' => '00:00:00'
    }

    defaults.merge(options)
  end
end
