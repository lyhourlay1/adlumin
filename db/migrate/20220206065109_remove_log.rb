class RemoveLog < ActiveRecord::Migration[5.2]
  def change
    remove_column(:event_logs, :log)
    add_column(:event_logs, :log, :text, null:false)
  end
end
