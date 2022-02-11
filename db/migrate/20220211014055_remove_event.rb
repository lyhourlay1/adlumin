class RemoveEvent < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :event_log_id
    add_column :comments, :event_log_id, :integer
  end
end
