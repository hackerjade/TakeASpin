# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150609233803) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bikes", force: :cascade do |t|
    t.integer  "owner_id",    null: false
    t.integer  "feature_id",  null: false
    t.string   "image_url",   null: false
    t.string   "location",    null: false
    t.string   "make",        null: false
    t.string   "model",       null: false
    t.integer  "year",        null: false
    t.text     "description"
    t.integer  "day_rate",    null: false
    t.integer  "hour_rate",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "bikes", ["owner_id", "feature_id"], name: "index_bikes_on_owner_id_and_feature_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string "email",           null: false
    t.string "fname"
    t.string "lname"
    t.string "password_digest"
    t.string "session_token"
  end

  add_index "users", ["email", "session_token"], name: "index_users_on_email_and_session_token", using: :btree

end
