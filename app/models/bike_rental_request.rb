class BikeRentalRequest < ActiveRecord::Base
  belongs_to :user
  belongs_to :bike

  after_initialize :assign_pending_status

  validates(
    :bike_id,
    :user_id,
    :start_date,
    :start_time,
    :end_date,
    :end_time,
    :status,
    presence: true
  )

  validate :does_not_overlap_approved_request




  def does_not_overlap_approved_request
   return if self.denied?

   unless overlapping_approved_requests.empty?
     errors[:base] <<
       "Request conflicts with existing approved request"
   end
 end
end
