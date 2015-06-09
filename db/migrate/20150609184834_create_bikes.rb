class CreateBikes < ActiveRecord::Migration
  def change
    create_table :bikes do |t|
      t.integer :owner_id, null: false
      t.integer :feature_id, null: false
      t.string :image_url, null: false
      t.string :location, null: false
      t.string :make, null: false
      t.string :model, null: false
      t.integer :year, null: false
      t.text :description
      t.integer :day_rate, null: false
      t.integer :hour_rate, null: false

      t.timestamps
    end

    add_index :bikes, [:owner_id, :feature_id]
  end
end
