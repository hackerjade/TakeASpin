json.array! @rentals do |rental|
  json.extract! rental, :id, :bike_id, :user_id, :start_date, :start_time, :end_date, :end_time, :status, :bike
end
