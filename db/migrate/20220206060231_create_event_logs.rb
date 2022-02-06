class CreateEventLogs < ActiveRecord::Migration[5.2]
  def change
    create_table :event_logs do |t|
      t.integer :log_id, null:false
      t.string :source_IP, null:false
      t.string :destination_IP, null:false
      t.boolean :source_valid, null:false
      t.boolean :source_private, null: false
      t.boolean :destination_valid, null:false
      t.boolean :destination_private, null:false
      t.timestamps
    end
    add_index :event_logs, :log_id 
  end
end
