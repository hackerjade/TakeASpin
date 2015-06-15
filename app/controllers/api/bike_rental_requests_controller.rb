class Api::BikeRentalRequestsController < ApplicationController
  def index
    @rental = BikeRentalRequest.all
    render json: @rental
  end

  def show
    @rental = BikeRentalRequest.find(params['id'])
    render json: @rental
  end

  def create
    @rental = BikeRentalRequest.new(rental_params)

    if @rental.save
      render json: @rental
    else
      render json: @rental.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @rental = BikeRentalRequest.find(params['id'])
    @rental.try(:destroy)
    render json: {}
  end


  private
  def rental_params
    params.require(:rental).permit(
      :bike_id,
      :user_id,
      :start_date,
      :start_time,
      :end_date,
      :end_time
    )
  end
end