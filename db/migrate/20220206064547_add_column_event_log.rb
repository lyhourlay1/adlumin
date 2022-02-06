class AddColumnEventLog < ActiveRecord::Migration[5.2]
  def change
    add_column(:event_logs, :log, :string, null:false)
  end
end
