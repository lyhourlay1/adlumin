class EventLog < ApplicationRecord
    # validates :log_id, :source_IP, :destination_IP, :source_valid, :source_private, :destination_valid,
    # :destination_private, presence: true
    validates :log, presence:true
end
