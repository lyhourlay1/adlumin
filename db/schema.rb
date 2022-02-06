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

ActiveRecord::Schema.define(version: 2022_02_06_091453) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "content", null: false
    t.integer "event_log_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "event_logs", force: :cascade do |t|
    t.integer "log_id", null: false
    t.string "source_IP", null: false
    t.string "destination_IP", null: false
    t.boolean "source_valid", null: false
    t.boolean "source_private", null: false
    t.boolean "destination_valid", null: false
    t.boolean "destination_private", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "log", null: false
    t.index ["log_id"], name: "index_event_logs_on_log_id"
  end

end
