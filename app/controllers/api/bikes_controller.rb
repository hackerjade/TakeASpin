class Api::BikesController < ApplicationController
  def index
    @bikes = Bike.all
    render json: @bikes
  end

  def show
    @bike = Bike.find(params['id'])
    render :show
  end

  def search
    options = params[:filter_data] || {}
    @bikes = filter_bikes(options)

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

    bikes = find_available_bikes(binds)
  end

  def find_available_bikes(binds)
    requests = BikeRentalRequest.where(<<-SQL, binds)
      ( (start_date > :end_date) OR (end_date < :start_date) )
    SQL

    binds[:ids] = requests.map{|request| request.bike_id}.uniq


    find_bikes_in_view(binds)
  end

  def find_bikes_in_view(binds)
    if binds[:lng_min].to_f > binds[:lng_max].to_f
      in_view_bikes = Bike.where(id: binds[:ids]).where(<<-SQL, binds)
        bikes.lng BETWEEN :lng_min AND 180
          OR bikes.lng BETWEEN -180 AND :lng_max
      SQL
    else
      in_view_bikes = Bike.where(id: binds[:ids]).where(<<-SQL, binds)
        bikes.lat BETWEEN :lat_min AND :lat_max
          AND bikes.lng BETWEEN :lng_min AND :lng_max
      SQL
    end
  end
end
