class CreateTables < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true
      t.string :fname
      t.string :lname
      t.string :password_digest
      t.string :session_token
    end

    add_index :users, [:email, :session_token]
  end
end
