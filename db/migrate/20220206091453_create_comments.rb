class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :content, null:false
      t.integer :event_log_id, null:false
      t.timestamps
    end
  end
end
