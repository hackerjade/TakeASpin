class BikeRentalRequest < ActiveRecord::Base
  belongs_to :user
  belongs_to :bike

  after_initialize :assign_pending_status

  validates(
    :bike,
    :user,
    :start_date,
    :start_time,
    :end_date,
    :end_time,
    :status,
    presence: true
  )

  # validate :does_not_overlap_approved_request

  def pending?
      self.status == "PENDING"
    end


  def does_not_overlap_approved_request
   return if self.denied?

   unless overlapping_approved_requests.empty?
     errors[:base] <<
       "Request conflicts with existing approved request"
   end
 end

 private
  def assign_pending_status
    self.status ||= "PENDING"
  end

  def overlapping_requests
    BikeRentalRequest
     .where("(:id IS NULL) OR (id != :id)", id: self.id)
     .where(bike_id: bike_id)
     .where(<<-SQL, start_date: start_date, end_date: end_date)
      NOT( (start_date > :end_date) OR (end_date < :start_date) )
    SQL
  end

 def overlapping_approved_requests
    overlapping_requests.where("status = 'APPROVED'")
  end
end
