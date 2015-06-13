class Bike < ActiveRecord::Base
  validates(
    :owner,
    :image_url,
    :lat,
    :lng,
    :make,
    :model,
    :year,
    :day_rate,
    :hour_rate,
    presence: true
  )

  belongs_to :owner, class_name: 'User', foreign_key: :owner_id
  has_many :rental_request, class_name: 'BikeRentalRequest'
end
