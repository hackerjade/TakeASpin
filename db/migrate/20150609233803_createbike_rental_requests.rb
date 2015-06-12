class CreatebikeRentalRequests < ActiveRecord::Migration
  def change
    create_table :bike_rental_requests do |t|
      t.integer :bike_id, null: false
      t.integer :user_id, null: false
      t.date :start_date, null: false
      t.time :start_time, null: false
      t.date :end_date, null: false
      t.time :end_time, null: false
      t.string :status, null: false

      t.timestamps
    end

    add_index :bike_rental_requests, [:bike_id, :user_id]
  end
end
