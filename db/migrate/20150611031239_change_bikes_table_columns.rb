class ChangeBikesTableColumns < ActiveRecord::Migration
  def change
    remove_column :bikes, :location
    add_column :bikes, :lat, :float, null: false
    add_column :bikes, :lng, :float, null: false
  end
end
